"use client";

import AuthHeader from "@/components/AuthHeader";
import Link from "next/link";
import RegisterForm from "@/components/RegisterForm";

export default function register() {
  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full dark:bg-gray-900">
        <AuthHeader
          title="Mulai Perjalanan Finansial Sehatmu!"
          subtitle="Daftar gratis dan mulai ganti kebiasaan judi jadi investasi"
        />
        <hr className="border border-t border-gray-300 mt-5" />

        <RegisterForm />

        <p className="text-gray-600 text-sm mt-5 text-center dark:text-gray-400">
          Sudah punya akun?
          <span className="text-primary font-semibold">
            {" "}
            <Link href="/login">Login Disini!</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
