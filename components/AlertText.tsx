export default function AlertText({
  message = "",
  className = "",
}: {
  message?: string;
  className?: string;
}) {
  if (!message) return null;

  return (
    <p aria-live="polite" className={`text-sm ${className}`}>
      {message}
    </p>
  );
}
