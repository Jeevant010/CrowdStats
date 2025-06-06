declare const TEMPLATES: {
    readonly androidUrl: "https://play.google.com/store/apps/details?id={{id}}";
    readonly chromeUrl: "https://chrome.google.com/webstore/detail/{{id}}";
    readonly edgeUrl: "https://microsoftedge.microsoft.com/addons/detail/{{id}}";
    readonly firefoxUrl: "https://addons.mozilla.org/en-US/firefox/addon/{{id}}";
    readonly iconicUrl: `${string}#{{id}}`;
    readonly iosUrl: "https://apps.apple.com/app/apple-store/{{id}}";
    readonly walletConnectUrl: "https://registry.walletconnect.org/v2/logo/sm/{{id}}";
};
export type TemplateName = keyof typeof TEMPLATES;
export declare const renderTemplate: (templateName: TemplateName, data: any) => string | undefined;
export {};
