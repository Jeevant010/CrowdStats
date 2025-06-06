export type BorderSetting = 'rounded' | 'square';
export type BrandStyledSetting = 'subtle' | 'bold';
export type ThemeSetting = 'light' | 'dark' | 'auto';
export type ViewSetting = 'extended' | 'simplified';
export interface ThemeData {
    border: BorderSetting;
    brandStyle: BrandStyledSetting;
    customColor: string;
    template: string;
    theme: {
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
        name: ThemeSetting;
    };
    view: ViewSetting;
}
export interface ThemeContextProps {
    changeBorder: (border: BorderSetting) => void;
    changeBrandStyle: (brandStyle: BrandStyledSetting) => void;
    changePrimaryColor: (customColor: string) => void;
    changeTemplate: (template: string) => void;
    changeTheme: (passedTheme: ThemeSetting, footerColor?: string) => void;
    changeView: (view: ViewSetting) => void;
    theme: ThemeData;
}
