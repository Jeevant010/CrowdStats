'use client'
const isDynamicWaasConnector = (walletConnector) => {
    const dynamicWaasConnector = walletConnector;
    return Boolean(dynamicWaasConnector && dynamicWaasConnector.key === 'dynamicwaas');
};

export { isDynamicWaasConnector };
