import { Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function FormInputPassword({
  label,
  placeholder,
  autoComplete = "off",
  name,
}: {
  label: string;
  placeholder: string;
  autoComplete?: string;
  name: string;
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-2 mb-2">
      <label className="text-sm text-gray-600">{label}</label>

      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#55daa9] transition">
        <Lock className="w-4 h-4 text-gray-400" />
        <input
          type={showPassword ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="w-full outline-none text-sm text-gray-800 bg-transparent dark:text-gray-400"
          required
          name={name}
        />
        {showPassword ? (
          <Eye
            className="w-4 h-4 text-gray-800 cursor-pointer"
            onClick={handleClick}
          />
        ) : (
          <EyeOff
            className="w-4 h-4 text-gray-800 cursor-pointer"
            onClick={handleClick}
          />
        )}
      </div>
    </div>
  );
}
