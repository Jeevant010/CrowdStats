'use client'
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';
import { version } from '../package.js';
export { ProviderChain } from './RpcProviders.js';
export { ChainRpcProviders, ChainRpcProvidersClass } from './ChainRpcProviders.js';

assertPackageVersion('@dynamic-labs/rpc-providers', version);
