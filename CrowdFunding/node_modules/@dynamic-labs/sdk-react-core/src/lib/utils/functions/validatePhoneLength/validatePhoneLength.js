'use client'
import { removeDialCode } from 'react-international-phone';

/** Whether phone number is not empty */
const validatePhoneLength = (phone, country) => removeDialCode({ dialCode: country.dialCode, phone }).length > 0;

export { validatePhoneLength };
