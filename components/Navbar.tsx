import LoginButton from "./LoginButton";
import Logo from "./Logo";
import MenuList from "./MenuList";
import MobileNav from "./MobileNav";
import OpenCloseButton from "./OpenCloseButton";
import ThemeToggleButton from "./SwitchThemeButton";

export default function Navbar() {
  return (
    <div className=" dark:bg-gray-900 fixed top-0 right-0 left-0 bg-white">
      <nav className="py-3 flex items-center justify-between xl:px-20 px-5 z-10 container mx-auto">
        {/* logo */}
        <Logo />
        {/* menu list */}
        <MenuList />

        <div className="flex gap-3  ">
          {/* switch theme */}
          <ThemeToggleButton className="hidden lg:inline" />

          {/* login */}
          <LoginButton className="hidden lg:block" />
        </div>

        {/* mobile close open button */}
        <div className="flex gap-3 lg:hidden">
          <ThemeToggleButton className="lg:hidden block" />
          <OpenCloseButton style={{ zIndex: 999 }} />
        </div>
      </nav>

      {/* mobile nav */}
      <div className="flex gap-3">
        <MobileNav />
      </div>
    </div>
  );
}
