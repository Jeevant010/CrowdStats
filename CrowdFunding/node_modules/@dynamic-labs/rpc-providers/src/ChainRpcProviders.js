'use client'
import { __awaiter } from '../_virtual/_tslib.js';
import { ProviderChain } from './RpcProviders.js';

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
        Object.values(ProviderChain).forEach((chain) => {
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
        return __awaiter(this, void 0, void 0, function* () {
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

export { ChainRpcProviders, ChainRpcProvidersClass };
