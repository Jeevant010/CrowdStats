'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../_virtual/_tslib.cjs');

const generateAllFeeData = (totalFee, nativeTokenDecimals, result) => {
    var _a;
    return (Object.assign(Object.assign({}, result), { feeData: {
            humanReadableAmount: calculateHumanReadableAmount(totalFee, nativeTokenDecimals),
            nativeAmount: totalFee,
            usdAmount: calculateFeeUsd(totalFee, (_a = result.priceData) === null || _a === void 0 ? void 0 : _a.nativeTokenUsdPrice, nativeTokenDecimals),
        } }));
};
// Base Gas Price Oracle ABI
const gasPriceOracleAbi = [
    {
        inputs: [{ internalType: 'bytes', name: '_data', type: 'bytes' }],
        name: 'getL1Fee',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
];
// Helper to estimate L1 data fee for L2 chains that support it
// only supports opStack chains currently
const estimateL1DataFee = (publicClient, transaction) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    // Standard OP Stack Gas Price Oracle address
    const oracleAddress = '0x420000000000000000000000000000000000000F';
    try {
        // Check if the contract exists at this address
        const code = yield publicClient.getBytecode({
            address: oracleAddress,
        });
        if (!code || code === '0x') {
            return BigInt(0);
        }
        const callData = transaction.data || '0x';
        const l1Fee = yield publicClient.readContract({
            abi: gasPriceOracleAbi,
            address: oracleAddress,
            args: [callData],
            functionName: 'getL1Fee',
        });
        return l1Fee;
    }
    catch (e) {
        return BigInt(0);
    }
});
const calculateAAFees = (userOp) => {
    // Sum all gas units
    const totalGasUnits = BigInt(userOp.callGasLimit || 0) +
        BigInt(userOp.verificationGasLimit || 0) +
        BigInt(userOp.preVerificationGas || 0);
    // Multiply by maxFeePerGas to get the total gas cost in wei
    const gasCost = totalGasUnits * BigInt(userOp.maxFeePerGas || 0);
    return gasCost;
};
const isSVMTransactionSponsored = (transaction, from) => {
    var _a, _b;
    if ('version' in transaction) {
        return from !== ((_a = transaction.message) === null || _a === void 0 ? void 0 : _a.staticAccountKeys[0].toBase58());
    }
    if ('feePayer' in transaction) {
        return from !== ((_b = transaction.feePayer) === null || _b === void 0 ? void 0 : _b.toBase58());
    }
    return false;
};
const toDecimalString = (num, decimals) => {
    // Convert to fixed decimal string
    const str = num.toFixed(decimals);
    // Remove trailing zeros after decimal point
    const parts = str.split('.');
    if (parts.length === 1)
        return parts[0];
    const decimalsWithoutTrailingZeros = parts[1].replace(/0+$/, '');
    return decimalsWithoutTrailingZeros
        ? `${parts[0]}.${decimalsWithoutTrailingZeros}`
        : parts[0];
};
const calculateHumanReadableAmount = (amount, decimals) => {
    if (!amount) {
        return undefined;
    }
    // Convert to decimal by dividing by 10^decimals
    const divisor = BigInt(Math.pow(10, decimals));
    const wholePart = amount / divisor;
    const fractionalPart = amount % divisor;
    // Handle the case where there's no fractional part
    if (fractionalPart === BigInt(0)) {
        return wholePart.toString();
    }
    // Pad the fractional part with leading zeros if needed
    const fractionalStr = fractionalPart.toString().padStart(decimals, '0');
    // Remove trailing zeros from fractional part
    const cleanFractionalStr = fractionalStr.replace(/0+$/, '');
    return cleanFractionalStr
        ? `${wholePart}.${cleanFractionalStr}`
        : wholePart.toString();
};
const calculateFeeUsd = (fee, nativeTokenUsdPrice, decimals) => {
    if (!fee || !nativeTokenUsdPrice) {
        return undefined;
    }
    const humanReadableAmount = calculateHumanReadableAmount(fee, decimals);
    if (!humanReadableAmount) {
        return undefined;
    }
    const usdValue = parseFloat(humanReadableAmount) * nativeTokenUsdPrice;
    // Use more decimals for small values, 2 decimals for larger values
    const significantDecimals = usdValue < 0.01 ? decimals : 2;
    return toDecimalString(usdValue, significantDecimals);
};
const getFeeWithRetry = (connection, message) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    if (!(connection === null || connection === void 0 ? void 0 : connection.getFeeForMessage)) {
        return BigInt(0);
    }
    let res = yield connection.getFeeForMessage(message, 'confirmed');
    let retryCount = 0;
    while (res.value === null && retryCount < 5) {
        res = yield connection.getFeeForMessage(message, 'confirmed');
        retryCount++;
    }
    // Convert number to bigint for Solana fees
    return res.value ? BigInt(Number(res.value)) : BigInt(0);
});
const getNativeTokenDecimals = (chain, networkConfigurations) => {
    var _a, _b;
    if (!chain || !networkConfigurations) {
        return 18;
    }
    // the NetworkConfigurationMap uses 'solana" not "SOL"
    if (chain === 'SOL') {
        return 9;
    }
    const chainConfigs = networkConfigurations[chain];
    if (!(chainConfigs === null || chainConfigs === void 0 ? void 0 : chainConfigs.length)) {
        return 18;
    }
    return ((_b = (_a = chainConfigs[0]) === null || _a === void 0 ? void 0 : _a.nativeCurrency) === null || _b === void 0 ? void 0 : _b.decimals) || 18;
};
const isEthereumWallet = (wallet) => wallet.chain === 'EVM';
const isZeroDevConnector = (connector) => (connector === null || connector === void 0 ? void 0 : connector.key) === 'zerodev';
const calculateEVMFees = (publicClient, transaction) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    // Estimate gas if not provided
    const estimatedGas = !transaction.gas
        ? BigInt(yield publicClient.estimateGas(transaction))
        : transaction.gas;
    // Get current gas price which includes both base fee and priority fee
    const gasPrice = yield publicClient.getGasPrice();
    const l2Fee = estimatedGas * gasPrice;
    const l1Fee = yield estimateL1DataFee(publicClient, transaction);
    return l2Fee + l1Fee;
});
const deductSVMFees = (resultWithFee) => resultWithFee.outAssets
    .map((asset) => {
    var _a, _b, _c, _d;
    // Only process SOL assets with valid transferOut
    const transferOutRawValue = (_b = (_a = asset.transferOut) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.rawValue;
    if (asset.asset.type === 'SOL' ||
        (asset.asset.type === 'NATIVE' && transferOutRawValue)) {
        const [transferOut] = asset.transferOut;
        const nativeAmountStr = (_c = resultWithFee.feeData.nativeAmount) === null || _c === void 0 ? void 0 : _c.toString();
        // If exact match, mark for removal
        if (nativeAmountStr && transferOutRawValue === nativeAmountStr) {
            return null;
        }
        if (!transferOutRawValue) {
            return asset;
        }
        // Otherwise, deduct the fee from the transfer amount
        const nativeAmountToDeduct = resultWithFee.feeData.nativeAmount || BigInt(0);
        const newRawValue = (BigInt(transferOutRawValue) - nativeAmountToDeduct).toString();
        const newValue = (Number(newRawValue) / Math.pow(10, 9)).toString();
        const newUsdPrice = (Number(newValue) * (((_d = resultWithFee.priceData) === null || _d === void 0 ? void 0 : _d.nativeTokenUsdPrice) || 0)).toString();
        return Object.assign(Object.assign({}, asset), { transferOut: [
                Object.assign(Object.assign({}, transferOut), { rawValue: newRawValue, summary: `Transfer ${newValue} SOL`, usdPrice: newUsdPrice, value: newValue }),
            ] });
    }
    return asset;
})
    .filter((asset) => asset !== null);

exports.calculateAAFees = calculateAAFees;
exports.calculateEVMFees = calculateEVMFees;
exports.calculateFeeUsd = calculateFeeUsd;
exports.calculateHumanReadableAmount = calculateHumanReadableAmount;
exports.deductSVMFees = deductSVMFees;
exports.estimateL1DataFee = estimateL1DataFee;
exports.gasPriceOracleAbi = gasPriceOracleAbi;
exports.generateAllFeeData = generateAllFeeData;
exports.getFeeWithRetry = getFeeWithRetry;
exports.getNativeTokenDecimals = getNativeTokenDecimals;
exports.isEthereumWallet = isEthereumWallet;
exports.isSVMTransactionSponsored = isSVMTransactionSponsored;
exports.isZeroDevConnector = isZeroDevConnector;
