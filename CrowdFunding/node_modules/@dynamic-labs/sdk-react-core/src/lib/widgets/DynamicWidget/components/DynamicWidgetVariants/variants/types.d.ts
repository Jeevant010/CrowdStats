import type { UseTransitionEvents } from '../../../../../utils/hooks/useTransition/useTransition';
export type VariantProps = {
    className?: string;
    contentClassName?: string;
    isShown?: boolean;
    onClose?: () => void;
    zIndex?: number;
    transitionEvents?: UseTransitionEvents;
};
