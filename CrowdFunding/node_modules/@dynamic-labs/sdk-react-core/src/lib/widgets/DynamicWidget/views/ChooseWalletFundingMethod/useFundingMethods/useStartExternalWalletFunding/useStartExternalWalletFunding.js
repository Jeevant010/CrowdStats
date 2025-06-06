'use client'
import { __awaiter } from '../../../../../../../../_virtual/_tslib.js';
import { useCallback } from 'react';
import { useInternalFundWithWallet } from '../../../../../../utils/hooks/useFundWithWallet/useFundWithWallet.js';
import { getPromptAmountParams } from '../getPromptAmountParams/getPromptAmountParams.js';

const useStartExternalWalletFunding = () => {
    const { connectWalletForFunding, promptAmountAndFund } = useInternalFundWithWallet();
    const startExternalWalletFunding = useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const externalWallet = yield connectWalletForFunding({
                initiatedByWidget: true,
            });
            const props = getPromptAmountParams({ wallet: externalWallet });
            promptAmountAndFund(props);
        }
        catch (_a) {
            /* empty */
        }
    }), [connectWalletForFunding, promptAmountAndFund]);
    return {
        startExternalWalletFunding,
    };
};

export { useStartExternalWalletFunding };
