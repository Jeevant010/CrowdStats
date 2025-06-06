'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../_virtual/_tslib.cjs');
var isHex = require('./isHex/isHex.cjs');
var logger = require('./logger.cjs');

const eventListenerHandlers = (walletConnector) => {
    const handleAccountChange = (accounts) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        logger.logger.debug(`${walletConnector.name} - accountChange`, accounts);
        if (accounts.length === 0) {
            walletConnector.emit('disconnect');
            return;
        }
        walletConnector.emit('accountChange', { accounts });
    });
    const handleChainChange = (chain) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        logger.logger.debug(`${walletConnector.name} - chainChange`, chain);
        const chainStr = isHex.isHex(chain)
            ? parseInt(chain, 16).toString()
            : chain.toString();
        walletConnector.emit('chainChange', {
            chain: chainStr,
        });
    });
    const handleDisconnect = (error) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        logger.logger.debug(`${walletConnector.name} - disconnect`, error);
        if ((error === null || error === void 0 ? void 0 : error.code) === 1013) {
            return;
        }
        walletConnector.emit('disconnect');
    });
    return {
        handleAccountChange,
        handleChainChange,
        handleDisconnect,
    };
};

exports.eventListenerHandlers = eventListenerHandlers;
