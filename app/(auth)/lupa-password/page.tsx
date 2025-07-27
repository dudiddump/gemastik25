import AuthHeader from "@/components/AuthHeader";
import AuthNavigation from "@/components/AuthNavigation";
import Button from "@/components/Button";
import FormInput from "@/components/FormInput";
import { Mail } from "lucide-react";

export default function lupaPassword() {
  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full dark:bg-gray-900">
        <AuthHeader
          title="Lupa Password?"
          subtitle="Masukkan email kamu, kami akan kirim link reset password"
        />

        <form action="" className="mt-5">
          <FormInput
            label="Email"
            placeholder="Masukkan email"
            name="email"
            type="email"
            icon={<Mail className="dark:text-gray-400" />}
          />
          <Button className="bg-primary w-full mt-2 text-white font-semibold dark:text-gray-800">
            Kirim Reset Password
          </Button>
        </form>

        <div className="flex items-center justify-center">
          <AuthNavigation
            href="/login"
            text="kembali ke login"
            className="text-center "
          />
        </div>
      </div>
    </div>
  );
}
