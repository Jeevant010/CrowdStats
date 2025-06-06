'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getProviderByType = (providers, providerType) => providers.find((p) => p.provider === providerType);

exports.getProviderByType = getProviderByType;
