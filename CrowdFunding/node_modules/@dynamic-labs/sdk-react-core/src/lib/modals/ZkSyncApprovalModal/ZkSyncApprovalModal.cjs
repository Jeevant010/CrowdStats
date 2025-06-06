'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var ConfirmationModal = require('../ConfirmationModal/ConfirmationModal.cjs');
var useConfirmationPortal = require('../../utils/hooks/useConfirmationPortal/useConfirmationPortal.cjs');
var SessionKeyApprovalView = require('../../views/SessionKeyApprovalView/SessionKeyApprovalView.cjs');

const ZkSyncApprovalModal = ({ session, onCancel, onApproved, }) => {
    const { onSuccess, show, handleOnModalUnmount, closeModal } = useConfirmationPortal.useConfirmationPortal({
        defaultErrorMessage: 'User canceled',
        onReject: onCancel,
        onResolve: onApproved,
    });
    return (jsxRuntime.jsx(ConfirmationModal.ConfirmationModal, { modalId: 'zksync-approval-modal', show: show, 
        // Disables the closing by clicking outside the modal
        closeModal: () => { }, handleOnModalUnmount: handleOnModalUnmount, children: jsxRuntime.jsx(SessionKeyApprovalView.SessionKeyApprovalView, { session: session, onApprove: onSuccess, onReject: closeModal }) }));
};

exports.ZkSyncApprovalModal = ZkSyncApprovalModal;
