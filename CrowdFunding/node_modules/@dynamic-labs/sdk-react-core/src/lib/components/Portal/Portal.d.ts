import { PropsWithChildren } from 'react';
import { UseTransitionEvents } from '../../utils/hooks/useTransition';
import { ModalComponentProps } from './ModalComponent';
type PortalProps = PropsWithChildren & ModalComponentProps & {
    elementId?: string;
    isShown?: boolean;
    transitionEvents?: UseTransitionEvents;
    zIndex?: number;
};
export declare const Portal: ({ children, isShown, handleClose, withBackdrop, zIndex, transitionEvents, elementId, }: PortalProps) => JSX.Element;
export {};
