'use client'
import { getIconicSpriteUrl } from '@dynamic-labs/iconic';

const TEMPLATES = {
    androidUrl: 'https://play.google.com/store/apps/details?id={{id}}',
    chromeUrl: 'https://chrome.google.com/webstore/detail/{{id}}',
    edgeUrl: 'https://microsoftedge.microsoft.com/addons/detail/{{id}}',
    firefoxUrl: 'https://addons.mozilla.org/en-US/firefox/addon/{{id}}',
    iconicUrl: `${getIconicSpriteUrl()}#{{id}}`,
    iosUrl: 'https://apps.apple.com/app/apple-store/{{id}}',
    walletConnectUrl: 'https://registry.walletconnect.org/v2/logo/sm/{{id}}',
};
const renderTemplate = (templateName, data) => {
    if (!data)
        return undefined;
    return TEMPLATES[templateName].replace('{{id}}', data);
};

export { renderTemplate };
