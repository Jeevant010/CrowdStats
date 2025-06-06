'use client'
import { useConnectedWalletsNetworkValidation } from '../../utils/hooks/useConnectedWalletsNetworkValidation/useConnectedWalletsNetworkValidation.js';

const UseNetworkValidation = () => {
    useConnectedWalletsNetworkValidation();
    return null;
};

export { UseNetworkValidation };
