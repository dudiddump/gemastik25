import {
  Target,
  TrendingUp,
  BookOpen,
  Trophy,
  MessageCircle,
} from "lucide-react";

export default function MenuList() {
  return (
    <ul className={`lg:flex lg:gap-13 hidden`}>
      {/* active class */}
      <li className="cursor-pointer flex items-center gap-2 p-2 font-semibold text-primary">
        <Target className="inline-flex" size={20} />
        <p>Home</p>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-black hover:bg-gray-100 p-2 font-semibold">
        <TrendingUp className="inline-flex" />
        <p>Simulasi</p>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-black hover:bg-gray-100 p-2 font-semibold">
        <BookOpen className="inline-flex" />
        <p>Investasi</p>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-black hover:bg-gray-100 p-2 font-semibold">
        <Trophy className="inline-flex" />
        <p>Dashboard</p>
      </li>

      <li className="text-gray-600 cursor-pointer flex items-center rounded-md gap-2 hover:text-black hover:bg-gray-100 p-2 font-semibold">
        <MessageCircle className="inline-flex" />
        <p>Forum</p>
      </li>
    </ul>
  );
}
