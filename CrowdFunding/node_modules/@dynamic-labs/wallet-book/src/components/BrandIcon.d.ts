import { FC, ImgHTMLAttributes } from 'react';
import { WalletBrand } from '../schemas';
type BrandIconProps = {
    walletKey: string;
    brand: WalletBrand;
} & ImgHTMLAttributes<HTMLImageElement>;
export declare const BrandIcon: FC<BrandIconProps>;
export {};
