"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = (values: z.infer<typeof LoginSchema>) => {
  // Server Side Validations
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid Credentials" };
  }

  return { success: "Email Sent!" };
};
