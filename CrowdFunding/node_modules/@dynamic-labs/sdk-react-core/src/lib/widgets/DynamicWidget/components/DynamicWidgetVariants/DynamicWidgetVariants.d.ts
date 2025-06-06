import { FC, PropsWithChildren } from 'react';
import type { UseTransitionEvents } from '../../../../utils/hooks/useTransition';
export type DynamicWidgetVariantsProps = {
    variant?: 'modal' | 'dropdown';
    zIndex?: number;
    isOpen: boolean;
    setIsOpen: (state: boolean) => void;
    transitionEvents?: UseTransitionEvents;
};
export declare const DynamicWidgetVariants: FC<PropsWithChildren<DynamicWidgetVariantsProps>>;
