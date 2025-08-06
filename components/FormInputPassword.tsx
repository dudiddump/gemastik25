import { Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

interface FormInputPasswordProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormInputPassword({ label, ...props }: FormInputPasswordProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2 mb-2">
      <label className="text-sm text-gray-600">{label}</label>

      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#55daa9] transition">
        <Lock className="w-4 h-4 text-gray-400" />
        <input
          type={showPassword ? "text" : "password"}
          className="w-full outline-none text-sm text-gray-800 bg-transparent dark:text-gray-400"
          required
          {...props} // semua props dari luar otomatis masuk
        />
        {showPassword ? (
          <Eye
            className="w-4 h-4 text-gray-800 cursor-pointer dark:text-gray-400"
            onClick={() => setShowPassword(false)}
          />
        ) : (
          <EyeOff
            className="w-4 h-4 text-gray-800 cursor-pointer dark:text-gray-400"
            onClick={() => setShowPassword(true)}
          />
        )}
      </div>
    </div>
  );
}
