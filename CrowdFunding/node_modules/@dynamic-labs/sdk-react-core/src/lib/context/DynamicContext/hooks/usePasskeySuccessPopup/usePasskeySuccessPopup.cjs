'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

const usePasskeySuccessPopup = () => {
    const [passkeySuccessPopup, _setPasskeySuccessPopup] = React.useState(undefined);
    // Show the success message for 2 seconds then hide it
    // The logic is here to not have to duplicate it in multiple views
    const setPasskeySuccessPopup = React.useCallback((key) => {
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

exports.usePasskeySuccessPopup = usePasskeySuccessPopup;
