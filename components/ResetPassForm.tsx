"use client";

import FormInput from "./FormInput";
import Button from "./Button";
import { Lock } from "lucide-react";
import resetPassword from "@/app/(auth)/reset-password/actions";
import { useActionState, useEffect } from "react";
import AlertText from "./AlertText";
import { Loading } from "./Loading";
import { success } from "@/lib/swal";
import { redirect } from "next/navigation";

const initialState = {
  message: "",
  errors: {
    password: "",
  },
  values: {
    password: "",
  },
};

export default function ResetPassForm() {
  const [state, formAction, pending] = useActionState(
    resetPassword,
    initialState
  );

  useEffect(() => {
    if (state?.message) {
      (async () => {
        if (state?.message === "Password berhasil direset") {
          await success(state.message);
          redirect("/login");
        } else {
          return 
        }
      })();
    }
  }, [state?.message]);

  return (
    <form className="mt-5" action={formAction}>
      <FormInput
        label="Password Baru"
        placeholder="Masukkan password baru"
        name="password"
        type="password"
        icon={<Lock className="dark:text-gray-400" />}
        defaultValue={state?.values?.password}
      />
      {state?.errors.password && (
        <AlertText className="text-red-600" message={state?.errors.password} />
      )}

      <Button className="bg-primary w-full mt-2 text-white font-semibold dark:text-gray-900">
        {pending ? <Loading /> : "Reset Password"}
      </Button>
    </form>
  );
}
