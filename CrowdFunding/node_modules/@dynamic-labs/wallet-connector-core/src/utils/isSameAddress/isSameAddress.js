'use client'
import { normalizeAddress } from './utils/normalizeAddress/normalizeAddress.js';

const isSameAddress = (left, right, chain) => normalizeAddress(left, chain) === normalizeAddress(right, chain);

export { isSameAddress };
