'use client'
import { DiscordIcon, HelpdeskIcon, SlackIcon, TwitterIcon } from '@dynamic-labs/iconic';

const socialNetworkIconMap = {
    discord: DiscordIcon,
    helpdesk: HelpdeskIcon,
    slack: SlackIcon,
    twitter: TwitterIcon,
};
const getSocialNetworkIcon = (name) => socialNetworkIconMap[name];

export { getSocialNetworkIcon };
