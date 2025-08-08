"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { redirect } from "next/navigation";

export default function ProfileIcon({
  name,
  email,
  xp,
}: {
  name: string;
  email: string;
  xp: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdown.current && !dropdown.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-2 relative" ref={dropdown}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 dark:text-gray-300"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Profile Dropdown Box */}
      {isOpen && (
        <div
          className="absolute top-15 right-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4"
        >
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-700 p-2 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-gray-500 dark:text-gray-300 h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  {name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {email}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Points
                </span>
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {xp} XP
                </span>
              </div>
            </div>

            <Button
              onClick={() => redirect("/logout")}
              className="w-full bg-primary text-white py-2 rounded-md text-sm"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
