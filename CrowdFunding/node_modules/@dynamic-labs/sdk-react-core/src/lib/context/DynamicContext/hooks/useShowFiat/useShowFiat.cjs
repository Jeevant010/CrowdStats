'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const useShowFiat = ({ showFiatOverride, showFiatSettings, }) => {
    // Use settings override
    if (showFiatOverride !== undefined) {
        return showFiatOverride;
    }
    // Use settings value
    return showFiatSettings !== null && showFiatSettings !== void 0 ? showFiatSettings : true;
};

exports.useShowFiat = useShowFiat;
