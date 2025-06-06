'use client'
import { isMobile } from '@dynamic-labs/utils';

const getPlatformForConnector = (connector) => isMobile() || connector.isWalletConnect ? 'mobile' : 'desktop';

export { getPlatformForConnector };
