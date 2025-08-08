import LoginButton from "./LoginButton";
import Logo from "./Logo";
import MenuList from "./MenuList";
import MobileNav from "./MobileNav";
import OpenCloseButton from "./OpenCloseButton";
import ProfileIcon from "./ProfileIcon";
import ThemeToggleButton from "./SwitchThemeButton";
import { createClient } from "@/utils/supabase/server";

export default async function Navbar() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("auth_id", user?.id)
    .single();

  return (
    <div
      className=" dark:bg-gray-900 fixed top-0 right-0 left-0 bg-white"
      style={{ zIndex: "999" }}
    >
      <nav className="py-3 flex items-center justify-between xl:px-20 px-5 z-10 container mx-auto">
        {/* logo */}
        <Logo />
        {/* menu list */}
        <MenuList />

        <div className="flex gap-3  ">
          {/* switch theme */}
          <ThemeToggleButton className="hidden lg:inline" />

          {user ? (
            // profile icon
            <ProfileIcon
              name={data?.username}
              email={data?.email || ""}
              xp={data?.xp || 0}
            />
          ) : (
            // login
            <LoginButton className="hidden lg:block" />
          )}
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
