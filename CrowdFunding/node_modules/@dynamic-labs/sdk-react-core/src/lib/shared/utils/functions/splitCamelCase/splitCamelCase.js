'use client'
// Source: https://stackoverflow.com/questions/18379254/regex-to-split-camel-case
const splitCamelCase = (text) => text.replace(/([a-z])([A-Z])/g, '$1 $2');

export { splitCamelCase };
