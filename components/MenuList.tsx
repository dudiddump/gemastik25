import {
  Target,
  TrendingUp,
  BookOpen,
  Trophy,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function MenuList() {
  return (
    <ul className={`lg:flex lg:gap-13 hidden`}>
      {/* active class */}
      <li className=" p-2 font-semibold text-primary">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <Target className="inline-flex" size={20} />
          <p>Home</p>
        </Link>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-white hover:bg-gray-800 p-2 font-semibold">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <TrendingUp className="inline-flex" />
          <p>Simulasi</p>
        </Link>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-white hover:bg-gray-800 p-2 font-semibold">
        <Link
          href="/investasi"
          className="cursor-pointer flex items-center gap-2"
        >
          <BookOpen className="inline-flex" />
          <p>Investasi</p>
        </Link>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-white hover:bg-gray-800 p-2 font-semibold">
        <Link href="/dashboard" className="cursor-pointer flex items-center gap-2">
          <Trophy className="inline-flex" />
          <p>Dashboard</p>
        </Link>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-white hover:bg-gray-800 p-2 font-semibold">
        <MessageCircle className="inline-flex" />
        <p>Forum</p>
      </li>
    </ul>
  );
}
