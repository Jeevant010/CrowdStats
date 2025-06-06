import React from 'react';
export interface GlobalWalletConfirmViewProps {
    pairingInfo: {
        name: string;
        url: string;
        icons: string[];
    };
    onConfirm: () => void;
    onCancel: () => void;
}
export declare const GlobalWalletConfirmView: React.FC<GlobalWalletConfirmViewProps>;
export default GlobalWalletConfirmView;
