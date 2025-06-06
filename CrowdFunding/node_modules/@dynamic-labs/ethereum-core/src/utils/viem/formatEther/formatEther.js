'use client'
import { formatEther as formatEther$1 } from 'viem';
import { formatNumberText } from '@dynamic-labs/utils';

const formatEther = (value, { precision } = {}) => formatNumberText(formatEther$1(value), { precision });

export { formatEther };
