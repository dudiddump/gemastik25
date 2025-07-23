import { HTMLAttributes } from "react";

export default function LoginButton({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-primary px-6 py-2 rounded-sm cursor-pointer ${className}`}
      {...props}
    >
      <p className="font-semibold">Login</p>
    </div>
  );
}
