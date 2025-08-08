import AuthHeader from "@/components/AuthHeader";
import AuthNavigation from "@/components/AuthNavigation";
import ForgetPassword from "@/components/ForgetPassword";

export default function lupaPassword() {
  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-md w-full dark:bg-gray-900">
        <AuthHeader
          title="Lupa Password?"
          subtitle="Masukkan email kamu, kami akan kirim link reset password"
        />

       <ForgetPassword/>

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
