'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../_virtual/_tslib.cjs');
var EventEmitter = require('eventemitter3');
var utils = require('@dynamic-labs/utils');
var walletBookFallbacks = require('../../../wallet-book-fallbacks.cjs');
var getWalletBookCdnUrl = require('../../helpers/getWalletBookCdnUrl.cjs');
var logger = require('../../helpers/logger.cjs');
var walletBookSchema = require('../../schemas/walletBookSchema.cjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);

const walletBookCache = { current: {} };
const walletBookEmitter = new EventEmitter__default["default"]();
const fetchWalletBook = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const url = getWalletBookCdnUrl.getWalletBookCdnUrl();
    const fn = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        const res = yield fetch(url, { mode: 'cors' });
        if (!res.ok) {
            throw new Error(`Failed to fetch wallet book data from ${url} with status code ${res.status}`);
        }
        const json = yield res.json();
        try {
            const parsedData = walletBookSchema.walletBookSchema.parse(json);
            return parsedData;
        }
        catch (e) {
            logger.logger.error('Error parsing wallet book data', e, json);
            throw e;
        }
    });
    walletBookCache.current = yield utils.retryableFn(fn, {
        fallbackValue: walletBookSchema.walletBookSchema.parse(walletBookFallbacks["default"]),
        maxRetries: 3,
        retryStrategy: 'timeout-and-rejection',
        timeoutMs: 30000,
    });
    walletBookEmitter.emit('walletBookLoaded', walletBookCache.current);
});

exports.fetchWalletBook = fetchWalletBook;
exports.walletBookCache = walletBookCache;
exports.walletBookEmitter = walletBookEmitter;
