'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const useTransactionTotal = ({ transactionValue, gasTotalPrice, isGasSponsored = false, }) => React.useMemo(() => {
    if (isGasSponsored) {
        return transactionValue !== undefined ? transactionValue : BigInt(0);
    }
    if (gasTotalPrice !== undefined && transactionValue !== undefined) {
        return gasTotalPrice + transactionValue;
    }
    return transactionValue || gasTotalPrice;
}, [gasTotalPrice, transactionValue, isGasSponsored]);

exports.useTransactionTotal = useTransactionTotal;
