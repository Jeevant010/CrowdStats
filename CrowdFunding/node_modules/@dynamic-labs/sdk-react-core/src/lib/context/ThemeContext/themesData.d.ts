import { ProjectSettingsDesignModal } from '@dynamic-labs/sdk-api-core';
import { ThemeData, ThemeSetting } from './types';
export declare const getDefaultColor: (name?: string) => string;
export declare const themesData: {
    border: string;
    brandStyle: string;
    customColor: string;
    template: string;
    themes: {
        auto: {
            colors: {
                accent_1: string;
                accent_2: string;
                accent_3: string;
                background: string;
                border: string;
                error_1: string;
                error_2: string;
                footer: string;
                primary: string;
                secondary: string;
                ternary: string;
                textPrimary: string;
                textSecondary: string;
            };
            name: string;
        };
        dark: {
            colors: {
                accent_1: string;
                accent_2: string;
                accent_3: string;
                background: string;
                border: string;
                error_1: string;
                error_2: string;
                footer: string;
                primary: string;
                secondary: string;
                ternary: string;
                textPrimary: string;
                textSecondary: string;
            };
            name: string;
        };
        light: {
            colors: {
                accent_1: string;
                accent_2: string;
                accent_3: string;
                background: string;
                border: string;
                error_1: string;
                error_2: string;
                footer: string;
                primary: string;
                secondary: string;
                ternary: string;
                textPrimary: string;
                textSecondary: string;
            };
            name: string;
        };
    };
    view: string;
    walletColor: {
        color: string;
        gradient: string;
    };
};
export declare const getThemeConfig: (modalSettings: ProjectSettingsDesignModal | undefined, themeMode?: ThemeSetting) => ThemeData;
