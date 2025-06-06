'use client'
import '../../../../constants/colors.js';
import { DEFAULT_NUMBER_OF_WALLETS_TO_SHOW } from '../../../../constants/values.js';
import { findLastPriorityIndex } from '../findLastWalletIndex/findLastPriorityIndex.js';

const getCalculatedOffset = ({ hasWalletFilter, defaultOffset, list, priorityList, }) => {
    const lastPriorityIndex = findLastPriorityIndex(list, priorityList);
    if (defaultOffset === DEFAULT_NUMBER_OF_WALLETS_TO_SHOW &&
        !hasWalletFilter &&
        list.length > defaultOffset &&
        lastPriorityIndex !== -1) {
        return lastPriorityIndex + 1;
    }
    else {
        return defaultOffset;
    }
};

export { getCalculatedOffset };
