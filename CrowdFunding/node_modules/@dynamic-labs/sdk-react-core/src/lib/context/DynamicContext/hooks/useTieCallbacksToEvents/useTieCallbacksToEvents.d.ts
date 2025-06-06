import { UserProfile } from '@dynamic-labs/types';
import { DynamicEventsCallbacks } from '../../../../shared';
export type UseTieCallbacksToEventsParams = {
    clientCallbacks: DynamicEventsCallbacks | undefined;
    user: UserProfile | undefined;
};
/** Ties the customer callbacks to our events, such that our events will also trigger the callbacks */
export declare const useTieCallbacksToEvents: ({ clientCallbacks, user, }: UseTieCallbacksToEventsParams) => void;
