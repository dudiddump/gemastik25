import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthNavigation({
  text,
  href,
  className,
}: {
  text: string;
  href: string;
  className?: string;
}) {
  return (
    <p className={`text-sm text-primary my-3 font-semibold ${className}`}>
      <Link href={href} className="flex items-center text-sm justify-center">
        <ArrowLeft className="text-primary me-2" size={18} />
        {text}
      </Link>
    </p>
  );
}
