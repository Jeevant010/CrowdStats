export type MobileExperienceValues = 'in-app-browser' | 'redirect';
type MobileExperienceByWalletWithOptionalDefault = {
    default?: MobileExperienceValues;
} & {
    [key: string]: MobileExperienceValues;
};
export type MobileExperience = MobileExperienceValues | MobileExperienceByWalletWithOptionalDefault;
export {};
