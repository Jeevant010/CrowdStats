import { EmailProviders, IConnectWithOtpContext } from './types';
type UseConnectWithOtpProps = {
    emailProvider?: EmailProviders;
};
export declare const useConnectWithOtp: ({ emailProvider: defaultProvider, }?: UseConnectWithOtpProps) => IConnectWithOtpContext;
export {};
