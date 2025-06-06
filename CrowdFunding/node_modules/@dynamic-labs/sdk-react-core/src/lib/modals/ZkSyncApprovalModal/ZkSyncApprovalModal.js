'use client'
import { jsx } from 'react/jsx-runtime';
import { ConfirmationModal } from '../ConfirmationModal/ConfirmationModal.js';
import { useConfirmationPortal } from '../../utils/hooks/useConfirmationPortal/useConfirmationPortal.js';
import { SessionKeyApprovalView } from '../../views/SessionKeyApprovalView/SessionKeyApprovalView.js';

const ZkSyncApprovalModal = ({ session, onCancel, onApproved, }) => {
    const { onSuccess, show, handleOnModalUnmount, closeModal } = useConfirmationPortal({
        defaultErrorMessage: 'User canceled',
        onReject: onCancel,
        onResolve: onApproved,
    });
    return (jsx(ConfirmationModal, { modalId: 'zksync-approval-modal', show: show, 
        // Disables the closing by clicking outside the modal
        closeModal: () => { }, handleOnModalUnmount: handleOnModalUnmount, children: jsx(SessionKeyApprovalView, { session: session, onApprove: onSuccess, onReject: closeModal }) }));
};

export { ZkSyncApprovalModal };
