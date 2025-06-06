'use client'
import { DynamicError } from '@dynamic-labs/utils';

const noWalletError = new DynamicError('No wallet connected');
const invalidWalletTypeError = new DynamicError('Primary wallet must use embedded wallet');

export { invalidWalletTypeError, noWalletError };
