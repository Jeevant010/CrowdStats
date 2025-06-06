'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const solToLamports = (solAmount) => {
    const lamportsPerSol = 1000000000; // 1 SOL = 1,000,000,000 Lamports
    return solAmount * lamportsPerSol;
};

exports.solToLamports = solToLamports;
