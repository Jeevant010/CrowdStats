'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var store = require('../../../../store/internalImplementation/store.cjs');

const onReinitialize = () => {
    store.removeStoreInstance();
    utils.StorageService.clearRegistry();
};

exports.onReinitialize = onReinitialize;
