'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DetectedNewWalletModal = require('../../prompts/DetectedNewWalletModal/DetectedNewWalletModal.cjs');
var PendingAccountSwitchModal = require('../../prompts/PendingAccountSwitchModal/PendingAccountSwitchModal.cjs');
var PendingAccountSwitchToLinkModal = require('../../prompts/PendingAccountSwitchToLinkModal/PendingAccountSwitchToLinkModal.cjs');
var UnlinkWalletPopUp = require('../../prompts/UnlinkWalletPopUp/UnlinkWalletPopUp.cjs');
var useMultiWalletPromptState = require('../../hooks/useMultiWalletPromptState/useMultiWalletPromptState.cjs');
var AwaitingConnectionModal = require('../../prompts/AwaitingConnectionModal/AwaitingConnectionModal.cjs');
var PendingSignModal = require('../../prompts/PendingSignModal/PendingSignModal.cjs');
var PrimaryNotConnectedModal = require('../../prompts/PrimaryNotConnectedModal/PrimaryNotConnectedModal.cjs');

const DynamicWidgetPrompts = () => {
    const multiWalletPromptState = useMultiWalletPromptState.useMultiWalletPromptState();
    const mapMultiWalletPromptStateToPromptComponent = {
        awaiting_connection: AwaitingConnectionModal.AwaitingConnectionWidgetPortal,
        detected_new_wallet: DetectedNewWalletModal.DetectedNewWalletWidgetPortal,
        linking_new_wallet: PendingAccountSwitchToLinkModal.PendingAccountSwitchToLinkWidgetPortal,
        pending_account_switch: PendingAccountSwitchModal.PendingAccountSwitchWidgetPortal,
        pending_sign: PendingSignModal.PendingSignWidgetPortal,
        primary_not_connected: PrimaryNotConnectedModal.PrimaryNotConnectedWidgetPortal,
        unlink_wallet: UnlinkWalletPopUp.UnlinkWalletPopUpWidgetPortal,
    };
    if (multiWalletPromptState === 'idle')
        return null;
    const PromptComponent = mapMultiWalletPromptStateToPromptComponent[multiWalletPromptState];
    return jsxRuntime.jsx(PromptComponent, {});
};

exports.DynamicWidgetPrompts = DynamicWidgetPrompts;
