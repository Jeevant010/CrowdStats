'use client'
const ceil = (value, precision = 0) => {
    const multiplier = Math.pow(10, precision);
    return Math.ceil(value * multiplier) / multiplier;
};

export { ceil };
