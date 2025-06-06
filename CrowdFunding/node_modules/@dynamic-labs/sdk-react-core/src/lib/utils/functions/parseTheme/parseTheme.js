'use client'
import { getThemeConfig } from '../../../context/ThemeContext/themesData.js';
import { isThemeSetting } from '../typeGuard/isThemeSetting.js';

const parseTheme = (theme, projectSettingsDesignModal) => isThemeSetting(theme)
    ? getThemeConfig(projectSettingsDesignModal, theme)
    : theme;

export { parseTheme };
