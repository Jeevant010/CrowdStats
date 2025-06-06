'use client'
import { createStoreState } from '../../internalImplementation/utils/createStoreState/createStoreState.js';

const { getPrimaryWalletId, setPrimaryWalletId, usePrimaryWalletId, resetPrimaryWalletId, } = createStoreState('primaryWalletId');

export { getPrimaryWalletId, resetPrimaryWalletId, setPrimaryWalletId, usePrimaryWalletId };
