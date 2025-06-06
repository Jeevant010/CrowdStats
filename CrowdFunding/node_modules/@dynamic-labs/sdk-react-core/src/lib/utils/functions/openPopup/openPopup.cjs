'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const getCenteredPopupFeatures = (popupWidth, popupHeight) => {
    const { screenLeft = window.screenX, screenTop = window.screenY } = window;
    const { innerWidth = document.documentElement.clientWidth, innerHeight = document.documentElement.clientHeight, } = window;
    const left = screenLeft + (innerWidth - popupWidth) / 2;
    const top = screenTop + (innerHeight - popupHeight) / 2;
    return `toolbar=0,location=0,menubar=0,resizable=1,scrollbars=1,width=${popupWidth},height=${popupHeight},left=${left},top=${top}`;
};
const openPopup = (url, popupWidth, popupHeight, onClose) => new Promise((resolve, reject) => {
    const popup = window.open('', '_blank', getCenteredPopupFeatures(popupWidth, popupHeight));
    if (!popup) {
        reject(new Error('Popup blocked'));
        return;
    }
    // Set up interval to check if popup is closed
    const checkClosed = setInterval(() => {
        if (popup.closed) {
            clearInterval(checkClosed);
            window.removeEventListener('unload', cleanup);
            onClose();
        }
    }, 500);
    // Set the URL after opening to avoid popup blockers
    popup.location.href = url;
    // Clean up function
    const cleanup = () => {
        clearInterval(checkClosed);
        if (!popup.closed) {
            popup.close();
        }
        window.removeEventListener('unload', cleanup);
    };
    // Handle window unload
    window.addEventListener('unload', cleanup);
    // Return cleanup function
    resolve(cleanup);
});

exports.openPopup = openPopup;
