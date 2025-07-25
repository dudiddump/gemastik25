"use client";

import AuthHeader from "@/components/AuthHeader";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import FormInputPassword from "@/components/FormInputPassword";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import Link from "next/link";



export default function register() {
  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full">
        <AuthHeader
          title="Mulai Perjalanan Finansial Sehatmu!"
          subtitle="Daftar gratis dan mulai ganti kebiasaan judi jadi investasi"
        />
        <hr className="border border-t border-gray-300 mt-5" />

        <form className="mt-5 space-y-5">
          <div className="flex flex-col m-0">
            <FormInput
              label="Nama"
              placeholder="Masukkan nama"
              name="name"
              type="text"
              icon={<User />}
            />
          </div>

          <div className="flex flex-col mt-2 mb-0">
            <FormInput
              label="Email"
              placeholder="Masukkan email"
              name="email"
              type="email"
              icon={<Mail />}
            />
          </div>

          <div className="flex flex-col mt-2 mb-0">
            <FormInputPassword
              label="password"
              placeholder="Masukkan password"
              name="password"
            />
          </div>

          {/* donfirm */}
          <div className="flex flex-col mt-2 mb-0">
            <FormInputPassword
              label="konfirmasi password"
              placeholder="Masukkan konfirmasi password"
              name="confirmPassword"
            />
          </div>

          <Button className="w-full bg-primary font-semibold mt-5 text-white">
            Register
          </Button>
        </form>

        <p className="text-gray-600 text-sm mt-5 text-center">
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
