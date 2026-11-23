import * as z from "zod";
export declare const EnclaveTokenSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"EnclaveToken">;
    tenant_id: z.ZodString;
    ref_id: z.ZodString;
    encoded_token: z.ZodString;
    create_timestamp: z.ZodISODateTime;
    modify_timestamp: z.ZodISODateTime;
    is_deleted: z.ZodDefault<z.ZodBoolean>;
}, z.core.$strip>;
export type EnclaveToken = z.infer<typeof EnclaveTokenSchema>;
//# sourceMappingURL=token.schema.d.ts.map