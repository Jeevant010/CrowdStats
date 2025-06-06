'use client'
const isPhantomRedirectConnector = (connector) => connector.key === 'phantom' &&
    connector.extractSignature !==
        undefined;

export { isPhantomRedirectConnector };
