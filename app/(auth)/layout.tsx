import ClientThemeHandler from "@/components/ClientThemeHandler";
import MotionBackground from "@/components/MotionBackground.";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative h-screen w-screen flex justify-center items-center bg-white overflow-hidden dark:bg-gray-800">
      <ClientThemeHandler />
      <MotionBackground />
      <div>{children}</div>
    </div>
  );
}
