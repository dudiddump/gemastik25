"use client";

import FormInput from "@/components/FormInput";
import FormInputPassword from "@/components/FormInputPassword";
import { Mail } from "lucide-react";
import { useActionState } from "react";
import { login } from "./actions";
import Button from "@/components/Button";
import AlertText from "@/components/AlertText";

const initialState = {
  emailError: "",
  passwordError: "",
  values: {
    email: "",
    password: "",
  },
};

export default function Login() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full">
        <h1 className="text-center">logo</h1>
        <h1 className="text-2xl font-bold text-center text-[#55daa9]">
          Selamat Datang Kembali
        </h1>
        <h2 className="text-lg text-gray-600 text-center mt-2">
          Login untuk melanjutkan perjalanan finansial sehatmu
        </h2>
        <hr className="border border-t border-gray-300 mt-5" />

        <form className="mt-5 space-y-5" action={formAction}>
          <FormInput
            label="Email"
            placeholder="Isi Email"
            autoComplete="off"
            icon={<Mail className="w-4 h-4 text-gray-800" />}
            name="email"
            defaultValue={state?.values?.email}
          />
          <AlertText message={state?.emailError} className="text-red-500" />

          <FormInputPassword
            name="password"
            label="Password"
            autoComplete="off"
            placeholder="Masukan Password"
          />
          <AlertText message={state?.passwordError} className="text-red-500" />

          <p className="text-end text-sm text-primary">Lupa Password?</p>

          <Button className="mt-1 text-white w-full bg-primary">Login</Button>
        </form>

        <p className="text-gray-600 text-sm mt-5 text-center">
          Belum punya akun?{" "}
          <span className="text-primary ">Daftar sekarang!</span>
        </p>
      </div>
    </div>
  );
}
