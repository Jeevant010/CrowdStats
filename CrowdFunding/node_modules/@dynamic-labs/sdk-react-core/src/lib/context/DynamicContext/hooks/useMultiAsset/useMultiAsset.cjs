'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const useMultiAsset = ({ multiAssetOverride, multiAssetSettings, }) => {
    // Use settings override
    if (multiAssetOverride !== undefined) {
        return multiAssetOverride;
    }
    // Use settings value
    return multiAssetSettings !== null && multiAssetSettings !== void 0 ? multiAssetSettings : true;
};

exports.useMultiAsset = useMultiAsset;
