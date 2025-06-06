'use client'
const findLastPriorityIndex = (walletNames, priorityList) => priorityList.reduce((lastIndex, walletName) => {
    const walletIndex = walletNames.indexOf(walletName.toLowerCase());
    if (walletIndex > lastIndex)
        return walletIndex;
    return lastIndex;
}, -1);

export { findLastPriorityIndex };
