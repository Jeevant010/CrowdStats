'use client'
const appleIdScriptSrc = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
const loadAppleId = () => new Promise((resolve, reject) => {
    const script = document.querySelector('script[data-apple-sdk]');
    if (script) {
        // Script already exists, attach event listeners
        if (script.hasAttribute('data-loaded')) {
            resolve();
        }
        else {
            script.addEventListener('load', () => resolve());
            script.addEventListener('error', () => reject(new Error('Failed to load Apple SDK')));
        }
    }
    else {
        // If the script does not exist, create and add it
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = appleIdScriptSrc;
        script.setAttribute('data-apple-sdk', 'true');
        script.onload = () => {
            script === null || script === void 0 ? void 0 : script.setAttribute('data-loaded', 'true');
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load Apple SDK'));
        window.document.head.appendChild(script);
    }
});

export { loadAppleId };
