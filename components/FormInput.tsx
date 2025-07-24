export default function FormInput({
  label,
  placeholder,
  type = "text",
  icon,
  autoComplete = "off",
  name,
  defaultValue,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon?: React.ReactNode;
  autoComplete?: string;
  name: string;
  defaultValue?: string;
}) {
  return (
    <div className="flex flex-col gap-2 mb-2">
      <label className="text-sm text-gray-600">{label}</label>

      <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-[#55daa9] transition">
        {icon}
        <input
          name={name}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="w-full outline-none text-sm text-gray-800 bg-transparent"
          required
          defaultValue={defaultValue}
        />
      </div>
    </div>
  );
}
