import { CSSProperties, FC, PropsWithChildren } from 'react';
type OverlayCardBaseProps = {
    /** Whether the card is open or closed */
    isOpen: boolean;
    /** Called when the overlay is clicked */
    onClickOverlay?: VoidFunction;
    /** Style object to set on card wrapper <div> */
    style?: CSSProperties;
    /** Classnames to apply to card wrapper <div> */
    className?: string;
};
export declare const OverlayCardBase: FC<PropsWithChildren<OverlayCardBaseProps>>;
export {};
