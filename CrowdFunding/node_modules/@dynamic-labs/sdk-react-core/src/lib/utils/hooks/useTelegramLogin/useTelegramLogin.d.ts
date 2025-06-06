interface TelegramConfig {
    forceCreateUser?: boolean;
    authToken?: string;
}
export declare const useTelegramLogin: () => {
    isAuthWithTelegram: (authToken?: string) => Promise<boolean>;
    telegramSignIn: ({ forceCreateUser, authToken, }?: TelegramConfig) => Promise<void>;
};
export {};
