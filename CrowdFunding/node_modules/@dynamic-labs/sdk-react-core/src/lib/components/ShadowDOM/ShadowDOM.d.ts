import React from 'react';
export type ShadowDOMContextType = {
    shadowRoot?: ShadowRoot;
};
export declare const ShadowDOMContext: React.Context<ShadowDOMContextType>;
export declare const useShadowDOMContext: () => ShadowDOMContextType;
export type ShadowDOMProps = {
    children?: React.ReactElement | React.ReactElement[];
    className?: string;
    dataTestId?: string;
    id?: string;
    mode?: ShadowRootMode;
    zIndex?: number;
};
export declare const ShadowDOMStyle: () => JSX.Element;
export declare const ShadowDOM: React.FC<ShadowDOMProps>;
