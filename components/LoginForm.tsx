"use client";

import FormInput from "@/components/FormInput";
import FormInputPassword from "@/components/FormInputPassword";
import { Mail } from "lucide-react";
import Button from "@/components/Button";
import AlertText from "@/components/AlertText";
import { useActionState } from "react";
import { login } from "@/app/(auth)/login/actions";

const initialState = {
  emailError: "",
  passwordError: "",
  values: {
    email: "",
    password: "",
  },
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <form className="mt-5 space-y-5" action={formAction}>
      <div className="flex flex-col mb-0">
        <FormInput
          label="Email"
          placeholder="Isi Email"
          autoComplete="off"
          icon={<Mail className="w-4 h-4 text-gray-800" />}
          name="email"
          defaultValue={state?.values?.email}
        />
        <AlertText message={state?.emailError} className="text-red-500" />
      </div>

      <div className="flex flex-col mb-0 mt-2">
        <FormInputPassword
          name="password"
          label="Password"
          autoComplete="off"
          placeholder="Masukan Password"
        />
        <AlertText message={state?.passwordError} className="text-red-500" />
      </div>

      <div>
        <p className="text-end text-sm text-primary my-3 font-semibold">Lupa Password?</p>
      </div>

      <Button className="mt-1 text-white w-full bg-primary font-semibold">Login</Button>
    </form>
  );
}
