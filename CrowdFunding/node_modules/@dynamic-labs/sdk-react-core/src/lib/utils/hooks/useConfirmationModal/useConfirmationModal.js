'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { jsx } from 'react/jsx-runtime';
import { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useElementById } from '../useElementById/useElementById.js';

/**
 * Allows showing a modal for the user to confirm or cancel.
 *
 * The open method accepts a callback which receives a (resolve, reject) pair to be called if the user
 * confirms or cancels the operation, and must return the ReactNode for the modal to be displayed.
 *
 * @param {string} elementId The id of the modal root, to which the modal will be portalled
 * @returns {ConfirmationModalHookResult} An object with a method to open a modal and a reference to the modal itself.
 */
const useConfirmationModal = ({ elementId, }) => {
    const { createRootElement } = useElementById();
    const modalRootElementRef = createRootElement(elementId);
    const [node, setNode] = useState(null);
    const open = useCallback((builder) => __awaiter(void 0, void 0, void 0, function* () {
        const promise = new Promise((resolve, reject) => {
            try {
                setNode(builder(resolve, reject));
            }
            catch (err) {
                reject(err);
            }
        });
        return promise.finally(() => {
            setNode(undefined);
        });
    }), [setNode]);
    return {
        modal: node ? (jsx("div", { children: createPortal(node, modalRootElementRef.current) })) : undefined,
        open,
    };
};

export { useConfirmationModal };
