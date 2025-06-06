'use client'
import { __awaiter } from '../../_virtual/_tslib.js';
import { isHex } from './isHex/isHex.js';
import { logger } from './logger.js';

const eventListenerHandlers = (walletConnector) => {
    const handleAccountChange = (accounts) => __awaiter(void 0, void 0, void 0, function* () {
        logger.debug(`${walletConnector.name} - accountChange`, accounts);
        if (accounts.length === 0) {
            walletConnector.emit('disconnect');
            return;
        }
        walletConnector.emit('accountChange', { accounts });
    });
    const handleChainChange = (chain) => __awaiter(void 0, void 0, void 0, function* () {
        logger.debug(`${walletConnector.name} - chainChange`, chain);
        const chainStr = isHex(chain)
            ? parseInt(chain, 16).toString()
            : chain.toString();
        walletConnector.emit('chainChange', {
            chain: chainStr,
        });
    });
    const handleDisconnect = (error) => __awaiter(void 0, void 0, void 0, function* () {
        logger.debug(`${walletConnector.name} - disconnect`, error);
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

export { eventListenerHandlers };
