"use server";

import { createClient } from "@/utils/supabase/server";
import z from "zod";

const resetPassSchema = z.object({
  password: z
    .string()
    .trim()
    .nonempty("Password wajib diisi")
    .min(6, "Password minimal 6 karakter")
    .regex(/^(?=.*[A-Z])(?=.*\d).+$/, "Password harus ada huruf besar & angka"),
});

export default async function resetPassword(
  prevState: any,
  formData: FormData
) {
  const supabase = await createClient();

  const prevData = {
    password: formData.get("password")?.toString(),
  };

  const result = resetPassSchema.safeParse(prevData);

  if (!result.success) {
    return {
      errors: {
        password: z.flattenError(result.error).fieldErrors.password?.[0] || "",
      },
      values: prevData,
    };
  }

  const { data, error } = await supabase.auth.updateUser({
    password: result.data.password,
  });

  if (error) {
    return {
      message: error.message,
      errors: {
        password: "Password harus berbeda dengan password sebelumnya",
      },
      values: prevData,
    };
  }

  if (data) {
    return {
      message: "Password berhasil direset",
      values: prevData,
      errors: {
        password: "",
      },
    };
  }
}
