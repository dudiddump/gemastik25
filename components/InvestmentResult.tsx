"use client";

import { PieChart } from "lucide-react";
import NoInvestmentChoose from "./NoInvestmentChoose";
import InvestmentChoose from "./InvestmentChoose";
import { useInvestmentStore } from "@/stores/useInvestmentsStore";

export default function InvestmentResult() {
  const { selectedInvestment } = useInvestmentStore();

  return (
    <div className="shadow-xl p-5 rounded-md bg-white">
      <div className="flex items-center gap-2">
        <PieChart className="text-primary" size={30} />
        <h1>Hasil Simulasi</h1>
      </div>

      {selectedInvestment ? <InvestmentChoose /> : <NoInvestmentChoose />}
    </div>
  );
}
