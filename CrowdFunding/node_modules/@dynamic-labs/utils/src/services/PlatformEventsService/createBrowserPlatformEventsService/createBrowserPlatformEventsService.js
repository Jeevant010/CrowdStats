'use client'
import EventEmitter from 'eventemitter3';

const createBrowserPlatformEventsService = (window) => {
    const emitter = new EventEmitter();
    /**
     * This map ensure the when a new value is added to
     * IPlatformEvents it will be required to implement here too
     */
    const mapPlatformEventsToRequestChannel = {
        appFocused: () => {
            window.addEventListener('focus', () => {
                emitter.emit('appFocused');
            });
        },
    };
    // Setup all events
    Object.values(mapPlatformEventsToRequestChannel).forEach((handler) => handler());
    return emitter;
};

export { createBrowserPlatformEventsService };
