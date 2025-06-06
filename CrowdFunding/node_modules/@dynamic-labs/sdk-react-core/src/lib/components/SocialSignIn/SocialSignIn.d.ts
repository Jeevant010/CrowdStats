/// <reference types="react" />
import { SocialSignInProviderEnum } from '@dynamic-labs/sdk-api-core';
import { SocialSectionProps } from '../../views/LoginView/sections';
interface Props extends SocialSectionProps {
    providers: SocialSignInProviderEnum[];
    onSelectProvider: (provider: SocialSignInProviderEnum) => void;
    isLoading?: boolean;
    selectedProvider?: SocialSignInProviderEnum;
    testId?: string;
}
export declare const SocialSignIn: ({ providers, onSelectProvider, isLoading, selectedProvider, testId, defaultProvider, numOfItemsToDisplay: externalMaxInlineItems, collapsedLayout, }: Props) => JSX.Element | null;
export {};
