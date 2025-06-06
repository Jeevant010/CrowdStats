'use client'
import { __awaiter } from '../../../../_virtual/_tslib.js';
import { ProviderEnum, SocialOAuthErrorCode } from '@dynamic-labs/types';
import { logger } from '../../../logger/logger.js';
import { connectWithAppleId } from '../utils/connectWithAppleId/connectWithAppleId.js';
import { isSafariBrowser, isIOS } from '../../../isMobile/isMobile.js';
import { PlatformService } from '../../PlatformService/PlatformService.js';
import 'tldts';

let authWindowInterval;
const createWindowOauth2Service = () => ({
    getOauthCode: ({ apiProvider, provider, redirectUrl, setIsProcessing, state, oauthLoginUrl, initWebAuth, strategy, }) => new Promise((resolve, _reject) => {
        /**
         * Use AppleID SDK for Apple provider on mobile
         * It should use the strategy setting, but on ios or safari
         * it should use the appleId always as it is the best experience
         */
        if (provider === ProviderEnum.Apple &&
            (isSafariBrowser() || isIOS() || strategy === 'redirect')) {
            initWebAuth({
                redirectUrl: redirectUrl || window.location.href,
            }).then(() => connectWithAppleId({
                clientId: apiProvider === null || apiProvider === void 0 ? void 0 : apiProvider.clientId,
                oauthLoginUrl,
                state,
            }).catch(_reject));
            return;
        }
        /**
         * Use redirect flow on mobile for all providers except Telegram
         */
        if (strategy === 'redirect' && provider !== ProviderEnum.Telegram) {
            initWebAuth({
                redirectUrl: redirectUrl || window.location.href,
            }).then(() => {
                PlatformService.openURL(oauthLoginUrl.toString());
            });
            return;
        }
        // When we catch this error we assume it follows this type, so we must enforce it
        // here to ensure the assumption is correct
        const typedReject = (params) => _reject(params);
        // Clear any potential pending timeouts and intervals
        clearInterval(authWindowInterval);
        const providersWaitingOauthMessage = {};
        const authWindow = window.open('', '_blank', 'width=500,height=600');
        if (authWindow === null || typeof authWindow === 'undefined') {
            // Pop-ups are blocked
            typedReject({
                code: SocialOAuthErrorCode.OAUTH_WINDOW_BLOCKED,
                message: 'Please allow popups and try again.',
            });
            return;
        }
        const clearListeners = () => {
            window.removeEventListener('message', handleWindowMessage);
            providersWaitingOauthMessage[provider] = false;
        };
        const handleWindowMessage = (event) => __awaiter(void 0, void 0, void 0, function* () {
            const message = event.data;
            const expectedOrigin = getExpectedOrigin(apiProvider);
            if (!expectedOrigin) {
                return;
            }
            if ((message === null || message === void 0 ? void 0 : message.type) === 'origin_check' && authWindow) {
                logger.debug('Origin check message received. Sending response now.', {
                    data: message,
                    expectedOrigin,
                });
                authWindow.postMessage('origin_check_response', expectedOrigin);
                return;
            }
            const isTelegramCompletedMessage = (message === null || message === void 0 ? void 0 : message.type) === 'telegram_completed';
            const isAuthorizationMessage = (message === null || message === void 0 ? void 0 : message.type) === 'authorization_response';
            if (isAuthorizationMessage || isTelegramCompletedMessage) {
                logger.debug('Message received', { data: message });
            }
            const isExpectedOrigin = event.origin === expectedOrigin;
            const isValidMessage = ((isAuthorizationMessage && (message === null || message === void 0 ? void 0 : message.provider) === provider) ||
                isTelegramCompletedMessage) &&
                isExpectedOrigin;
            // don't process invalid messages for provider
            if (!isValidMessage) {
                return;
            }
            setIsProcessing(true);
            if (!providersWaitingOauthMessage[provider]) {
                typedReject({
                    code: SocialOAuthErrorCode.SESSION_TIMEOUT,
                    message: `Connecting ${provider} account session timeout.`,
                });
                return;
            }
            clearListeners();
            if (isTelegramCompletedMessage) {
                handleTelegramCompletionMessage(message, state);
                return;
            }
            handleAuthorizationMessage(message, provider, state);
        });
        const getExpectedOrigin = (apiProvider) => {
            if (!(apiProvider === null || apiProvider === void 0 ? void 0 : apiProvider.redirectUrl)) {
                return;
            }
            try {
                const redirectUri = new URL(apiProvider.redirectUrl);
                return redirectUri.origin;
            }
            catch (e) {
                logger.error('Failed to parse social provider redirect url', {
                    error: e,
                });
                return;
            }
        };
        const handleTelegramCompletionMessage = (message, state) => {
            logger.debug('Telegram completion message received', {
                data: message,
            });
            const { code, state: authState } = message;
            // check that the state we receive from message is the same state we calculated earlier
            // this could be an attack
            if (state !== authState) {
                typedReject({
                    code: SocialOAuthErrorCode.OAUTH_ERROR,
                    message: 'Failed to connect telegram account: Invalid random state',
                });
                return;
            }
            resolve(code);
            setIsProcessing(false);
        };
        const handleAuthorizationMessage = (message, provider, state) => {
            const { code, error, state: authState } = message;
            if (error && error !== 'undefined') {
                typedReject({
                    code: SocialOAuthErrorCode.OAUTH_ERROR,
                    message: `Failed to connect ${provider} social account: ${error}`,
                });
                return;
            }
            // check that the state we receive from message is the same state we calculated earlier
            // this could be an attack
            // this state check is used only by providers with an open window opener reference (eg, not twitter)
            if (state !== authState) {
                typedReject({
                    code: SocialOAuthErrorCode.OAUTH_ERROR,
                    message: `Failed to connect ${provider} social account: Invalid random state`,
                });
                return;
            }
            if (!code) {
                typedReject({
                    code: SocialOAuthErrorCode.NO_AUTH_CODE,
                    message: `Failed to connect ${provider} social account: no authorization code`,
                });
                return;
            }
            resolve(code);
            setIsProcessing(false);
        };
        if (!providersWaitingOauthMessage[provider]) {
            window.addEventListener('message', handleWindowMessage);
            providersWaitingOauthMessage[provider] = true;
        }
        // First we store the state in backend
        initWebAuth().then(() => {
            authWindow === null || authWindow === void 0 ? void 0 : authWindow.location.assign(oauthLoginUrl);
            authWindowInterval = setInterval(() => {
                if (!(authWindow === null || authWindow === void 0 ? void 0 : authWindow.closed))
                    return;
                clearInterval(authWindowInterval);
                setIsProcessing(false);
                // user didn't complete oauth
                if (providersWaitingOauthMessage[provider])
                    typedReject({
                        code: SocialOAuthErrorCode.USER_CANCELLED,
                        message: 'User cancelled connection',
                    });
            }, 2000);
        });
    }),
});

export { createWindowOauth2Service };
