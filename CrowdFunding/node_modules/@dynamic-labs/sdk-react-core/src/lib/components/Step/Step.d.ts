import { FC, PropsWithChildren, ReactElement } from 'react';
export type StepProps = {
    icon?: ReactElement;
    state?: 'current' | 'done' | 'upcoming' | 'default';
    className?: string;
};
export declare const Step: FC<PropsWithChildren<StepProps>>;
