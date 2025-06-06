/// <reference types="react" />
import { ClassStyleProps } from '../../utils/types';
type SkeletonProps = ClassStyleProps & {
    count?: number;
    container?: ClassStyleProps;
    dataTestId?: string;
};
export declare const Skeleton: ({ count, className, style, container, dataTestId, }: SkeletonProps) => JSX.Element;
export {};
