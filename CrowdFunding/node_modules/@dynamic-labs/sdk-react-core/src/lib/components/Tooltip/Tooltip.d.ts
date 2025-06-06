import { ElementType, FC, PropsWithChildren, ReactElement } from 'react';
import { CopyKey } from '../../shared';
export type TooltipProps = {
    /** DEPRECATED: Generate an element to use as a wrapper for children */
    as?: ElementType;
    /** Classnames string */
    className?: string;
    /**
     * Content rendered inside the Tooltip
     *
     * Note that this will eventually be replaced by children
     */
    content: string | ReactElement;
    /**
     * If set, use this element as the ref instead.
     * Note this should be a useState and not a useRef to ensure proper re-renders will be triggered.
     */
    targetRef?: HTMLElement | SVGSVGElement | null;
} & CopyKey;
/**
 * Sets up a Tooltip that appears on hover
 *
 * Note: Prefer to use targetRef instead of nesting children!
 * Children of Tooltip will eventually replace content.
 */
export declare const Tooltip: FC<PropsWithChildren<TooltipProps>>;
