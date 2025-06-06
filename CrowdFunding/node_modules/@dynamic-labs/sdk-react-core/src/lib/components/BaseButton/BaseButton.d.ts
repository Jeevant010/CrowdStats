import { ButtonHTMLAttributes, FC, MouseEventHandler, PropsWithChildren, Ref } from 'react';
import { ButtonAriaProps } from '../../utils/types/ButtonAriaProps';
import { ClassStyleProps } from '../../utils/types/ClassStyleProps';
export type BaseButtonProps = ClassStyleProps & ButtonAriaProps & PropsWithChildren & {
    dataTestId?: string;
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement> | (() => Promise<void>);
    buttonRef?: Ref<HTMLButtonElement>;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
};
/**
 * Headless Button component for other buttons to extend.
 *
 * This component handles button basics such as:
 * - Accessibility props
 * - Refs
 * - Test IDs
 * - Click events
 * - Disabled state
 */
export declare const BaseButton: FC<BaseButtonProps>;
