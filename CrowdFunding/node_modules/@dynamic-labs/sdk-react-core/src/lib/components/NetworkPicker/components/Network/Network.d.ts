type Props = {
    checkboxClassName?: string;
    className?: string;
    iconUrl?: string;
    isActive: boolean;
    isChanging: boolean;
    networkName: string;
    notSupported?: boolean;
};
export declare const Network: ({ iconUrl, isActive, networkName, className, checkboxClassName, isChanging, notSupported, }: Props) => JSX.Element;
export {};
