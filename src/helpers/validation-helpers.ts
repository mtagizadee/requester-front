import { ZodIssue, ZodIssueCode } from 'zod';

export const isPasswordsError = (error?: ZodIssue) =>
    error?.code === ZodIssueCode.too_small ||
    error?.code === ZodIssueCode.too_big;
