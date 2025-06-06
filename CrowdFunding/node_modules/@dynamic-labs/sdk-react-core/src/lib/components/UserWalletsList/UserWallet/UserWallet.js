'use client'
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { WalletIcon } from '@dynamic-labs/wallet-book';
import { shortenWalletAddress } from '../../../shared/utils/functions/shortenWalletAddress/shortenWalletAddress.js';
import { useFetchNameService } from '../../../widgets/DynamicWidget/hooks/useFetchNameService/useFetchNameService.js';
import { Button } from '../../Button/Button.js';
import { Typography } from '../../Typography/Typography.js';

const UserWallet = ({ wallet, onSelect }) => {
    const nameService = useFetchNameService(wallet);
    return (jsx(Button, { buttonClassName: 'user-wallet', buttonVariant: 'card', onClick: () => onSelect === null || onSelect === void 0 ? void 0 : onSelect(), children: jsxs("div", { className: 'user-wallet__info', children: [(nameService === null || nameService === void 0 ? void 0 : nameService.avatar) && (jsx("div", { className: 'user-wallet__info__icon user-wallet__info__icon--avatar', children: jsx("img", { src: nameService.avatar, alt: '' }) })), !(nameService === null || nameService === void 0 ? void 0 : nameService.avatar) && (jsx(WalletIcon, { walletKey: wallet.key, icon: wallet.connector.metadata.icon, className: 'user-wallet__info__icon' })), jsxs("div", { className: 'user-wallet__info__address', children: [!(nameService === null || nameService === void 0 ? void 0 : nameService.name) && (jsx(Typography, { weight: 'medium', variant: 'body_normal', children: shortenWalletAddress(wallet.address) })), (nameService === null || nameService === void 0 ? void 0 : nameService.name) && (jsxs(Fragment, { children: [jsx(Typography, { weight: 'medium', variant: 'body_normal', children: nameService.name }), jsx(Typography, { weight: 'medium', variant: 'body_small', color: 'secondary', children: shortenWalletAddress(wallet.address) })] }))] })] }) }, wallet.id));
};

export { UserWallet };
