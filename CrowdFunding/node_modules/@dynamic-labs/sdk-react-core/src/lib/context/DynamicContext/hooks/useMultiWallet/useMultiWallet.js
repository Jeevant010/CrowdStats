'use client'
const useMultiWallet = ({ isBridgeFlow, multiWalletOverride, multiWalletSettings, }) => {
    var _a;
    // Use settings override
    if (multiWalletOverride !== undefined) {
        return multiWalletOverride;
    }
    // Use settings value
    return (_a = (multiWalletSettings || isBridgeFlow)) !== null && _a !== void 0 ? _a : false;
};

export { useMultiWallet };
