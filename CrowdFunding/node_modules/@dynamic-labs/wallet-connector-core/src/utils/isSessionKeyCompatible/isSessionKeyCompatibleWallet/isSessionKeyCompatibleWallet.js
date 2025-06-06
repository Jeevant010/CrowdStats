'use client'
import { isSessionKeyCompatibleWalletConnector } from '../isSessionKeyCompatibleWalletConnector/isSessionKeyCompatibleWalletConnector.js';

const isSessionKeyCompatibleWallet = (wallet) => isSessionKeyCompatibleWalletConnector(wallet.connector);

export { isSessionKeyCompatibleWallet };
