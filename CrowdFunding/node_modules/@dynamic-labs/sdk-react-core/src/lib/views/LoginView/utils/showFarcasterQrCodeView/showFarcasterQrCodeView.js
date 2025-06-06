'use client'
import { SdkViewSectionType, SocialSignInProviderEnum } from '@dynamic-labs/sdk-api-core';
import { isMobile } from '@dynamic-labs/utils';

const showFarcasterQrCodeView = (loginViewSections, enabledSocialProviders) => loginViewSections.length === 1 &&
    loginViewSections[0].type === SdkViewSectionType.Social &&
    enabledSocialProviders.length === 1 &&
    enabledSocialProviders.includes(SocialSignInProviderEnum.Farcaster) &&
    !isMobile();

export { showFarcasterQrCodeView };
