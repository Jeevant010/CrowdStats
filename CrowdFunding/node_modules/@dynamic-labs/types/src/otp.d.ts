/** The possible destinations of OTP tokens */
export type OtpDestination = 'email' | 'sms';
/** Data that identifies an international phone number */
export type PhoneData = {
    /** Just the phone numbers with no country dial code */
    phone: string;
    /** ISO2 of the corresponding country */
    iso2: string;
    /** Dial code of the corresponding country */
    dialCode: string;
};
