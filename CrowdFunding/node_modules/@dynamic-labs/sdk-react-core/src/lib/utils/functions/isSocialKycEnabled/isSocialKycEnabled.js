'use client'
const isSocialKycEnabled = (projectSettings) => { var _a; return Boolean((_a = projectSettings === null || projectSettings === void 0 ? void 0 : projectSettings.kyc.find(({ name }) => name === 'social')) === null || _a === void 0 ? void 0 : _a.enabled); };

export { isSocialKycEnabled };
