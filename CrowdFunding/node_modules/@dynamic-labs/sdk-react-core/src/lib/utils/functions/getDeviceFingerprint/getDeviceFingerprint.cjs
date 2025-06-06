'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var utils = require('@dynamic-labs/utils');
var localStorage = require('../../constants/localStorage.cjs');
require('../../constants/colors.cjs');
require('../../constants/values.cjs');

const getDeviceFingerprint = () => {
    if (typeof window === 'undefined')
        return undefined;
    const deviceFingerprint = utils.StorageService.getItem(localStorage.DEVICE_FINGERPRINT);
    if (!deviceFingerprint)
        return undefined;
    return deviceFingerprint;
};

exports.getDeviceFingerprint = getDeviceFingerprint;
