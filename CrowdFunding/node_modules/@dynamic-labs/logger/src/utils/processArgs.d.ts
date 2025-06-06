import { MessageQueueMessage } from '../types';
/**
 * Split args into object and non-object args
 * @param message
 * @returns
 */
export declare const processArgs: (message: MessageQueueMessage) => {
    objectArgs: any[];
    remainingArgs: any[];
};
