import { ReactElement } from 'react';
import { QRCodeErrorCorrectionLevel } from 'qrcode';
import { ClassStyleProps } from '../../utils/types';
type QRCodeProps = ClassStyleProps & {
    Icon: ReactElement;
    accentColor?: string;
    ecl?: QRCodeErrorCorrectionLevel;
    logoMargin?: number;
    logoSize?: number;
    size?: number;
    value: string;
    walletKey?: string;
    showQrCodeImage?: boolean;
};
export declare const QRCode: ({ ecl, Icon, logoMargin, logoSize, size, value, accentColor, walletKey, showQrCodeImage, className, style, }: QRCodeProps) => JSX.Element;
export {};
