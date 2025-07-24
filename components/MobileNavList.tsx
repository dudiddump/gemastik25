"use client";
import LoginButton from "./LoginButton";
import { useToggleStore } from "@/stores/useToggleStores";

export default function MobileNavList() {
  const { isOpen } = useToggleStore();

  return (
    <>
      {/* Overlay Background */}
      <div
        className={`
          fixed inset-0 bg-black bg-opacity-100 z-40 transition-opacity duration-300
          ${isOpen ? "opacity-80 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Sidebar Nav */}
      <div
        className={`
          fixed top-0 right-0 h-full w-4/5 bg-white px-5 py-4 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <ul className="flex flex-col gap-4 mt-4">
          <li className="text-gray-600 cursor-pointer">Home</li>
          <li className="text-gray-600 cursor-pointer">Simulasi</li>
          <li className="text-gray-600 cursor-pointer">Investasi</li>
          <li className="text-gray-600 cursor-pointer">Dashboard</li>
          <li className="text-gray-600 cursor-pointer">Forum</li>
        </ul>

        <LoginButton className="lg:hidden mt-5 text-center" />
      </div>
    </>
  );
}
