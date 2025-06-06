'use client'
const useShowEmbeddedWalletActionsUI = (transactionConfirmationSettings, projectSettings) => {
    var _a, _b;
    if (transactionConfirmationSettings === null || transactionConfirmationSettings === void 0 ? void 0 : transactionConfirmationSettings.required) {
        return true;
    }
    if (projectSettings) {
        return ((_b = (_a = projectSettings.sdk.embeddedWallets) === null || _a === void 0 ? void 0 : _a.showEmbeddedWalletActionsUI) !== null && _b !== void 0 ? _b : false);
    }
    return false;
};

export { useShowEmbeddedWalletActionsUI };
