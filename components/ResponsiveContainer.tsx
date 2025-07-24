export default function ResponsiveContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`container mx-auto xl:px-20 px-5 ${className}`}>
      {children}
    </div>
  );
}
