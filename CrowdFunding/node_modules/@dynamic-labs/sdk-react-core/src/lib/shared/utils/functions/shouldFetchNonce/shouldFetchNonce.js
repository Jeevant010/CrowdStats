'use client'
import { isMobile } from '@dynamic-labs/utils';

const shouldFetchNonce = ({ authMode }) => authMode === 'connect-and-sign' || isMobile();

export { shouldFetchNonce };
