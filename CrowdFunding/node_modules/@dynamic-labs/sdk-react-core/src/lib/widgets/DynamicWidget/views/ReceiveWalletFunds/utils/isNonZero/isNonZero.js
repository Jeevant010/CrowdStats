'use client'
const isNonZero = (value) => Boolean(value && parseFloat(value.toString()) > 0);

export { isNonZero };
