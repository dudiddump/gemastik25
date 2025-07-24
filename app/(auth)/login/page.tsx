"use client";

import FormInput from "@/components/FormInput";
import FormInputPassword from "@/components/FormInputPassword";
import { Mail } from "lucide-react";
import { useActionState } from "react";
import { login } from "./actions";

const initialState = {
  message: "",
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
        <h1 className="text-2xl font-bold text-center text-[#55daa9]">
          Selamat Datang Kembali
        </h1>
        <h2 className="text-lg text-gray-600 text-center mt-2">subtitle</h2>
        <p className="text-gray-600 text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nam voluptates doloremque atque modi magni quidem inventore in magnam
          culpa beatae ea eligendi fugiat laudantium pariatur nobis, maiores,
          minus illo!
        </p>

        <form className="mt-10 space-y-5" action={formAction}>
          <FormInput
            type="email"
            label="Email"
            placeholder="Isi Email"
            autoComplete="off"
            icon={<Mail className="w-4 h-4 text-gray-800" />}
            name="email"
            defaultValue={state.values?.email}
          />
          <FormInputPassword
            name="password"
            label="Password"
            autoComplete="off"
            placeholder="Masukan Password"
          />
          <p aria-live="polite">{state?.message}</p>
          <button
            type="submit"
            className="w-full bg-[#55daa9] text-white py-2 rounded-md"
            disabled={pending}
          >
            {pending ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
