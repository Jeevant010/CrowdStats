'use client'
import { getAddress } from 'viem';

const parseAddress = (address) => {
    try {
        return getAddress(address);
    }
    catch (error) {
        return address;
    }
};

export { parseAddress };
