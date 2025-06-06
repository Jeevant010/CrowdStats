'use client'
const getWalletLimitations = (walletLimitations) => {
    if (!(walletLimitations === null || walletLimitations === void 0 ? void 0 : walletLimitations.browserExtension)) {
        return;
    }
    const { unsupportedEvents, unsupportedMethods } = walletLimitations.browserExtension;
    return {
        desktop: {
            unsupportedEvents: unsupportedEvents,
            unsupportedMethods: unsupportedMethods,
        },
    };
};

export { getWalletLimitations };
