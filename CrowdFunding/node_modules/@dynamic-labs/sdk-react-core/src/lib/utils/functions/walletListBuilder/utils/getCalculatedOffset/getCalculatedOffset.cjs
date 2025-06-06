'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('../../../../constants/colors.cjs');
var values = require('../../../../constants/values.cjs');
var findLastPriorityIndex = require('../findLastWalletIndex/findLastPriorityIndex.cjs');

const getCalculatedOffset = ({ hasWalletFilter, defaultOffset, list, priorityList, }) => {
    const lastPriorityIndex = findLastPriorityIndex.findLastPriorityIndex(list, priorityList);
    if (defaultOffset === values.DEFAULT_NUMBER_OF_WALLETS_TO_SHOW &&
        !hasWalletFilter &&
        list.length > defaultOffset &&
        lastPriorityIndex !== -1) {
        return lastPriorityIndex + 1;
    }
    else {
        return defaultOffset;
    }
};

exports.getCalculatedOffset = getCalculatedOffset;
