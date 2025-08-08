"use client";

import FormInput from "@/components/FormInput";
import FormInputPassword from "@/components/FormInputPassword";
import { Mail } from "lucide-react";
import Button from "@/components/Button";
import AlertText from "@/components/AlertText";
import { useActionState, useEffect } from "react";
import { login } from "@/app/(auth)/login/actions";
import Link from "next/link";
import { failed } from "@/lib/swal";
import { success } from "@/lib/swal";
import { Loading } from "./Loading";
import { useRouter } from "next/navigation";

const initialState = {
  errors: {
    email: "",
    password: "",
  },
  values: {
    email: "",
    password: "",
  },
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(login, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state?.message) {
      (async () => {
        if (state?.message === "Login berhasil") {
          await success(state.message);
          router.push("/dashboard");
        } else {
          await failed(state.message);
        }
      })();
    }
  }, [state?.message, router]);

  return (
    <form className="mt-5 space-y-5" action={formAction}>
      <div className="flex flex-col mb-0">
        <FormInput
          label="Email"
          placeholder="Isi Email"
          autoComplete="off"
          icon={<Mail className="w-4 h-4 text-gray-800 dark:text-gray-400" />}
          name="email"
          defaultValue={state?.values?.email}
        />
        <AlertText message={state?.errors?.email} className="text-red-500" />
      </div>

      <div className="flex flex-col mb-0 mt-2">
        <FormInputPassword
          name="password"
          label="Password"
          autoComplete="off"
          placeholder="Masukan Password"
        />
        <AlertText message={state?.errors?.password} className="text-red-500" />
      </div>

      <div>
        <p className="text-end text-sm text-primary my-3 font-semibold">
          <Link href="/lupa-password">Lupa Password?</Link>
        </p>
      </div>

      <Button className="mt-1 text-white w-full bg-primary font-semibold dark:text-gray-900">
        {pending ? <Loading /> : "Login"}
      </Button>
    </form>
  );
}
