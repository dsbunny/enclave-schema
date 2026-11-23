// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { dsbunnyRegistry } from '@dsbunny/zod-registry';
export const EnclaveTokenSchema = z.object({
    '@type': z.literal('EnclaveToken')
        .describe('Type of the enclave token'),
    tenant_id: z.string()
        .describe('The ID of the tenant associated with the token.'),
    ref_id: z.string()
        .describe('A reference ID for the token, used for tracking purposes.'),
    encoded_token: z.string()
        .describe('The token value.'),
    create_timestamp: z.iso.datetime() // ISO 8601
        .describe('The ISO datetime of the token creation'),
    modify_timestamp: z.iso.datetime()
        .describe('The ISO datetime of when the token was last modified'),
    is_deleted: z.boolean().default(false)
        .describe('Whether the token is deleted'),
}).register(dsbunnyRegistry, {
    id: 'EnclaveTokenSchema',
    description: 'The schema for an enclave token',
});
//# sourceMappingURL=token.schema.js.map