'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getGasFiatValue = (currentToken, transaction, nativePrice) => {
    if (!(currentToken === null || currentToken === void 0 ? void 0 : currentToken.price) || !transaction.fee.gas)
        return;
    let currentNativePrice = currentToken.price;
    if (nativePrice) {
        currentNativePrice = nativePrice;
    }
    return (Number(transaction.format(transaction.fee.gas)) * currentNativePrice).toFixed(2);
};
const getTotalFiatCost = (currentToken, transaction, nativePrice, transactionValue) => {
    const gasValue = getGasFiatValue(currentToken, transaction, nativePrice);
    if (!gasValue || !(currentToken === null || currentToken === void 0 ? void 0 : currentToken.price))
        return;
    const totalFiatCost = Number(gasValue) + Number(transactionValue) * currentToken.price;
    return totalFiatCost.toFixed(2);
};

exports.getGasFiatValue = getGasFiatValue;
exports.getTotalFiatCost = getTotalFiatCost;
