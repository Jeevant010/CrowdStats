/// <reference types="react" />
type Props = {
    checkboxClassName?: string;
    iconUrl?: string;
    network: number | string | undefined;
    networkId: number | string;
    networkName: string;
    newNetworkId: number | string | undefined;
    onClick: (networkId: number | string) => Promise<void>;
    notSupported?: boolean;
};
export declare const NetworkAction: ({ iconUrl, networkId, network, onClick, networkName, checkboxClassName, newNetworkId, notSupported, }: Props) => JSX.Element;
export {};
