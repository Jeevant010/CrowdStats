'use client'
import { jsx } from 'react/jsx-runtime';
import { useWidgetContext } from '../../context/DynamicWidgetContext.js';
import { DynamicWidgetDropdown } from './variants/DynamicWidgetDropdown/DynamicWidgetDropdown.js';
import { DynamicWidgetModal } from './variants/DynamicWidgetModal/DynamicWidgetModal.js';

const mapDynamicWidgetVariantToComponent = {
    dropdown: DynamicWidgetDropdown,
    modal: DynamicWidgetModal,
};
const DynamicWidgetVariants = ({ zIndex, variant, children, isOpen, setIsOpen, transitionEvents }) => {
    const DynamicVariantComponent = mapDynamicWidgetVariantToComponent[variant || 'modal'];
    const { goToInitialDynamicWidgetView } = useWidgetContext();
    const handleClose = () => {
        setIsOpen(false);
        // Go to initial view after animation finishes
        setTimeout(() => {
            goToInitialDynamicWidgetView();
        }, 300);
    };
    return (jsx(DynamicVariantComponent, { transitionEvents: transitionEvents, zIndex: zIndex, isShown: isOpen, onClose: handleClose, children: children }));
};

export { DynamicWidgetVariants };
