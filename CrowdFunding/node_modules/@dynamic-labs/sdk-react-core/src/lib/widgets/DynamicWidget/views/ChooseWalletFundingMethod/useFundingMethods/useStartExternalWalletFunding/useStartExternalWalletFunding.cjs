'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../../../../_virtual/_tslib.cjs');
var React = require('react');
var useFundWithWallet = require('../../../../../../utils/hooks/useFundWithWallet/useFundWithWallet.cjs');
var getPromptAmountParams = require('../getPromptAmountParams/getPromptAmountParams.cjs');

const useStartExternalWalletFunding = () => {
    const { connectWalletForFunding, promptAmountAndFund } = useFundWithWallet.useInternalFundWithWallet();
    const startExternalWalletFunding = React.useCallback(() => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        try {
            const externalWallet = yield connectWalletForFunding({
                initiatedByWidget: true,
            });
            const props = getPromptAmountParams.getPromptAmountParams({ wallet: externalWallet });
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

exports.useStartExternalWalletFunding = useStartExternalWalletFunding;
