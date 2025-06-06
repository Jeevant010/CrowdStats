'use client'
import { __rest, __awaiter } from '../../_virtual/_tslib.js';
import { BaseWallet } from '@dynamic-labs/types';
import { normalizeAddress } from '../utils/isSameAddress/utils/normalizeAddress/normalizeAddress.js';
import { logger } from '../utils/logger.js';

class Wallet extends BaseWallet {
    constructor(_a) {
        var { connector } = _a, props = __rest(_a, ["connector"]);
        super(props);
        this._connector = connector;
    }
    /**
     * Gets the wallet connector.
     */
    get connector() {
        return this._connector;
    }
    /**
     * Retrieves the balance of the wallet.
     * @returns A promise that resolves to the balance of the wallet as a string,
     * or undefined if the balance cannot be retrieved.
     */
    getBalance() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connector.getBalance(this.address);
        });
    }
    /**
     * Retrieves the name service data associated with the wallet.
     * @returns A promise that resolves to the name service data of the wallet,
     * or undefined if the data cannot be retrieved.
     */
    getNameService() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connector.getNameService(this.address);
        });
    }
    /**
     * Retrieves the network that the wallet is connected to.
     * @returns A promise that resolves to the network value as a string or number,
     * or undefined if the network cannot be retrieved.
     */
    getNetwork() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connector.getNetwork(true);
        });
    }
    /**
     * If the wallet is connected.
     * @returns A promise that resolves to true the wallet is connected or false if it's not connected.
     */
    isConnected() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connectedAccounts = yield this._connector.getConnectedAccounts();
                return connectedAccounts
                    .map((address) => normalizeAddress(address, this.chain))
                    .includes(normalizeAddress(this.address, this.chain));
            }
            catch (error) {
                logger.error('[Wallet] isConnected - Error detecting if wallet is connected', error);
                return false;
            }
        });
    }
    /**
     * Proves ownership of the wallet by signing a message.
     * @param messageToSign - The message to sign.
     * @returns A promise that resolves to the signature of the message as a string,
     *  or undefined if the message cannot be signed.
     */
    proveOwnership(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connector.proveOwnership(this.address, messageToSign);
        });
    }
    /**
     * Signs a message using the wallet.
     * @param messageToSign - The message to sign.
     * @returns A promise that resolves to the signature of the message as a string,
     * or undefined if the message cannot be signed.
     */
    signMessage(messageToSign) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sync();
            return this._connector.signMessage(messageToSign, {
                address: this.address,
            });
        });
    }
    /**
     * Switches the network that the wallet is connected to.
     * @param networkChainId - The chain id of the network to switch to.
     * @returns A promise that resolves when the network is switched.
     */
    switchNetwork(networkChainId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connector.switchNetwork({
                networkChainId,
            });
        });
    }
    /**
     * Synchronizes the wallet with the connector.
     * @returns A promise that resolves when the wallet is connected and active.
     */
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            return this._connector.validateActiveWallet(this.address);
        });
    }
}

export { Wallet };
