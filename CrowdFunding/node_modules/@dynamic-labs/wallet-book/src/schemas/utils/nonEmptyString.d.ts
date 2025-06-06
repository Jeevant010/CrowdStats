import { z } from 'zod';
/**
 * A zod type to ensure a string is not empty
 */
export declare const nonEmptyString: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, unknown>;
