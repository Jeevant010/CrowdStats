export declare const gasPriceOracleAbiAddress = "0x420000000000000000000000000000000000000F";
/**
 * ABI for the OP Stack [`GasPriceOracle` contract](https://github.com/ethereum-optimism/optimism/blob/develop/packages/contracts-bedrock/src/L2/GasPriceOracle.sol).
 * @see https://optimistic.etherscan.io/address/0x420000000000000000000000000000000000000f
 */
export declare const gasPriceOracleAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "_data";
        readonly type: "bytes";
    }];
    readonly name: "getL1Fee";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
