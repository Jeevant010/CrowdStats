'use client'
import { __awaiter } from '../../../../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { useInternalFundWithWallet } from '../../../../../../utils/hooks/useFundWithWallet/useFundWithWallet.js';
import { getPromptAmountParams } from '../getPromptAmountParams/getPromptAmountParams.js';

const useStartLinkedWalletFunding = () => {
    const { promptAmountAndFund, chooseLinkedWallet, filteredLinkedWallets } = useInternalFundWithWallet();
    const startLinkedWalletFunding = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const linkedWallet = yield chooseLinkedWallet();
            if (!linkedWallet)
                return;
            const props = getPromptAmountParams({ wallet: linkedWallet });
            promptAmountAndFund(props);
        }
        catch (_a) {
            /* empty */
        }
    }), [chooseLinkedWallet, promptAmountAndFund]);
    return {
        filteredLinkedWallets,
        startLinkedWalletFunding,
    };
};

export { useStartLinkedWalletFunding };
