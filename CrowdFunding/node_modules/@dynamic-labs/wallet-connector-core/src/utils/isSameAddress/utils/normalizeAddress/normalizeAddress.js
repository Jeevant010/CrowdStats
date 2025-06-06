'use client'
import { shouldLowercaseAddress } from '../../../shouldLowercaseAddress.js';

const normalizeAddress = (rawAddress, chain) => {
    let address = rawAddress;
    if (address === null || address === void 0 ? void 0 : address.startsWith('0x')) {
        address = address.slice(2);
    }
    address = shouldLowercaseAddress(chain) ? address === null || address === void 0 ? void 0 : address.toLowerCase() : address;
    return address;
};

export { normalizeAddress };
