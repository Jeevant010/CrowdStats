import { FC } from 'react';
import type { ClassStyleProps } from '../../utils/types';
type InlineSubmitButtonProps = ClassStyleProps & {
    isFocused: boolean;
    isHovered: boolean;
    highlighted: boolean;
    disabled: boolean;
    emailSubmitButtonInsideInput?: boolean;
};
export declare const InlineSubmitButton: FC<InlineSubmitButtonProps>;
export {};
