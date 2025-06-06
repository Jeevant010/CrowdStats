'use client'
const trimEnd = (text, char = '') => {
    let endIndex = text.length - 1;
    while (endIndex >= 0 && text[endIndex] === char) {
        endIndex--;
    }
    return text.slice(0, endIndex + 1);
};

export { trimEnd };
