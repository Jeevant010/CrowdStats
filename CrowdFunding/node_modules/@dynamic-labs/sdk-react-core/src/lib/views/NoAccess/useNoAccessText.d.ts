export declare const useNoAccessText: () => {
    _socialMediaLinkText: string | undefined;
    _socialMediaUrl: string | undefined;
    buttonTitle: string;
    isAccessListView: boolean;
    isChainalysisView: boolean;
    isGateBlockedView: boolean;
    subtitle: string;
    title: string;
};
export declare const textData: {
    chainalysis: {
        _socialMediaLinkText: string;
        _socialMediaUrl: string;
        buttonTitle: string;
        subtitle: string;
        title: string;
    };
    default: {
        buttonTitle: string;
        subtitle: string;
        title: string;
    };
    gate: {
        _socialMediaLinkText: undefined;
        _socialMediaUrl: undefined;
        buttonTitle: string;
        subtitle: string;
        title: string;
    };
};
