'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _tslib = require('../../../../../_virtual/_tslib.cjs');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactDom = require('react-dom');
var useElementById = require('../useElementById/useElementById.cjs');

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
    const { createRootElement } = useElementById.useElementById();
    const modalRootElementRef = createRootElement(elementId);
    const [node, setNode] = React.useState(null);
    const open = React.useCallback((builder) => _tslib.__awaiter(void 0, void 0, void 0, function* () {
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
        modal: node ? (jsxRuntime.jsx("div", { children: reactDom.createPortal(node, modalRootElementRef.current) })) : undefined,
        open,
    };
};

exports.useConfirmationModal = useConfirmationModal;
