'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import EventEmitter from 'eventemitter3';
import { retryableFn } from '@dynamic-labs/utils';
import walletBookFallbacks from '../../../wallet-book-fallbacks.js';
import { getWalletBookCdnUrl } from '../../helpers/getWalletBookCdnUrl.js';
import { logger } from '../../helpers/logger.js';
import { walletBookSchema } from '../../schemas/walletBookSchema.js';

const walletBookCache = { current: {} };
const walletBookEmitter = new EventEmitter();
const fetchWalletBook = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = getWalletBookCdnUrl();
    const fn = () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(url, { mode: 'cors' });
        if (!res.ok) {
            throw new Error(`Failed to fetch wallet book data from ${url} with status code ${res.status}`);
        }
        const json = yield res.json();
        try {
            const parsedData = walletBookSchema.parse(json);
            return parsedData;
        }
        catch (e) {
            logger.error('Error parsing wallet book data', e, json);
            throw e;
        }
    });
    walletBookCache.current = yield retryableFn(fn, {
        fallbackValue: walletBookSchema.parse(walletBookFallbacks),
        maxRetries: 3,
        retryStrategy: 'timeout-and-rejection',
        timeoutMs: 30000,
    });
    walletBookEmitter.emit('walletBookLoaded', walletBookCache.current);
});

export { fetchWalletBook, walletBookCache, walletBookEmitter };
