import { Target } from "lucide-react";

export default function NoInvestmentChoose() {
  return (
    <div className="flex h-full items-center justify-center flex-col">
      <Target className="text-primary" size={50} />
      <p className="font-semibold text-gray-600 mt-3">Pilih produk investasi di atas untuk melihat simulasi</p>
    </div>
  );
}
