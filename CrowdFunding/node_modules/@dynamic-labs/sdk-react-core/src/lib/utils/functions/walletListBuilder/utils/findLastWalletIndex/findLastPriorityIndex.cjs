'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const findLastPriorityIndex = (walletNames, priorityList) => priorityList.reduce((lastIndex, walletName) => {
    const walletIndex = walletNames.indexOf(walletName.toLowerCase());
    if (walletIndex > lastIndex)
        return walletIndex;
    return lastIndex;
}, -1);

exports.findLastPriorityIndex = findLastPriorityIndex;
