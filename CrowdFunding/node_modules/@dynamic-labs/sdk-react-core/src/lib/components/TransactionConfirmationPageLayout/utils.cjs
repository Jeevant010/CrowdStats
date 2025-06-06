'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../_virtual/_tslib.cjs');
var roundToNthDecimal = require('../../utils/functions/roundToNthDecimal/roundToNthDecimal.cjs');
var dynamicEvents = require('../../events/dynamicEvents.cjs');
var useEffectOnce = require('../../utils/hooks/useEffectOnce/useEffectOnce.cjs');

const useCurrencySymbol = (currentToken, currency) => (currentToken === null || currentToken === void 0 ? void 0 : currentToken.symbol) || currency;
const getValueRounded = (isNativeToken, transaction) => {
    let value;
    if (isNativeToken)
        value = transaction.value ? transaction.format(transaction.value) : '0';
    else {
        value =
            (transaction === null || transaction === void 0 ? void 0 : transaction.nonNativeValue) && (transaction === null || transaction === void 0 ? void 0 : transaction.formatNonNativeToken)
                ? transaction.formatNonNativeToken(transaction.nonNativeValue, transaction.nonNativeDecimal || 18)
                : '0';
    }
    return roundToNthDecimal.roundToNthDecimal(Number(value), 6);
};
const calculateFiatPrice = (amount, price, decimals) => {
    if (amount === undefined || isNaN(amount) || !decimals || !price)
        return 0;
    const scalingFactor = Math.pow(10, decimals);
    try {
        const amountBigInt = BigInt(Math.round(amount * scalingFactor));
        const priceBigInt = BigInt(Math.round(price * scalingFactor));
        const fiatValue = (amountBigInt * priceBigInt) / BigInt(scalingFactor);
        return Number(fiatValue) / scalingFactor;
    }
    catch (e) {
        // Possible issue: getting wrong price / decimals.
        // E.g: price is 0.00002206 and decimal is 5
        //'The number 2.206 cannot be converted to a BigInt because it is not an integer'
        return undefined;
    }
};
const getDisplayFiatPrice = (amountValue, currentToken) => {
    if (!(currentToken === null || currentToken === void 0 ? void 0 : currentToken.price))
        return '--';
    const fiatValue = calculateFiatPrice(amountValue, currentToken.price, currentToken.decimals);
    if (fiatValue === undefined) {
        return '--';
    }
    return fiatValue === 0 || fiatValue >= 0.01 ? fiatValue.toFixed(2) : '<0.01';
};
const useHandleRecovery = (walletConnector, usingSessionKey, onSuccess, shouldInitRecovery, initPasskeyRecoveryProcess, hideModal) => {
    const handleRecovery = () => _tslib.__awaiter(void 0, void 0, void 0, function* () {
        if ((yield shouldInitRecovery()) &&
            walletConnector &&
            !usingSessionKey(walletConnector)) {
            yield initPasskeyRecoveryProcess('email', {
                type: 'sendTransaction',
            }); // Ensure the parameters match the actual function signature
        }
        onSuccess === null || onSuccess === void 0 ? void 0 : onSuccess('callHandlerOutsideModal');
    });
    useEffectOnce.useEffectOnce(() => {
        if (hideModal) {
            handleRecovery();
        }
    });
};
const useHandleSubmitWithChecks = (config, recoveryHandlers, viewHandlers) => (e) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
    const { walletConnector, usingSessionKey, onClickSend, isTurnkeyWallet, userNeedsCrossDomainPasskey, } = config;
    const { shouldInitRecovery, initPasskeyRecoveryProcess } = recoveryHandlers;
    const { pushView, setShowAuthFlow } = viewHandlers;
    if (walletConnector && usingSessionKey(walletConnector)) {
        onClickSend(e);
        return;
    }
    if (yield shouldInitRecovery()) {
        yield initPasskeyRecoveryProcess('email', {
            type: 'sendTransaction',
        });
    }
    if (isTurnkeyWallet && userNeedsCrossDomainPasskey) {
        pushView('passkey-new-domain-detected');
        setShowAuthFlow(true, {
            ignoreIfIsEmbeddedWidget: false,
            performMultiWalletChecks: false,
        });
        dynamicEvents.dynamicEvents.once('passkeyRecoveryCompleted', () => {
            onClickSend(e);
        });
        return;
    }
    onClickSend(e);
});

exports.calculateFiatPrice = calculateFiatPrice;
exports.getDisplayFiatPrice = getDisplayFiatPrice;
exports.getValueRounded = getValueRounded;
exports.useCurrencySymbol = useCurrencySymbol;
exports.useHandleRecovery = useHandleRecovery;
exports.useHandleSubmitWithChecks = useHandleSubmitWithChecks;
