// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
// #region Add Tokens
export const AddTokenBodySchema = z.object({
    '@type': z.literal('AddTokenRequest')
        .describe('Type of the add token request'),
    ref_id: z.string()
        .describe('A reference ID for the token, used for tracking purposes.'),
    token: z.string()
        .describe('The token to be added.'),
}).register(dsbunnyRegistry, {
    id: 'AddTokenRequestSchema',
    description: 'The schema for adding a token',
});
/** @deprecated Use AddTokenBodySchema. */
export const AddTokenRequestSchema = AddTokenBodySchema;
export const AddTokenResponseSchema = z.object({
    '@type': z.literal('AddTokenResponse')
        .describe('Type of the add token response'),
}).register(dsbunnyRegistry, {
    id: 'AddTokenResponseSchema',
    description: 'The schema for the response after adding a token',
});
// #endregion
// #region Revoke Tokens
export const RevokeTokenBodySchema = z.object({
    '@type': z.literal('RevokeTokenRequest')
        .describe('Type of the revoke token request'),
    ref_id: z.string()
        .describe('A reference ID for the token, used for tracking purposes.'),
    token: z.string()
        .describe('The token to be revoked.'),
}).register(dsbunnyRegistry, {
    id: 'RevokeTokenRequestSchema',
    description: 'The schema for revoking a token',
});
/** @deprecated Use RevokeTokenBodySchema. */
export const RevokeTokenRequestSchema = RevokeTokenBodySchema;
export const RevokeTokenResponseSchema = z.object({
    '@type': z.literal('RevokeTokenResponse')
        .describe('Type of the revoke token response'),
}).register(dsbunnyRegistry, {
    id: 'RevokeTokenResponseSchema',
    description: 'The schema for the response after revoking a token',
});
// #endregion
// #region API
export const EnclaveRequestSchema = z.union([
    AddTokenBodySchema,
    RevokeTokenBodySchema,
]).register(dsbunnyRegistry, {
    id: 'EnclaveRequestSchema',
    description: 'Enclave request schema',
});
export const EnclaveResponseSchema = z.union([
    AddTokenResponseSchema,
    RevokeTokenResponseSchema,
    ErrorResponseSchema,
]).register(dsbunnyRegistry, {
    id: 'EnclaveResponseSchema',
    description: 'Enclave response schema',
});
export const EnclavePingResponseSchema = z.object({ ping: z.literal('pong'), timestamp: z.iso.datetime() }).register(dsbunnyRegistry, {
    id: 'EnclavePingResponseSchema',
    description: 'Enclave ping response schema',
});
//# sourceMappingURL=api.schema.js.map