"use client";
import LoginButton from "./LoginButton";
import { useToggleStore } from "@/stores/useToggleStores";
export default function MobileNavList() {
  const { isOpen } = useToggleStore();

  return (
    <div
      className={`${
        isOpen ? " absolute bg-white px-5 left-0 lg:hidden w-full" : "hidden"
      }`}
    >
      <ul className="flex flex-col gap-4 py-1">
        <li className="text-gray-600 cursor-pointer">Home</li>
        <li className="text-gray-600 cursor-pointer">Simulasi</li>
        <li className="text-gray-600 cursor-pointer">Investasi</li>
        <li className="text-gray-600 cursor-pointer">Dashboard</li>
        <li className="text-gray-600 cursor-pointer">Forum</li>
      </ul>

      <LoginButton className="lg:hidden static mt-5 text-center" />
    </div>
  );
}
