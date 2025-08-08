"use client";
import Button from "./Button";
import FormInput from "./FormInput";
import { Mail } from "lucide-react";
import { useActionState, useEffect } from "react";
import forgotPassword from "@/app/(auth)/lupa-password/actions";
import { Loading } from "./Loading";
import { success } from "@/lib/swal";

const initialState = {
  message: "",
  errors: {
    email: "",
  },
  values: {
    email: "",
  },
};

export default function ForgetPassword() {
  const [state, formAction, pending] = useActionState(
    forgotPassword,
    initialState
  );

  useEffect(() => {
    (async () => {
      if (state?.message) {
        await success(state?.message);
      }
    })();
  }, [state]);

  return (
    <form action={formAction} className="mt-5">
      <FormInput
        label="Email"
        placeholder="Masukkan email"
        name="email"
        type="email"
        icon={<Mail className="dark:text-gray-400" />}
        defaultValue={state?.values.email}
      />
      {state?.errors.email && (
        <p className="text-red-500 text-sm mt-2">{state?.errors.email}</p>
      )}

      <Button className="bg-primary w-full mt-2 text-white font-semibold dark:text-gray-800">
        {pending ? <Loading /> : "Kirim Reset Password"}
      </Button>
    </form>
  );
}
