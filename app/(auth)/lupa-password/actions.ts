"use server";

import { createClient } from "@/utils/supabase/server";
import z from "zod";

const forgotPassSchema = z.object({
  email: z.email({
    message: "Email tidak valid",
  }),
});

export default async function forgotPassword(
  prevState: any,
  formData: FormData
) {
  const supabase = await createClient();

  const prevData = {
    email: formData.get("email")?.toString(),
  };

  const result = forgotPassSchema.safeParse(prevData);

  if (!result.success) {
    const error = z.flattenError(result.error).fieldErrors.email?.[0] || "";


    console.log(error)
    return {
      errors: {
        email: z.flattenError(result.error).fieldErrors.email?.[0] || "",
      },
      values: prevData,
    };
  }

  const { data, error } = await supabase.auth.resetPasswordForEmail(
    result.data.email,
    {
      redirectTo: `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`,
    }
  );

  if (error) {
    console.log(error);
    return {
      message: "Gagal mengirimkan email reset password",
      errors: {
        email: error.message,
      },
      values: prevData,
    };
  }

  if (data) {
    console.log(data);

    return {
      message: "Email reset password berhasil dikirim",
      errors: {
        email: "",
      },
      values: prevData,
    };
  }
}
