'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var createStoreState = require('../../internalImplementation/utils/createStoreState/createStoreState.cjs');

const { getPrimaryWalletId, setPrimaryWalletId, usePrimaryWalletId, resetPrimaryWalletId, } = createStoreState.createStoreState('primaryWalletId');

exports.getPrimaryWalletId = getPrimaryWalletId;
exports.resetPrimaryWalletId = resetPrimaryWalletId;
exports.setPrimaryWalletId = setPrimaryWalletId;
exports.usePrimaryWalletId = usePrimaryWalletId;
