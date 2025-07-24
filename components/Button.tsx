import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`cursor-pointer py-2 rounded-md ${className || ""}`}
    />
  );
}
