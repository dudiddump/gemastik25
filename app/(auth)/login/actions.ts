"use server";
import { createClient } from "@/utils/supabase/server";
import z from "zod";

const loginSchema = z.object({
  email: z.email({
    message: "Email tidak valid"
  }),
  password: z.string().min(6, {
    message: "Password minimal 6 karakter"
  })
})

export async function login(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const prevData = {
    email: formData.get("email")?.toString(),
    password: formData.get("password")?.toString(),
  }

  const result = loginSchema.safeParse(prevData)

  if(!result.success){
    return {
      errors: {
        email: z.flattenError(result.error).fieldErrors.email?.[0] || "",
        password: z.flattenError(result.error).fieldErrors.password?.[0] || "",
      },
      values: prevData,
    }
  }

  const {data, error} = await supabase.auth.signInWithPassword({
    email: result.data.email,
    password: result.data.password,
  })

  if(error){
    console.log(error);
    return {
      message: "Email atau password salah",
      errors: {
        email: "",
        password: "",
      },
      values: prevData,
    }
  }

  if(data) {
    console.log(data);
    return {
      message: "Login berhasil",
      errors: {
        email: "",
        password: "",
      },
      values: prevData,
    }
  }

}
