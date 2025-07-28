import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import ClientThemeHandler from "@/components/ClientThemeHandler";

export default function NotFound() {
  return (
    <section className="h-screen bg-green-50 dark:bg-gray-900 flex items-center justify-center">
      <ClientThemeHandler />
      <ResponsiveContainer>
        <div className="mt-10 flex flex-col items-center text-center">
          <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Waduh... Halaman nggak ditemukan!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
            Tapi tenang aja, kamu bisa balik ke beranda dan lanjut investasi
            sehat ✨
          </p>

          <Link
            href="/"
            className="inline-flex items-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-700 dark:hover:bg-green-600 transition-colors duration-300 shadow-lg dark:text-gray-800 "
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Beranda
          </Link>
        </div>
      </ResponsiveContainer>
    </section>
  );
}
