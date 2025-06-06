'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isDynamicWaasConnector = (walletConnector) => {
    const dynamicWaasConnector = walletConnector;
    return Boolean(dynamicWaasConnector && dynamicWaasConnector.key === 'dynamicwaas');
};

exports.isDynamicWaasConnector = isDynamicWaasConnector;
