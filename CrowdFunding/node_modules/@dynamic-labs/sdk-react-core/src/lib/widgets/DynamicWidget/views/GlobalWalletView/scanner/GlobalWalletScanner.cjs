'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

const GlobalWalletScanner = ({ onScan, jsQR, }) => {
    const videoRef = React.useRef(null);
    const canvasRef = React.useRef(null);
    React.useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        const constraints = {
            video: { facingMode: 'environment' },
        };
        navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
            video.srcObject = stream;
            video.setAttribute('playsinline', 'true'); // required to tell iOS safari we don't want fullscreen
            video.play();
            requestAnimationFrame(tick);
        });
        const tick = () => {
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                canvas.height = video.videoHeight;
                canvas.width = video.videoWidth;
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height, {
                    inversionAttempts: 'dontInvert',
                });
                if (code) {
                    onScan(code.data);
                }
            }
            requestAnimationFrame(tick);
        };
        return () => {
            const stream = video.srcObject;
            const tracks = stream === null || stream === void 0 ? void 0 : stream.getTracks();
            tracks === null || tracks === void 0 ? void 0 : tracks.forEach((track) => track.stop());
        };
    }, [onScan]);
    return (jsxRuntime.jsx("div", { children: jsxRuntime.jsxs("div", { className: 'videoWrapper', children: [jsxRuntime.jsx("video", { ref: videoRef, className: 'qrVideo' }), jsxRuntime.jsx("canvas", { ref: canvasRef, style: { display: 'none' } })] }) }));
};

exports.GlobalWalletScanner = GlobalWalletScanner;
exports["default"] = GlobalWalletScanner;
