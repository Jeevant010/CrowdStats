import type { RampConfiguration } from '@dynamic-labs/sdk-api-core';
import type { OnrampOption } from '../../../context/DynamicContext';
/**
 * Converts an OnrampConfiguration to an OnrampOption based on the provider's display mode
 */
export declare const onrampConfigurationToOnrampOption: (provider: RampConfiguration) => OnrampOption;
