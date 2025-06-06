'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../_virtual/_tslib.cjs');
var RpcProviders = require('./RpcProviders.cjs');

class ChainRpcProvidersClass {
    static get client() {
        if (!ChainRpcProvidersClass.instance) {
            ChainRpcProvidersClass.instance = new ChainRpcProvidersClass();
        }
        return ChainRpcProvidersClass.instance;
    }
    constructor() {
        this.getProvidersMethods = {};
    }
    static getProviders(configurations) {
        Object.values(RpcProviders.ProviderChain).forEach((chain) => {
            var _a, _b;
            if (!ChainRpcProvidersClass.providers[chain]) {
                const providers = (_b = (_a = ChainRpcProvidersClass.client.getProvidersMethods)[chain]) === null || _b === void 0 ? void 0 : _b.call(_a, configurations);
                if (providers) {
                    Object.assign(ChainRpcProvidersClass.providers, {
                        [chain]: providers,
                    });
                }
            }
        });
        return ChainRpcProvidersClass.providers;
    }
    static registerChainProviders(providerChain, fn) {
        return _tslib.__awaiter(this, void 0, void 0, function* () {
            if (!ChainRpcProvidersClass.client.getProvidersMethods[providerChain]) {
                Object.assign(ChainRpcProvidersClass.client.getProvidersMethods, {
                    [providerChain]: fn,
                });
            }
        });
    }
}
ChainRpcProvidersClass.providers = {};
ChainRpcProvidersClass.wipeInstance = () => {
    ChainRpcProvidersClass.instance = undefined;
    ChainRpcProvidersClass.providers = {};
};
//@ts-ignore
const ChainRpcProviders = ChainRpcProvidersClass;

exports.ChainRpcProviders = ChainRpcProviders;
exports.ChainRpcProvidersClass = ChainRpcProvidersClass;
