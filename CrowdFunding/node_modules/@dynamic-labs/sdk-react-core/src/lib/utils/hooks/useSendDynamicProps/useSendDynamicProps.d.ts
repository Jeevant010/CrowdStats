import { DynamicContextProps } from '../../../context/DynamicContext';
import { DynamicEventsCallbacks } from '../../../shared';
type UseSendDynamicHookProps = {
    settings: DynamicContextProps['settings'];
    environmentId: string;
};
export declare const useSendDynamicProps: ({ settings, environmentId, }: UseSendDynamicHookProps) => void;
export declare const serializeEventsCallbacks: (events: DynamicEventsCallbacks | undefined) => string[] | undefined;
export {};
