'use client'
import { useThemeContext } from '../../../context/ThemeContext/ThemeContext.js';
import { useColorSchemePreference } from '../useColorSchemePreference/useColorSchemePreference.js';

const useIconThemeVariant = () => {
    const { theme: { theme: { name }, }, } = useThemeContext();
    const preference = useColorSchemePreference();
    const variant = name === 'auto' ? preference : name;
    return variant;
};

export { useIconThemeVariant };
