import LoginButton from "./LoginButton";
import Logo from "./Logo";
import MenuList from "./MenuList";
import OpenCloseButton from "./OpenCloseButton";

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <nav className="py-6 flex items-center justify-between 2xl:px-20 px-5">
        {/* logo */}
        <Logo />

        {/* menu list */}
        <MenuList />

        {/* login */}
        <LoginButton />

        {/* open Close Button */}
        <OpenCloseButton />
      </nav>
    </div>
  );
}
