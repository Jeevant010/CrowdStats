import { ReactNode } from 'react';
type Props = {
    children: ReactNode;
    disablePadding?: boolean;
    onClose?: (e: {
        stopPropagation: VoidFunction;
    }) => void;
    portalClassName?: string;
    portalContainerClassName?: string;
};
export declare const WidgetPortal: ({ children, onClose, disablePadding, portalClassName, portalContainerClassName, }: Props) => JSX.Element;
export {};
