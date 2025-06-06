'use client'
import { jsx } from 'react/jsx-runtime';
import { DetectedNewWalletWidgetPortal } from '../../prompts/DetectedNewWalletModal/DetectedNewWalletModal.js';
import { PendingAccountSwitchWidgetPortal } from '../../prompts/PendingAccountSwitchModal/PendingAccountSwitchModal.js';
import { PendingAccountSwitchToLinkWidgetPortal } from '../../prompts/PendingAccountSwitchToLinkModal/PendingAccountSwitchToLinkModal.js';
import { UnlinkWalletPopUpWidgetPortal } from '../../prompts/UnlinkWalletPopUp/UnlinkWalletPopUp.js';
import { useMultiWalletPromptState } from '../../hooks/useMultiWalletPromptState/useMultiWalletPromptState.js';
import { AwaitingConnectionWidgetPortal } from '../../prompts/AwaitingConnectionModal/AwaitingConnectionModal.js';
import { PendingSignWidgetPortal } from '../../prompts/PendingSignModal/PendingSignModal.js';
import { PrimaryNotConnectedWidgetPortal } from '../../prompts/PrimaryNotConnectedModal/PrimaryNotConnectedModal.js';

const DynamicWidgetPrompts = () => {
    const multiWalletPromptState = useMultiWalletPromptState();
    const mapMultiWalletPromptStateToPromptComponent = {
        awaiting_connection: AwaitingConnectionWidgetPortal,
        detected_new_wallet: DetectedNewWalletWidgetPortal,
        linking_new_wallet: PendingAccountSwitchToLinkWidgetPortal,
        pending_account_switch: PendingAccountSwitchWidgetPortal,
        pending_sign: PendingSignWidgetPortal,
        primary_not_connected: PrimaryNotConnectedWidgetPortal,
        unlink_wallet: UnlinkWalletPopUpWidgetPortal,
    };
    if (multiWalletPromptState === 'idle')
        return null;
    const PromptComponent = mapMultiWalletPromptStateToPromptComponent[multiWalletPromptState];
    return jsx(PromptComponent, {});
};

export { DynamicWidgetPrompts };
