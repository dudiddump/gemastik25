export default function AuthHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <h1 className="text-center">logo</h1>
      <h1 className="text-2xl font-bold text-center text-gray-800">
        {title}
      </h1>
      <h2 className="text-md text-gray-400 text-center mt-2 font-normal">
        {subtitle}
      </h2>
    </div>
  );
}
