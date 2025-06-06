import { translation } from './en/translation';
export type Translation = typeof translation;
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type TranslationOverrides = DeepPartial<Translation>;
export type Lang = 'ar' | 'da' | 'de' | 'en' | 'es' | 'fi' | 'fr' | 'he' | 'it' | 'ja' | 'nl' | 'pl' | 'pt' | 'ru' | 'uk' | 'zh';
export type LocaleResource = {
    [key in Lang]?: TranslationOverrides;
};
export type InternalLocaleResources = {
    [key in Lang]?: {
        translation: Translation;
    };
};
export {};
