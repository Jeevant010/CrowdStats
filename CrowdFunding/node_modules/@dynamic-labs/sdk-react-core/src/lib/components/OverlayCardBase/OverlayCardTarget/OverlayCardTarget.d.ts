import { FC, PropsWithChildren } from 'react';
type OverlayCardContext = {
    /** The element to parent OverlayCards */
    portal: HTMLDivElement | null;
    /** Announces that a card is using the OverlayCardTarget */
    openCard: (cardId: string) => void;
    /** Announces that a card is no longer using the OverlayCardTarget */
    closeCard: (cardId: string) => void;
};
export declare const OverlayCardContext: import("react").Context<OverlayCardContext | undefined>;
export declare const OverlayCardTarget: FC<PropsWithChildren>;
/**
 * Returns an element from above in the hierarchy to use as target for an OverlayCard,
 * or undefined if such parent was never set
 */
export declare const useOverlayCardTarget: (isOpen: boolean) => HTMLElement | undefined;
export {};
