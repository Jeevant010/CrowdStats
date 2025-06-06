'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useFundWithWallet = require('../../../../../../utils/hooks/useFundWithWallet/useFundWithWallet.cjs');
var getPromptAmountParams = require('../getPromptAmountParams/getPromptAmountParams.cjs');

const useStartLinkedWalletFunding = () => {
    const { promptAmountAndFund, chooseLinkedWallet, filteredLinkedWallets } = useFundWithWallet.useInternalFundWithWallet();
    const startLinkedWalletFunding = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const linkedWallet = yield chooseLinkedWallet();
            if (!linkedWallet)
                return;
            const props = getPromptAmountParams.getPromptAmountParams({ wallet: linkedWallet });
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

exports.useStartLinkedWalletFunding = useStartLinkedWalletFunding;
