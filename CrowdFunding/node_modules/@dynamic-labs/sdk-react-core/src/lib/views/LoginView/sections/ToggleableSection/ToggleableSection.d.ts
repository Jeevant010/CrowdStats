import { FC } from 'react';
export type Section = {
    component: JSX.Element;
    label: string;
    button: string;
    buttonCopyKey?: string;
    labelCopyKey?: string;
};
export type ToggleableSectionProps = {
    sections: [Section, Section];
};
export declare const ToggleableSection: FC<ToggleableSectionProps>;
