import { z } from 'zod';
/**
 * A zod type to ensure an array is not empty
 */
export declare const nonEmptyStringArray: z.ZodEffects<z.ZodOptional<z.ZodArray<z.ZodString, "many">>, string[] | undefined, unknown>;
