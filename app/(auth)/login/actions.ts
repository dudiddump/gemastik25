"use server";

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return {
      message: "Email dan password wajib diisi.",
      values: { email, password },
    };
  }

  if (!email.includes("@")) {
    return {
      message: "Format email tidak valid.",
      values: { email, password },
    };
  }

  if (password.length < 6) {
    return {
      message: "Password minimal 6 karakter.",
      values: { email, password },
    };
  }

  // Login success
  return { message: "Login berhasil!" };
}
