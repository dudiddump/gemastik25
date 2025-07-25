import AuthHeader from "@/components/AuthHeader";
import AuthNavigation from "@/components/AuthNavigation";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import { Lock } from "lucide-react";

export default function ResetPasswordPage() {
  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full">
        <AuthHeader
          title="Reset Password"
          subtitle="Masukkan password baru kamu di bawah ini"
        />

        <form className="mt-5">
          <FormInput
            label="Password Baru"
            placeholder="Masukkan password baru"
            name="password"
            type="password"
            icon={<Lock />}
          />

          <Button className="bg-primary w-full mt-2 text-white font-semibold">
            Reset Password
          </Button>
        </form>

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
