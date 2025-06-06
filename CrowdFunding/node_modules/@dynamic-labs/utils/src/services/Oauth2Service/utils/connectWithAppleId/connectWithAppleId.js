'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';
import { loadAppleId } from '../loadAppleId/loadAppleId.js';

const connectWithAppleId = (_a) => __awaiter(void 0, [_a], void 0, function* ({ clientId, oauthLoginUrl, state, }) {
    yield loadAppleId();
    // Because the AppleID is loaded from a script tag, there is not type for it
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AppleID.auth.init({
        clientId,
        redirectURI: oauthLoginUrl.searchParams.get('redirect_uri'),
        scope: 'name email',
        state,
        usePopup: false,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    AppleID.auth.signIn();
});

export { connectWithAppleId };
