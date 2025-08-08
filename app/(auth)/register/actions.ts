"use server";
import { createClient } from "@/utils/supabase/server";

import { z } from "zod";

const registerSchema = z
  .object({
    name: z.string().trim().nonempty("Nama wajib diisi"),

    email: z
      .string()
      .trim()
      .nonempty("Email wajib diisi")
      .email("Email tidak valid"),

    password: z
      .string()
      .trim()
      .nonempty("Password wajib diisi")
      .min(6, "Password minimal 6 karakter")
      .regex(
        /^(?=.*[A-Z])(?=.*\d).+$/,
        "Password harus ada huruf besar & angka"
      ),

    confirmPassword: z
      .string()
      .trim()
      .nonempty("Konfirmasi password wajib diisi"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });

export default async function register(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const prevData = {
    name: formData.get("name")?.toString(),
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
    confirmPassword: formData.get("confirmPassword")?.toString(),
  };

  const result = registerSchema.safeParse(prevData);

  if (!result.success) {
    return {
      errors: {
        name: z.flattenError(result.error).fieldErrors.name?.[0] || "",
        email: z.flattenError(result.error).fieldErrors.email?.[0] || "",
        password: z.flattenError(result.error).fieldErrors.password?.[0] || "",
        confirmPassword:
          z.flattenError(result.error).fieldErrors.confirmPassword?.[0] || "",
      },
      values: prevData,
    };
  }

  const { data, error } = await supabase.auth.signUp({
    email: result.data.email,
    password: result.data.password,
  });

  if (error) {
    return {
      message: "User telah terdaftar, silahkan login",
      values: prevData,
      errors: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }

  if (data) {
    const { data: user, error } = await supabase.from("users").upsert({
      auth_id: data.user?.id,
      username: result.data.name,
      email: result.data.email,
    });

    return {
      message: "Registrasi berhasil, silahkan login",
      values: prevData,
      errors: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  }
}
