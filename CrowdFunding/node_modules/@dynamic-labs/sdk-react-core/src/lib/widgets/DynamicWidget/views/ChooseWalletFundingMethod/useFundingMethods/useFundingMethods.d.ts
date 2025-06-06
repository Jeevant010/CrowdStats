/// <reference types="react" />
export type FundingMethod = {
    key: string;
    label: string;
    icon: JSX.Element;
    showChevron?: boolean;
    onClick: () => void;
    previewIcons?: JSX.Element[];
    description?: string;
};
export declare const useFundingMethods: () => FundingMethod[];
