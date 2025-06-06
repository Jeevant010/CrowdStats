'use client'
import { __awaiter } from '../../../_virtual/_tslib.js';
import { EthereumWalletConnector } from '../EthereumWalletConnector.js';

const createConnector = (customConnectorFn) => (props) => {
    const delegate = customConnectorFn(props);
    return [
        class extends EthereumWalletConnector {
            constructor(props) {
                super(Object.assign(Object.assign({}, props), { metadata: delegate.metadata }));
                this.name = delegate.metadata.name;
                this.overrideKey = `${delegate.metadata.name}evm`;
            }
            connect() {
                return __awaiter(this, void 0, void 0, function* () {
                    yield delegate.connect();
                });
            }
            endSession() {
                const _super = Object.create(null, {
                    endSession: { get: () => super.endSession }
                });
                return __awaiter(this, void 0, void 0, function* () {
                    if (delegate.disconnect) {
                        yield delegate.disconnect();
                    }
                    return _super.endSession.call(this);
                });
            }
            getAddress() {
                return __awaiter(this, void 0, void 0, function* () {
                    return delegate.getAddress();
                });
            }
            getConnectedAccounts() {
                return __awaiter(this, void 0, void 0, function* () {
                    return delegate.getConnectedAccounts();
                });
            }
            getNetwork() {
                return __awaiter(this, void 0, void 0, function* () {
                    return delegate.getNetwork();
                });
            }
            getPublicClient() {
                return __awaiter(this, void 0, void 0, function* () {
                    return delegate.getPublicClient();
                });
            }
            getWalletClient(chainId) {
                return delegate.getWalletClient(chainId);
            }
            isInstalledOnBrowser() {
                return delegate.isInstalledOnBrowser();
            }
            signMessage(messageToSign) {
                return __awaiter(this, void 0, void 0, function* () {
                    return delegate.signMessage(messageToSign);
                });
            }
            filter() {
                if (delegate.filter) {
                    return delegate.filter();
                }
                return super.filter();
            }
            init() {
                const _super = Object.create(null, {
                    init: { get: () => super.init }
                });
                return __awaiter(this, void 0, void 0, function* () {
                    if (delegate.init) {
                        return delegate.init();
                    }
                    return _super.init.call(this);
                });
            }
            supportsNetworkSwitching() {
                if (delegate.supportsNetworkSwitching) {
                    return delegate.supportsNetworkSwitching();
                }
                return super.supportsNetworkSwitching();
            }
            switchNetwork(_a) {
                const _super = Object.create(null, {
                    switchNetwork: { get: () => super.switchNetwork }
                });
                return __awaiter(this, arguments, void 0, function* ({ networkName, networkChainId, }) {
                    if (delegate.switchNetwork) {
                        return delegate.switchNetwork({ networkChainId, networkName });
                    }
                    return _super.switchNetwork.call(this, { networkChainId, networkName });
                });
            }
        },
    ];
};

export { createConnector };
