import { CSSProperties, FC, PropsWithChildren } from 'react';
type OverlayCardProps = {
    /** Whether the overlay is open or not */
    isOpen: boolean;
    /** Function called when the overlay should be closed */
    onClose?: VoidFunction;
    /** Classname for the [OverlayCardBase] */
    className?: string;
    /** Styles for the [OverlayCardBase] */
    style?: CSSProperties;
};
/** Props for the Content sub-component */
type OverlayCardContentProps = {
    /** Classnames to apply to content wrapper <div> */
    className?: string;
    /** Removes the padding styles on the content */
    removePadding?: boolean;
};
/** Props for the Header sub-component */
type OverlayCardHeaderProps = {
    /** Disables the close button */
    closeDisabled?: boolean;
};
/** Defines the OverlayCard with sub-components */
type OverlayCardComponent = FC<PropsWithChildren<OverlayCardProps>> & {
    Header: FC<PropsWithChildren<OverlayCardHeaderProps>>;
    Content: FC<PropsWithChildren<OverlayCardContentProps>>;
};
declare const OverlayCard: OverlayCardComponent;
export { OverlayCard };
