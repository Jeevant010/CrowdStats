'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var PlatformService = require('../services/PlatformService/PlatformService.cjs');
require('../../_virtual/_tslib.cjs');
require('tldts');

const getTLD = () => PlatformService.PlatformService.getTLD();

exports.getTLD = getTLD;
