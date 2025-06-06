'use client'
import { assertPackageVersion } from '@dynamic-labs/assert-package-version';
import { version } from '../package.js';
export { generateMessageToSign } from './utils/message/message.js';
export { getEnabledProviders } from './utils/getEnabledProviders/getEnabledProviders.js';
export { getEnabledWallets } from './utils/getEnabledWallets/getEnabledWallets.js';
export { getSupportedWallets } from './utils/getSupportedWallets/getSupportedWallets.js';
export { getSupportedChainsForWalletConnector } from './utils/getSupportedChainsForWalletConnector/getSupportedChainsForWalletConnector.js';
export { getWalletConnectorConstructorOptions } from './utils/getWalletConnectorConstructorOptions/getWalletConnectorConstructorOptions.js';

assertPackageVersion('@dynamic-labs/multi-wallet', version);
