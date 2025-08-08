import AuthHeader from "@/components/AuthHeader";
import AuthNavigation from "@/components/AuthNavigation";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import ResetPassForm from "@/components/ResetPassForm";

export default async function ResetPasswordPage({ params }: {params: Promise<{code: string}> }) {
  const { code } = await params;

  const supabase = await createClient();
  const { error } = await supabase.auth.exchangeCodeForSession(code);


  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full dark:bg-gray-900">
        <AuthHeader
          title="Reset Password"
          subtitle="Masukkan password baru kamu di bawah ini"
        />

        <ResetPassForm />

        <div className="flex items-center justify-center mt-5">
          <AuthNavigation
            href="/login"
            text="kembali ke login"
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
}
