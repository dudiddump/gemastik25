import { Loader2 } from "lucide-react";

export function Loading({ size = 16 }: { size?: number }) {
  return (
    <div className="flex justify-center items-center">
      <Loader2
        className="animate-spin text-white"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
