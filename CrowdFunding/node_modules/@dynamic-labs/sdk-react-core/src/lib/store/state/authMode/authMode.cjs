'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createStoreState = require('../../internalImplementation/utils/createStoreState/createStoreState.cjs');

const { getAuthMode, setAuthMode, useAuthMode } = createStoreState.createStoreState('authMode');

exports.getAuthMode = getAuthMode;
exports.setAuthMode = setAuthMode;
exports.useAuthMode = useAuthMode;
