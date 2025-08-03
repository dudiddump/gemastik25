"use client";

import { PieChart } from "lucide-react";
import NoInvestmentChoose from "./NoInvestmentChoose";
import InvestmentChoose from "./InvestmentChoose";
import { useInvestmentStore } from "@/stores/useInvestmentsStore";

export default function InvestmentResult() {
  const { selectedInvestment } = useInvestmentStore();

  return (
    <div className="shadow-xl p-5 rounded-md bg-white dark:bg-gray-900 min-h-[500px]">
      <div className="flex items-center gap-2">
        <PieChart className="text-primary" size={30} />
        <h1 className="dark:text-white">Hasil Simulasi</h1>
      </div>

      {selectedInvestment ? <InvestmentChoose /> : <NoInvestmentChoose />}
    </div>
  );
}
