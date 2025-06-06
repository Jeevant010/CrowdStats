import { FC } from 'react';
import { LoginWidgetProps } from '../LoginWidget';
import { ClassStyleProps } from '../../../../utils/types';
type LoginEmailFormProps = LoginWidgetProps & ClassStyleProps & {
    currentEmail?: string;
};
export declare const LoginEmailForm: FC<LoginEmailFormProps>;
export {};
