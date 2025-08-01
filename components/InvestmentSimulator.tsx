import { Calculator } from "lucide-react";
import FormInputSimulasi from "./FormInputSimulasi";

export default function InvestmentSimulator() {
  return (
    <div className="shadow-xl p-5 rounded-md bg-white ">
      <div className="flex items-center gap-2">
        <Calculator className="text-primary" size={30} />
        <h1 className="font-semibold">Investment Simulator</h1>
      </div>
      <p className="mt-2 text-gray-800">
        Masukkan rencana investasi kamu dan lihat proyeksi hasilnya
      </p>

      {/* form */}
      <FormInputSimulasi />
    </div>
  );
}
