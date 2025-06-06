import { FC } from 'react';
import { ClassStyleProps } from '../../utils/types';
type ToggleProps = ClassStyleProps & {
    dataTestId?: string;
    icon?: JSX.Element;
    variant?: 'primary';
    value?: boolean;
    onChange?: (value: boolean) => void;
};
export declare const Toggle: FC<ToggleProps>;
export {};
