"use client";

import { useState } from "react";

export default function OpenCloseButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden block">
      {isOpen ? (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block cursor-pointer p-3 rounded-md transition-all ease-in"
        >
          <div className="relative w-6 h-6">
            <span className="absolute w-6 h-0.5 bg-black rotate-45 top-1/2 left-0"></span>
            <span className="absolute w-6 h-0.5 bg-black -rotate-45 top-1/2 left-0"></span>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block cursor-pointer hover:bg-primary p-3 rounded-md transition-all ease-in "
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </div>
      )}
    </div>
  );
}
