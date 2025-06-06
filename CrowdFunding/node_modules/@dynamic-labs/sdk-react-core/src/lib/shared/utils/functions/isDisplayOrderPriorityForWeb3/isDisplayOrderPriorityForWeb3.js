'use client'
const isDisplayOrderPriorityForWeb3 = (displayOrder) => {
    if (displayOrder.length !== 2)
        return false;
    const [firstPriority, secondPriority] = displayOrder;
    return firstPriority === 'wallet' && secondPriority === 'email';
};

export { isDisplayOrderPriorityForWeb3 };
