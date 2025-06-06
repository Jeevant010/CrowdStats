import React from 'react';
export interface MaliciousSiteInfo {
    isDefinitelyMalicious: boolean;
    url: string;
    proceedFlow: () => void;
}
export interface GlobalWalletMaliciousViewProps {
    maliciousSiteInfo: MaliciousSiteInfo;
}
export declare const GlobalWalletMaliciousView: React.FC<GlobalWalletMaliciousViewProps>;
export default GlobalWalletMaliciousView;
