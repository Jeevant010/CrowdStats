'use client'
import { useCallback } from 'react';
import { findSocialIcon } from '@dynamic-labs/iconic';
import { useIconThemeVariant } from '../useIconThemeVariant/useIconThemeVariant.js';

const useFindSocialIcon = () => {
    const variant = useIconThemeVariant();
    return useCallback((provider) => findSocialIcon(provider, variant), [variant]);
};

export { useFindSocialIcon };
