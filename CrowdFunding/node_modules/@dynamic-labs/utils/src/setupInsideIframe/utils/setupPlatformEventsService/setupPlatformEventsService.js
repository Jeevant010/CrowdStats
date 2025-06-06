'use client'
import EventEmitter from 'eventemitter3';
import { createMessageHandler } from '../createMessageHandler/createMessageHandler.js';
import { PlatformEventsService } from '../../../services/PlatformEventsService/PlatformEventsService.js';

const setupPlatformEventsService = (initialParentURL) => {
    const emitter = new EventEmitter();
    const messageHandler = createMessageHandler(initialParentURL.origin);
    PlatformEventsService.implementation = emitter;
    messageHandler('APP_FOCUS', () => {
        emitter.emit('appFocused');
    });
};

export { setupPlatformEventsService };
