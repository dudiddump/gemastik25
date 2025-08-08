import Image from "next/image";
import logo from "@/public/logo_investory.png";
import Link from "next/link";

export default function Logo({
  width = 100,
  height = 100,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <div className="relative">
      <Link href="/">
        <Image src={logo} alt="logo investory" width={width} height={height} />
      </Link>
    </div>
  );
}
