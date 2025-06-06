import { FC } from 'react';
import EventEmitter from 'eventemitter3';
import { ClassStyleProps } from '../../../../../utils/types';
import { FormattedInputEvents } from './formattedInputEmitter';
type FormattedInputProps = ClassStyleProps & {
    value: string;
    onChange: (value: string) => void;
    leading?: string;
    trailing?: string;
    onInteraction?: () => void;
    emitter?: EventEmitter<FormattedInputEvents>;
    locked?: boolean;
};
export declare const FormattedInput: FC<FormattedInputProps>;
export {};
