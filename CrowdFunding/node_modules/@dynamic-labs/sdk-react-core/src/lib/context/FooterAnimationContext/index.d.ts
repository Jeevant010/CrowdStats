import React, { Dispatch, SetStateAction } from 'react';
export interface FooterAnimationContextProps {
    isFooterExpanded: boolean;
    setIsFooterExpanded: Dispatch<SetStateAction<boolean>>;
}
export declare const FooterAnimationContext: React.Context<FooterAnimationContextProps | undefined>;
export declare const FooterAnimationContextProvider: ({ children, }: {
    children: JSX.Element;
}) => JSX.Element;
export declare const useFooterAnimationContext: () => FooterAnimationContextProps;
