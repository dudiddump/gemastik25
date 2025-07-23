export default function MenuList() {
  return (
    <ul className={`lg:flex lg:gap-20 hidden`}>
      <li className="text-gray-600 cursor-pointer">Home</li>
      <li className="text-gray-600 cursor-pointer">Simulasi</li>
      <li className="text-gray-600 cursor-pointer">Investasi</li>
      <li className="text-gray-600 cursor-pointer">Dashboard</li>
      <li className="text-gray-600 cursor-pointer">Forum</li>
    </ul>
  );
}
