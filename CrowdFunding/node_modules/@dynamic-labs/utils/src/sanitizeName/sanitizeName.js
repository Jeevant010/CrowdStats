'use client'
const sanitizeName = (name) => name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

export { sanitizeName };
