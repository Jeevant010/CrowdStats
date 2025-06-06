'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var assertPackageVersion = require('@dynamic-labs/assert-package-version');
var _package = require('../package.cjs');
var RpcProviders = require('./RpcProviders.cjs');
var ChainRpcProviders = require('./ChainRpcProviders.cjs');

assertPackageVersion.assertPackageVersion('@dynamic-labs/rpc-providers', _package.version);

Object.defineProperty(exports, 'ProviderChain', {
  enumerable: true,
  get: function () { return RpcProviders.ProviderChain; }
});
exports.ChainRpcProviders = ChainRpcProviders.ChainRpcProviders;
exports.ChainRpcProvidersClass = ChainRpcProviders.ChainRpcProvidersClass;
