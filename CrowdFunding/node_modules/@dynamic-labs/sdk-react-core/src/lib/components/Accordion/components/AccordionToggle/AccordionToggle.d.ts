import { ReactNode } from 'react';
export interface AccordionToggleProps {
    /** The content to display inside the label */
    children: ReactNode;
    /** Whether the accordion is open */
    isOpen: boolean;
    /** Called when the button is clicked */
    onClick: () => void;
    /** Classname for the button component */
    className?: string;
    /** Classname for the label wrapper */
    labelClassName?: string;
}
/**
 * A toggle component that acts as a button and displays a chevron icon to indicate the
 * open/closed state of an accordion.
 */
export declare const AccordionToggle: ({ className, children, isOpen, onClick, labelClassName, }: AccordionToggleProps) => JSX.Element;
