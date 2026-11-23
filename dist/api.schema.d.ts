import * as z from "zod";
export declare const AddTokenBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AddTokenRequest">;
    ref_id: z.ZodString;
    token: z.ZodString;
}, z.core.$strip>;
export type AddTokenBody = z.infer<typeof AddTokenBodySchema>;
/** @deprecated Use AddTokenBodySchema. */
export declare const AddTokenRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AddTokenRequest">;
    ref_id: z.ZodString;
    token: z.ZodString;
}, z.core.$strip>;
/** @deprecated Use AddTokenBody. */
export type AddTokenRequest = AddTokenBody;
export declare const AddTokenResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"AddTokenResponse">;
}, z.core.$strip>;
export type AddTokenResponse = z.infer<typeof AddTokenResponseSchema>;
export declare const RevokeTokenBodySchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RevokeTokenRequest">;
    ref_id: z.ZodString;
    token: z.ZodString;
}, z.core.$strip>;
export type RevokeTokenBody = z.infer<typeof RevokeTokenBodySchema>;
/** @deprecated Use RevokeTokenBodySchema. */
export declare const RevokeTokenRequestSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RevokeTokenRequest">;
    ref_id: z.ZodString;
    token: z.ZodString;
}, z.core.$strip>;
/** @deprecated Use RevokeTokenBody. */
export type RevokeTokenRequest = RevokeTokenBody;
export declare const RevokeTokenResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"RevokeTokenResponse">;
}, z.core.$strip>;
export type RevokeTokenResponse = z.infer<typeof RevokeTokenResponseSchema>;
export declare const EnclaveRequestSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"AddTokenRequest">;
    ref_id: z.ZodString;
    token: z.ZodString;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"RevokeTokenRequest">;
    ref_id: z.ZodString;
    token: z.ZodString;
}, z.core.$strip>]>;
export type EnclaveRequest = z.infer<typeof EnclaveRequestSchema>;
export declare const EnclaveResponseSchema: z.ZodUnion<readonly [z.ZodObject<{
    '@type': z.ZodLiteral<"AddTokenResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"RevokeTokenResponse">;
}, z.core.$strip>, z.ZodObject<{
    '@type': z.ZodLiteral<"ErrorResponse">;
    code: z.ZodString;
    message: z.ZodString;
    detail: z.ZodString;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>]>;
export type EnclaveResponse = z.infer<typeof EnclaveResponseSchema>;
export declare const EnclavePingResponseSchema: z.ZodObject<{
    ping: z.ZodLiteral<"pong">;
    timestamp: z.ZodISODateTime;
}, z.core.$strip>;
export type EnclavePingResponse = z.infer<typeof EnclavePingResponseSchema>;
//# sourceMappingURL=api.schema.d.ts.map