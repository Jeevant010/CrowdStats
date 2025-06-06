'use client'
import { useOnramp } from '../useOnramp/useOnramp.js';

/**
 * @deprecated use useOnramp instead
 */
const useFunding = () => {
    const { enabled, open } = useOnramp();
    return {
        enabled,
        openExternalFunding: open,
    };
};

export { useFunding };
