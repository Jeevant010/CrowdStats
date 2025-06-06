'use client'
import { createStoreState } from '../../internalImplementation/utils/createStoreState/createStoreState.js';

const { getAuthMode, setAuthMode, useAuthMode } = createStoreState('authMode');

export { getAuthMode, setAuthMode, useAuthMode };
