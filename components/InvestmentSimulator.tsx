import { Calculator } from "lucide-react";
import FormInputSimulasi from "./FormInputSimulasi";

export default function InvestmentSimulator() {
  return (
    <div className="shadow-xl p-5 rounded-md bg-white dark:bg-gray-900">
      <div className="flex items-center gap-2">
        <Calculator className="text-primary" size={30} />
        <h1 className="font-semibold dark:text-white">Investment Simulator</h1>
      </div>
      <p className="mt-2 text-gray-400">
        Masukkan rencana investasi kamu dan lihat proyeksi hasilnya
      </p>

      {/* form */}
      <FormInputSimulasi />
    </div>
  );
}
