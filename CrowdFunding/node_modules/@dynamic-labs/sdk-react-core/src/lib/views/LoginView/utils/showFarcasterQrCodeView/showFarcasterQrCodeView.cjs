'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdkApiCore = require('@dynamic-labs/sdk-api-core');
var utils = require('@dynamic-labs/utils');

const showFarcasterQrCodeView = (loginViewSections, enabledSocialProviders) => loginViewSections.length === 1 &&
    loginViewSections[0].type === sdkApiCore.SdkViewSectionType.Social &&
    enabledSocialProviders.length === 1 &&
    enabledSocialProviders.includes(sdkApiCore.SocialSignInProviderEnum.Farcaster) &&
    !utils.isMobile();

exports.showFarcasterQrCodeView = showFarcasterQrCodeView;
