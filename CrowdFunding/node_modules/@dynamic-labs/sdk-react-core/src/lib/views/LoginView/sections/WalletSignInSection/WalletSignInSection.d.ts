/// <reference types="react" />
import { LoginWidgetProps } from '../LoginWidget';
interface WalletLoginProps extends LoginWidgetProps {
    numberOfItemsToShow: number;
}
export declare const WalletSignInSection: React.FC<WalletLoginProps>;
export {};
