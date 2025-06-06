/**
 * The same implementation was added to the iframe-setup package
 * and they should be kept in sync
 * The type is duplicated here to avoid a dependency on the iframe-setup package
 * @see packages/iframe-setup/src/lib/setupIframe/setupIframe.ts
 */
export type MESSAGE_HANDLER = (...params: any[]) => Promise<any> | void;
export type IFRAME_EVENTS = {
    OPEN_URL: (args: {
        url: string;
        target?: 'self' | 'blank';
        features?: string;
    }) => void;
    UPDATE_PARENT_URL: (args: {
        url: string;
    }) => void;
    APP_FOCUS: () => void;
};
