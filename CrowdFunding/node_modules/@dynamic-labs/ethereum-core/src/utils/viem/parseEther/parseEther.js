'use client'
import { parseEther as parseEther$1 } from 'viem';

const parseEther = (input) => parseEther$1(input, 'wei');

export { parseEther };
