'use client'
import { object, string, boolean } from 'yup';

// User Fields Schema without captchaToken and policiesConsent properties
const userFieldsSchema = object().shape({
    alias: string(),
    btcWallet: string(),
    ckbWallet: string(),
    country: string(),
    discordNotification: boolean(),
    dogeWallet: string(),
    email: string(),
    emailNotification: boolean(),
    firstName: string(),
    jobTitle: string(),
    kasWallet: string(),
    kdaWallet: string(),
    lastName: string(),
    ltcWallet: string(),
    metadata: object(),
    newsletterNotification: boolean(),
    phoneNumber: string(),
    tShirtSize: string(),
    team: string(),
    username: string(),
});

export { userFieldsSchema };
