import { WalletConnectorBase } from '..';
type BitcoinTransaction = {
    amount: bigint;
    recipientAddress: string;
};
export type BitcoinSignPsbtRequest = {
    allowedSighash: number[];
    unsignedPsbtBase64: string;
    signature?: BitcoinSignPsbtRequestSignature[];
};
export type BitcoinSignPsbtRequestSignature = {
    address: string;
    signingIndexes: number[] | undefined;
    disableAddressValidation?: boolean;
};
export type BitcoinSignPsbtResponse = {
    signedPsbt: string;
};
export interface IBitcoinWalletConnector extends WalletConnectorBase {
    sendBitcoin(transaction: BitcoinTransaction): Promise<string | undefined>;
    sendRawTransaction(transactionHex: string): Promise<string | undefined>;
    signPsbt(request: BitcoinSignPsbtRequest): Promise<BitcoinSignPsbtResponse | undefined>;
    signPsbts(requests: BitcoinSignPsbtRequest[]): Promise<string[] | undefined>;
    isHardwareWalletEnabled: boolean;
    isLedgerAddress(address: string): boolean;
    clearConnectedAccounts(): Promise<void>;
}
export {};
