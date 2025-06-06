'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getMissingChains = (arr1, arr2) => {
    if (!arr1 || !arr2) {
        return;
    }
    // create a Set of all 'chain' values from the second array
    const chainSet = new Set(arr2.map((obj) => obj.walletChain));
    // filter out objects from the first array that have 'chain' present in the set
    const uniqueChains = arr1.filter((obj) => !chainSet.has(obj.chain));
    return uniqueChains;
};

exports.getMissingChains = getMissingChains;
