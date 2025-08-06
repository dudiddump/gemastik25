"use client";

import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import FormInputPassword from "@/components/FormInputPassword";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { useActionState } from "react";
import register from "@/app/(auth)/register/actions";
import { Loading } from "./Loading";
import { success } from "@/lib/swal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { info } from "@/lib/swal";

const initialState = {
  errors: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  values: {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  message: "",
};

export default function RegisterForm() {
  const [state, formAction, pending] = useActionState(register, initialState);
  const router = useRouter()

  useEffect(() => {
  if (state?.message) {
    (async () => {
      if(state?.message === "Registrasi berhasil, silahkan login"){
        await success(state.message);
      } else {
        await info(state.message);
      }
      router.push("/login");
    })();
  }
}, [state?.message, router]);

  return (
    <form className="mt-5 space-y-5" action={formAction}>
      <div className="flex flex-col m-0">
        <FormInput
          label="Nama"
          placeholder="Masukkan nama"
          name="name"
          type="text"
          icon={<User className="dark:text-gray-400" />}
          defaultValue={state?.values.name}
        />
      </div>
      {state?.errors.name && (
        <p className="text-red-500 text-sm mb-0">{state?.errors.name}</p>
      )}

      <div className="flex flex-col mt-2 mb-0">
        <FormInput
          label="Email"
          placeholder="Masukkan email"
          name="email"
          type="email"
          icon={<Mail className="dark:text-gray-400" />}
          defaultValue={state?.values.email}
        />
      </div>
      {state?.errors.email && (
        <p className="text-red-500 text-sm mb-0">{state?.errors.email}</p>
      )}

      <div className="flex flex-col mt-2 mb-0">
        <FormInputPassword
          label="password"
          placeholder="Masukkan password"
          name="password"
          defaultValue={state?.values.password}
        />
      </div>
      {state?.errors.password && (
        <p className="text-red-500 text-sm mb-0">{state?.errors.password}</p>
      )}

      {/* donfirm */}
      <div className="flex flex-col mt-2 mb-0">
        <FormInputPassword
          label="konfirmasi password"
          placeholder="Masukkan konfirmasi password"
          name="confirmPassword"
          defaultValue={state?.values.confirmPassword}
        />
      </div>
      {state?.errors.confirmPassword && (
        <p className="text-red-500 text-sm mb-0">
          {state?.errors.confirmPassword}
        </p>
      )}

      <Button className="w-full bg-primary font-semibold mt-5 text-white dark:text-gray-800">
        {pending ? <Loading size={25} /> : "Register"}
      </Button>
    </form>
  );
}
