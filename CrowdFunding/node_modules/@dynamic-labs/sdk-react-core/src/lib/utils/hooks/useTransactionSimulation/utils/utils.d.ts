import { NetworkConfigurationMap, ISolanaTransaction, IEVMTransaction } from '@dynamic-labs/types';
import { ChainEnum, SimulateTransactionResponse, AssetDiff } from '@dynamic-labs/sdk-api-core';
import { WalletConnector, Wallet, IPublicClient, ISolanaConnection } from '@dynamic-labs/wallet-connector-core';
import { FeeData } from '../classes/useSVMTransactionSimulation';
export declare const generateAllFeeData: (totalFee: bigint, nativeTokenDecimals: number, result: SimulateTransactionResponse) => {
    feeData: {
        humanReadableAmount: string | undefined;
        nativeAmount: bigint;
        usdAmount: string | undefined;
    };
    inAssets: AssetDiff[];
    outAssets: AssetDiff[];
    counterparties?: string[] | undefined;
    priceData: import("@dynamic-labs/sdk-api-core").PriceData;
    showTotalFiat: boolean;
    validation?: import("@dynamic-labs/sdk-api-core").BlockaidValidation | undefined;
    assetExposures?: import("@dynamic-labs/sdk-api-core").AssetExposure[] | undefined;
};
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
export declare const estimateL1DataFee: (publicClient: IPublicClient, transaction: IEVMTransaction) => Promise<bigint>;
export declare const calculateAAFees: (userOp: any) => bigint;
export declare const isSVMTransactionSponsored: (transaction: ISolanaTransaction, from: string) => boolean;
export declare const calculateHumanReadableAmount: (amount: bigint | undefined, decimals: number) => string | undefined;
export declare const calculateFeeUsd: (fee: bigint | undefined, nativeTokenUsdPrice: number | undefined, decimals: number) => string | undefined;
export declare const getFeeWithRetry: (connection: ISolanaConnection, message: any) => Promise<bigint>;
export declare const getNativeTokenDecimals: (chain: ChainEnum | undefined, networkConfigurations: NetworkConfigurationMap | undefined) => number;
export declare const isEthereumWallet: (wallet: Wallet) => boolean;
export declare const isZeroDevConnector: (connector: WalletConnector) => boolean;
export declare const calculateEVMFees: (publicClient: IPublicClient, transaction: {
    data?: string;
    to: string;
    value: bigint;
    from: string;
    gas?: bigint;
}) => Promise<bigint>;
export declare const deductSVMFees: (resultWithFee: SimulateTransactionResponse & {
    feeData: FeeData;
}) => AssetDiff[];
