import React from 'react';
interface GlobalWalletScannerProps {
    jsQR: (data: Uint8ClampedArray, width: number, height: number, providedOptions?: any) => any;
    onScan: (result: string) => void;
}
export declare const GlobalWalletScanner: React.FC<GlobalWalletScannerProps>;
export default GlobalWalletScanner;
