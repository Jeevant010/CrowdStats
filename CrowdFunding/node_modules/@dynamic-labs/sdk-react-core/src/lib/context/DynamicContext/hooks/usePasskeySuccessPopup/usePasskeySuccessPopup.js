'use client'
import { useState, useCallback } from 'react';

const usePasskeySuccessPopup = () => {
    const [passkeySuccessPopup, _setPasskeySuccessPopup] = useState(undefined);
    // Show the success message for 2 seconds then hide it
    // The logic is here to not have to duplicate it in multiple views
    const setPasskeySuccessPopup = useCallback((key) => {
        _setPasskeySuccessPopup(key);
        setTimeout(() => {
            _setPasskeySuccessPopup(undefined);
        }, 2000);
    }, [_setPasskeySuccessPopup]);
    return {
        passkeySuccessPopup,
        setPasskeySuccessPopup,
    };
};

export { usePasskeySuccessPopup };
