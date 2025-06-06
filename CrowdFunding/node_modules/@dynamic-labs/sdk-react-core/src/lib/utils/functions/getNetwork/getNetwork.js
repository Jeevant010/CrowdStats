'use client'
import { __awaiter } from '../../../../../_virtual/_tslib.js';

const getNetwork = (walletConnector) => __awaiter(void 0, void 0, void 0, function* () { var _a; return (_a = walletConnector === null || walletConnector === void 0 ? void 0 : walletConnector.getNetwork) === null || _a === void 0 ? void 0 : _a.call(walletConnector); });

export { getNetwork };
