import LoginButton from "./LoginButton";
import Logo from "./Logo";
import MenuList from "./MenuList";
import MobileNav from "./MobileNav";
import OpenCloseButton from "./OpenCloseButton";
import ThemeToggleButton from "./SwitchThemeButton";

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <nav className="py-6 flex items-center justify-between 2xl:px-20 px-5 z-10 dark:bg-black bg-white">
        {/* logo */}
        <Logo />

        {/* menu list */}
        <MenuList />

        {/* switch theme */}
        <ThemeToggleButton />

        {/* login */}
        <LoginButton className="hidden lg:block" />

        {/* open Close Button */}
        <OpenCloseButton />
      </nav>

      <div>
        <MobileNav />
      </div>
    </div>
  );
}
