'use client'
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var iconic = require('@dynamic-labs/iconic');

const socialNetworkIconMap = {
    discord: iconic.DiscordIcon,
    helpdesk: iconic.HelpdeskIcon,
    slack: iconic.SlackIcon,
    twitter: iconic.TwitterIcon,
};
const getSocialNetworkIcon = (name) => socialNetworkIconMap[name];

exports.getSocialNetworkIcon = getSocialNetworkIcon;
