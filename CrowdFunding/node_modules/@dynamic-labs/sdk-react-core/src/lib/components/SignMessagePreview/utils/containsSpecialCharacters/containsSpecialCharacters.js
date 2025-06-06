'use client'
const containsSpecialCharacters = (value) => {
    // This regex checks for any characters outside the standard ASCII printable range and common control characters
    const regex = /[^ -~\s]/;
    return regex.test(value);
};

export { containsSpecialCharacters };
