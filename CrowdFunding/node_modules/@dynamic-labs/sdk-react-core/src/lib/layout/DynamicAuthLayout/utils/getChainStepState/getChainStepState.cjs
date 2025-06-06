'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// Derive step state from remaining wallets
const getChainStepState = (chain, chainsLeftToConnect) => {
    const isCurrentStep = chain === chainsLeftToConnect[0];
    const isStepComplete = !chainsLeftToConnect.includes(chain);
    if (isCurrentStep) {
        return 'current';
    }
    if (isStepComplete) {
        return 'done';
    }
    return 'upcoming';
};

exports.getChainStepState = getChainStepState;
