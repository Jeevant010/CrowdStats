'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var DynamicWidgetContext = require('../../context/DynamicWidgetContext.cjs');
var DynamicWidgetDropdown = require('./variants/DynamicWidgetDropdown/DynamicWidgetDropdown.cjs');
var DynamicWidgetModal = require('./variants/DynamicWidgetModal/DynamicWidgetModal.cjs');

const mapDynamicWidgetVariantToComponent = {
    dropdown: DynamicWidgetDropdown.DynamicWidgetDropdown,
    modal: DynamicWidgetModal.DynamicWidgetModal,
};
const DynamicWidgetVariants = ({ zIndex, variant, children, isOpen, setIsOpen, transitionEvents }) => {
    const DynamicVariantComponent = mapDynamicWidgetVariantToComponent[variant || 'modal'];
    const { goToInitialDynamicWidgetView } = DynamicWidgetContext.useWidgetContext();
    const handleClose = () => {
        setIsOpen(false);
        // Go to initial view after animation finishes
        setTimeout(() => {
            goToInitialDynamicWidgetView();
        }, 300);
    };
    return (jsxRuntime.jsx(DynamicVariantComponent, { transitionEvents: transitionEvents, zIndex: zIndex, isShown: isOpen, onClose: handleClose, children: children }));
};

exports.DynamicWidgetVariants = DynamicWidgetVariants;
