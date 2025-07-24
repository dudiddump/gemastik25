"use client";

import FormInput from "@/components/FormInput";
import { Mail } from "lucide-react";

export default function Login() {
  return (
    <div className="px-5 md:px-0">
      <div className="relative z-10 bg-white shadow-lg p-10 rounded-xl max-w-xl w-full">
        <h1 className="text-2xl font-bold text-center text-[#55daa9]">
          Selamat Datang Kembali
        </h1>
        <h2 className="text-lg text-gray-600 text-center mt-2">subtitle</h2>
        <p className="text-gray-600 text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          nam voluptates doloremque atque modi magni quidem inventore in magnam
          culpa beatae ea eligendi fugiat laudantium pariatur nobis, maiores,
          minus illo!
        </p>

        <form className="mt-10 space-y-5">
          <FormInput
            type="email"
            label="Email"
            placeholder="Isi Email"
            autoComplete="off"
            icon={<Mail className="w-4 h-4 text-gray-800" />}
          />
        </form>
      </div>
    </div>
  );
}
