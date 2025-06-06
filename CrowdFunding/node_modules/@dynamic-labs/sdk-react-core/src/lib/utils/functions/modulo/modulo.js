'use client'
/** Performs the true mathematical operation of "number mod target" */
const modulo = (number, target) => ((number % target) + target) % target;

export { modulo };
