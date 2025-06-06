'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const isDisplayOrderPriorityForWeb3 = (displayOrder) => {
    if (displayOrder.length !== 2)
        return false;
    const [firstPriority, secondPriority] = displayOrder;
    return firstPriority === 'wallet' && secondPriority === 'email';
};

exports.isDisplayOrderPriorityForWeb3 = isDisplayOrderPriorityForWeb3;
