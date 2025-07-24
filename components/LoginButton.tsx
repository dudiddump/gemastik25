import { HTMLAttributes } from "react";
import Link from "next/link";

export default function LoginButton({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`bg-primary px-6 py-2 rounded-sm cursor-pointer ${className}`}
      {...props}
    >
      <Link href="/login">
        <p className="font-semibold">Login</p>
      </Link>
    </div>
  );
}
