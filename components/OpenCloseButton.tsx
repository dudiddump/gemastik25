"use client";

import { useToggleStore } from "@/stores/useToggleStores";
interface Props {
  style?: React.CSSProperties;
}

export default function OpenCloseButton({style}   : Props) {
  const { isOpen, toggleOpen } = useToggleStore();

  return (
    <div className="lg:hidden block" style={style}>
      <div
        onClick={toggleOpen}
        className="cursor-pointer p-3 rounded-md transition-all ease-in w-10 h-10 flex items-center justify-center"
      >
        {isOpen ? (
          <div className="relative w-5 h-5">
            <span className="absolute w-6 h-0.5 bg-black rotate-45 top-1/2 left-0"></span>
            <span className="absolute w-6 h-0.5 bg-black -rotate-45 top-1/2 left-0"></span>
          </div>
        ) : (
          <div className="space-y-1 bg-primary p-2 rounded-md">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        )}
      </div>
    </div>
  );
}
