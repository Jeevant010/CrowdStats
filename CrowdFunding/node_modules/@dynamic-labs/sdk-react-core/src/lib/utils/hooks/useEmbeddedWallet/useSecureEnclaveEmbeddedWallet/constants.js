'use client'
const iframeContainerId = 'dyn-secure-enclave-container-id';
const iframeElementId = 'dyn-secure-enclave-element-id';
const revealIframeContainerId = 'dyn-secure-enclave-export-container-id';
const revealIframeElementId = 'dyn-secure-enclave-export-element-id';
var EmbeddedWalletVersion;
(function (EmbeddedWalletVersion) {
    EmbeddedWalletVersion["V1"] = "V1";
    EmbeddedWalletVersion["V2"] = "V2";
})(EmbeddedWalletVersion || (EmbeddedWalletVersion = {}));

export { EmbeddedWalletVersion, iframeContainerId, iframeElementId, revealIframeContainerId, revealIframeElementId };
