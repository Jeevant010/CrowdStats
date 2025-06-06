'use client'
const getValidHexColor = (color) => {
    if (!color) {
        return;
    }
    // Check if string starts with # and is followed by either 3 or 6 valid hex characters
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return hexColorRegex.test(color) ? color : undefined;
};

export { getValidHexColor };
