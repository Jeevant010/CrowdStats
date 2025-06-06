import { ReactNode } from 'react';
export type IPConfiguration = {
    country: string;
    countryCode: string;
};
type IpConfigurationContextProps = {
    getIpConfiguration: () => Promise<IPConfiguration | undefined>;
    removeIpConfiguration: () => void;
};
export declare const IpConfigurationContext: import("react").Context<IpConfigurationContextProps | undefined>;
export declare const IpConfigurationContextProvider: ({ children, }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useIpConfigurationContext: () => IpConfigurationContextProps;
export {};
