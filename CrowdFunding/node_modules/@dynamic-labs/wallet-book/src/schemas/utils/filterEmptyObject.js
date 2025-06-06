'use client'
/**
 * Returns undefined if an object values are all nullish
 * @param val object
 * @returns
 */
const filterEmptyObject = (val) => val && Object.values(val).some((x) => Boolean(x)) ? val : undefined;

export { filterEmptyObject };
