import { z } from "zod";

const MIN_PASSWORD_LENGTH = 4;
const MAX_PASSWORD_LENGTH = 16;

export const emailSchema = z.string({ required_error: "Email is required" }).email();
export const passwordSchema = z
  .string({ required_error: "Password is required" })
  .min(MIN_PASSWORD_LENGTH, { message: `Passowrd must contain at least ${MIN_PASSWORD_LENGTH} characters` })
  .max(MAX_PASSWORD_LENGTH, { message: `Passowrd must contain at most ${MAX_PASSWORD_LENGTH} characters` });
