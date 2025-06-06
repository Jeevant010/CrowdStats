'use client'
/* eslint-disable max-len */
const gasPriceOracleAbiAddress = '0x420000000000000000000000000000000000000F';
/**
 * ABI for the OP Stack [`GasPriceOracle` contract](https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts-bedrock/src/L2/GasPriceOracle.sol).
 * @see https://optimistic.etherscan.io/address/0x420000000000000000000000000000000000000f
 */
const gasPriceOracleAbi = [
    {
        inputs: [{ internalType: 'bytes', name: '_data', type: 'bytes' }],
        name: 'getL1Fee',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        stateMutability: 'view',
        type: 'function',
    },
];

export { gasPriceOracleAbi, gasPriceOracleAbiAddress };
