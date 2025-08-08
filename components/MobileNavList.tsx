"use client";

import LoginButton from "./LoginButton";
import { useToggleStore } from "@/stores/useToggleStores";
import {
  Target,
  TrendingUp,
  BookOpen,
  Trophy,
  MessageCircle,
} from "lucide-react";
import UserInfoMobile from "./UserInfoMobile";
import { createClient } from "@/utils/supabase/clilent";
import { useEffect, useState } from "react";

interface User {
  username: string;
  email: string;
  xp: number;
}

export default function MobileNavList() {
  const { isOpen } = useToggleStore();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const supabase = createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("auth_id", user?.id)
        .single();
      setUser(data);
      console.log(data);
      console.log(user);
    };

    fetchUser();
  }, []);

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
          fixed top-0 right-0 h-full w-4/5 bg-white dark:bg-gray-900 px-5 py-4 z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          lg:hidden
        `}
      >
        <ul className="flex flex-col gap-4 mt-4">
          <li className="cursor-pointer font-semibold text-primary">
            <div className="flex items-center gap-2">
              <Target size={20} />
              <p>Home</p>
            </div>
          </li>
          <li className="text-gray-600 cursor-pointer font-semibold">
            <div className="flex items-center gap-2">
              <BookOpen size={20} />
              <p>Simulasi</p>
            </div>
          </li>
          <li className="text-gray-600 cursor-pointer font-semibold">
            <div className="flex items-center gap-2">
              <TrendingUp size={20} />
              <p>Investasi</p>
            </div>
          </li>
          <li className="text-gray-600 cursor-pointer font-semibold">
            <div className="flex items-center gap-2">
              <Trophy size={20} />
              <p>Dashboard</p>
            </div>
          </li>
          <li className="text-gray-600 cursor-pointer font-semibold">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <p>Forum</p>
            </div>
          </li>
        </ul>

        {user ? (
          <UserInfoMobile
            name={user?.username || ""}
            email={user?.email || ""}
            xp={user?.xp || 0}
          />
        ) : (
          <LoginButton className="lg:hidden mt-5 text-center" />
        )}
      </div>
    </>
  );
}
