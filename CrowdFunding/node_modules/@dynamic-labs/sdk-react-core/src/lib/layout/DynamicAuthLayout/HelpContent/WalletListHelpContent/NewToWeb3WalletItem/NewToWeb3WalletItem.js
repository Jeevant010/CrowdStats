'use client'
import { jsx } from 'react/jsx-runtime';
import { useWalletItemActions } from '../../../../../utils/hooks/useWalletItemActions/useWalletItemActions.js';
import { WalletListItem } from '../../../../../views/WalletList/WalletListItem/WalletListItem.js';

const NewToWeb3WalletItem = ({ children, style, wallet, }) => {
    const { handleWalletItemClick } = useWalletItemActions();
    return (jsx(WalletListItem, { wallet: wallet, onSelectWallet: handleWalletItemClick, tile: children
            ? ({ onClick }) => (jsx("button", { className: 'new-to-web3--button', style: style, onClick: onClick, children: children }))
            : undefined }));
};

export { NewToWeb3WalletItem };
