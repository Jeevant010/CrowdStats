import { FC, MutableRefObject, PropsWithChildren } from 'react';
import { ClassStyleProps } from '../../../utils/types';
type PopperContext = {
    containerRef: MutableRefObject<HTMLDivElement | null>;
};
export declare const popperContext: import("react").Context<PopperContext | undefined>;
export declare const PopperProvider: FC<PropsWithChildren<ClassStyleProps>>;
export declare const usePopper: () => PopperContext;
export {};
