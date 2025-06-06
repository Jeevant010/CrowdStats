'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isPhantomRedirectConnector = (connector) => connector.key === 'phantom' &&
    connector.extractSignature !==
        undefined;

exports.isPhantomRedirectConnector = isPhantomRedirectConnector;
