'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');

const getNetwork = (walletConnector) => _tslib.__awaiter(void 0, void 0, void 0, function* () { var _a; return (_a = walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.getNetwork) === null || _a === void 0 ? void 0 : _a.call(walletConnector); });

exports.getNetwork = getNetwork;
