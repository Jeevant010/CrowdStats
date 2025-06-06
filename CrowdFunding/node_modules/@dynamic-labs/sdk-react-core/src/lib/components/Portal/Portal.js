'use client'
import { jsx } from 'react/jsx-runtime';
import { useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useElementById } from '../../utils/hooks/useElementById/useElementById.js';
import { ShadowDOM } from '../ShadowDOM/ShadowDOM.js';
import { OpacityTransition } from '../Transition/OpacityTransition/OpacityTransition.js';
import { ModalComponent } from './ModalComponent/ModalComponent.js';

const Portal = ({ children, isShown, handleClose, withBackdrop, zIndex, transitionEvents, elementId = 'dynamic-modal', }) => {
    const { createRootElement } = useElementById();
    const modalRootElementRef = createRootElement(elementId);
    const whiteList = useCallback((node) => modalRootElementRef.current.contains(node), [modalRootElementRef]);
    return createPortal(jsx(ShadowDOM, { zIndex: zIndex, dataTestId: 'dynamic-modal-shadow', children: jsx(OpacityTransition, Object.assign({ isShown: isShown }, transitionEvents, { children: jsx(ModalComponent, { handleClose: handleClose, withBackdrop: withBackdrop, whiteList: whiteList, children: children }) })) }), modalRootElementRef.current);
};

export { Portal };
