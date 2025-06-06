'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactDom = require('react-dom');
var useElementById = require('../../utils/hooks/useElementById/useElementById.cjs');
var ShadowDOM = require('../ShadowDOM/ShadowDOM.cjs');
var OpacityTransition = require('../Transition/OpacityTransition/OpacityTransition.cjs');
var ModalComponent = require('./ModalComponent/ModalComponent.cjs');

const Portal = ({ children, isShown, handleClose, withBackdrop, zIndex, transitionEvents, elementId = 'dynamic-modal', }) => {
    const { createRootElement } = useElementById.useElementById();
    const modalRootElementRef = createRootElement(elementId);
    const whiteList = React.useCallback((node) => modalRootElementRef.current.contains(node), [modalRootElementRef]);
    return reactDom.createPortal(jsxRuntime.jsx(ShadowDOM.ShadowDOM, { zIndex: zIndex, dataTestId: 'dynamic-modal-shadow', children: jsxRuntime.jsx(OpacityTransition.OpacityTransition, Object.assign({ isShown: isShown }, transitionEvents, { children: jsxRuntime.jsx(ModalComponent.ModalComponent, { handleClose: handleClose, withBackdrop: withBackdrop, whiteList: whiteList, children: children }) })) }), modalRootElementRef.current);
};

exports.Portal = Portal;
