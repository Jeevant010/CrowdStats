'use client'
import { verifyMagicIsSetup } from '../verifyMagicIsSetup/verifyMagicIsSetup.js';
import { verifyZeroDevIsSetup } from '../verifyZeroDevIsSetup/verifyZeroDevIsSetup.js';

const verifyRequiredConnectorsAreSetup = (projectSettings, walletConnectors) => {
    verifyMagicIsSetup(projectSettings, walletConnectors);
    verifyZeroDevIsSetup(projectSettings, walletConnectors);
};

export { verifyRequiredConnectorsAreSetup };
