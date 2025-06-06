'use client'
import { useMemo } from 'react';

const useTransactionTotal = ({ transactionValue, gasTotalPrice, isGasSponsored = false, }) => useMemo(() => {
    if (isGasSponsored) {
        return transactionValue !== undefined ? transactionValue : BigInt(0);
    }
    if (gasTotalPrice !== undefined && transactionValue !== undefined) {
        return gasTotalPrice + transactionValue;
    }
    return transactionValue || gasTotalPrice;
}, [gasTotalPrice, transactionValue, isGasSponsored]);

export { useTransactionTotal };
