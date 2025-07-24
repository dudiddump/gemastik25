"use client";

import AuthHeader from "@/components/AuthHeader";
import LoginForm from "@/components/LoginForm";

export default function Login() {
  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full">
        <AuthHeader />
        <hr className="border border-t border-gray-300 mt-5" />
        <LoginForm />

        <p className="text-gray-600 text-sm mt-5 text-center">
          Belum punya akun?{" "}
          <span className="text-primary font-semibold">Daftar sekarang!</span>
        </p>
      </div>
    </div>
  );
}
