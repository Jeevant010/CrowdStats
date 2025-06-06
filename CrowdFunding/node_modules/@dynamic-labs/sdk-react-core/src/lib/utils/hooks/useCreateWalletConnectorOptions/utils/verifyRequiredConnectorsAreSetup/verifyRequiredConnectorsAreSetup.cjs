'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var verifyMagicIsSetup = require('../verifyMagicIsSetup/verifyMagicIsSetup.cjs');
var verifyZeroDevIsSetup = require('../verifyZeroDevIsSetup/verifyZeroDevIsSetup.cjs');

const verifyRequiredConnectorsAreSetup = (projectSettings, walletConnectors) => {
    verifyMagicIsSetup.verifyMagicIsSetup(projectSettings, walletConnectors);
    verifyZeroDevIsSetup.verifyZeroDevIsSetup(projectSettings, walletConnectors);
};

exports.verifyRequiredConnectorsAreSetup = verifyRequiredConnectorsAreSetup;
