import { FC } from 'react';
interface AuthChoiceInfoProps {
    choice: 'passkey';
    variant?: 'noEmailSignup' | 'default';
}
export declare const AuthChoiceInfo: FC<AuthChoiceInfoProps>;
export {};
