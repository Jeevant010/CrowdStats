export type BrowserName = 'brave' | 'chrome' | 'edge' | 'firefox' | 'safari';
export type ErrorWithCode = Error & {
    code: string;
};
export type PasswordInputMode = 'password' | 'text';
export type ParamsType<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P['length'] extends 0 ? undefined : P : undefined;
