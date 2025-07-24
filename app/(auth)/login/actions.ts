"use server";

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return {
      emailError: "Email tidak boleh kosong",
      passwordError: "Password tidak boleh kosong",
      values: { email, password },
    };
  }

  if (!email.includes("@")) {
    return {
      values: { email, password },
    };
  }

  if (password.length < 6) {
    return {
      passwordError: "Password minimal 6 karakter",
      values: { email, password },
    };
  }

  // Login success
  return { message: "Login berhasil!" };
}
