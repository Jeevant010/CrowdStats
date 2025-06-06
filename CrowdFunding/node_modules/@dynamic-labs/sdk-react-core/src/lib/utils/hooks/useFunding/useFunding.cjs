'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var useOnramp = require('../useOnramp/useOnramp.cjs');

/**
 * @deprecated use useOnramp instead
 */
const useFunding = () => {
    const { enabled, open } = useOnramp.useOnramp();
    return {
        enabled,
        openExternalFunding: open,
    };
};

exports.useFunding = useFunding;
