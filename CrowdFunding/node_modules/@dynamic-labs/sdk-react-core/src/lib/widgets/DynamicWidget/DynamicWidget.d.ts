import { FC, ReactNode } from 'react';
type Props = {
    buttonClassName?: string;
    buttonContainerClassName?: string;
    innerButtonComponent?: ReactNode;
    variant?: 'modal' | 'dropdown';
};
export declare const DynamicWidget: FC<Props>;
export {};
