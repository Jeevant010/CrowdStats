/// <reference types="react" />
import { ClassStyleProps } from '../../utils/types';
type EmailFormProps = ClassStyleProps & {
    onSubmit?: (emailInput: string) => void;
    isLoading: boolean;
    currentEmail?: string;
    isEmailInvalid?: boolean;
    emailSubmitButtonInsideInput?: boolean;
    buttonCopyKey?: string;
    isDisabled?: boolean;
};
export declare const EmailForm: React.FC<EmailFormProps>;
export {};
