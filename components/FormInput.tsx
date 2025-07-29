type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: React.ReactNode;
};

export default function FormInput({ label, icon, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label className="text-sm text-gray-600">{label}</label>
      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#55daa9] transition">
        {icon}
        <input
          className="w-full outline-none text-sm text-gray-800 bg-transparent dark:text-gray-400"
          required
          {...props}
        />
      </div>
    </div>
  );
}
