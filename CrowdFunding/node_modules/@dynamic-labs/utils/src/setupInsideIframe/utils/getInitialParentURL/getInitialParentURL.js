'use client'
const missingParentURLMessage = `Parent URL is required

You must pass the parent URL to the iframe using the following query parameter:

?initial-parent-url=<encoded-parent-url>

Example:

const iframeUrl = new URL('https://my-iframe.com');

iframeUrl.searchParams.set('initial-parent-url', window.location.href);

<iframe src="\${iframeUrl.toString()}"></iframe>

For more information, see the documentation:
https://npmjs.com/package/@dynamic-labs/iframe-setup
`;
const getInitialParentURL = () => {
    const initialParentURL = new URLSearchParams(window.location.search).get('initial-parent-url');
    if (!initialParentURL) {
        throw new Error(missingParentURLMessage);
    }
    return new URL(decodeURIComponent(initialParentURL));
};

export { getInitialParentURL };
