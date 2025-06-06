import { FC, PropsWithChildren } from 'react';
import { ModalProps } from '../../../../components/Modal';
type PromptModalProps = ModalProps & {
    onClose?: (e: {
        stopPropagation: VoidFunction;
    }) => void;
};
export declare const PromptModal: FC<PropsWithChildren<PromptModalProps>>;
export {};
