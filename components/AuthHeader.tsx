import Logo from "./Logo";

export default function AuthHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <Logo/>
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        {title}
      </h1>
      <h2 className="text-md text-gray-400 text-center mt-2 font-normal">
        {subtitle}
      </h2>
    </div>
  );
}
