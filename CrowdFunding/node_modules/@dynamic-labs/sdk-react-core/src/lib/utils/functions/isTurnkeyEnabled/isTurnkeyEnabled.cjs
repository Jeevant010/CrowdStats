'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var isProviderEnabled = require('../isProviderEnabled/isProviderEnabled.cjs');

const isTurnkeyEnabled = (projectSettings) => { var _a; return isProviderEnabled.isProviderEnabled((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.providers) !== null && _a !== void 0 ? _a : [], sdkApiCore.ProviderEnum.Turnkey); };

exports.isTurnkeyEnabled = isTurnkeyEnabled;
