import i18n from 'i18next';
import { LocaleResource } from './type';
type I18n = ReturnType<typeof i18n.createInstance>;
export declare class Locale {
    private static __resources__;
    private static __i18nInstance__;
    private static __initialized__;
    private static getResources;
    private static setResources;
    static setup(resources?: LocaleResource): import("i18next").i18n;
    static getInstance(): I18n;
}
export default Locale;
