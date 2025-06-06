'use client'
import { jsx } from 'react/jsx-runtime';
import { useAuthLayoutChecks } from '../../../utils/hooks/useAuthLayoutChecks/useAuthLayoutChecks.js';
import { useWalletItemActions } from '../../../utils/hooks/useWalletItemActions/useWalletItemActions.js';
import { WalletList } from '../WalletList.js';

const WalletListForDefaultConnection = ({ isWalletConnectList }) => {
    const { handleWalletItemClick } = useWalletItemActions();
    const { showDefaultFooter } = useAuthLayoutChecks();
    return (jsx(WalletList, { onSelectWallet: handleWalletItemClick, isWalletConnectList: isWalletConnectList, showDefaultFooter: showDefaultFooter }));
};

export { WalletListForDefaultConnection };
