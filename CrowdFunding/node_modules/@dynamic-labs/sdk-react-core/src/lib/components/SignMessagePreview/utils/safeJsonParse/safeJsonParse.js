'use client'
const safeJsonParse = (message) => {
    try {
        // First attempt a direct parse
        return JSON.parse(message);
    }
    catch (e) {
        if (message.includes('raw')) {
            // If that fails, attempt to fix newlines, then parse
            const fixed = message.replace(/\n/g, '\\n');
            return JSON.parse(fixed);
        }
        throw e;
    }
};

export { safeJsonParse };
