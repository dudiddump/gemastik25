"use client"

import { CheckCircle, AlertTriangle } from "lucide-react";
import Button from "./Button";
import { useInvestmentStore } from "@/stores/useInvestmentsStore";

type RiskLevel = "Low" | "Medium" | "High";

interface InvestmentOption {
  name: string;
  description: string;
  riskLevel: RiskLevel;
  expectedReturn: number;
  minInvestment: string;
  keuntungan: string[];
  perhatian: string[];
}

export default function SimmulationAssetCard({
  data,
}: {
  data: InvestmentOption[];
}) {
  const { setSelectedInvestments } = useInvestmentStore();

  const riskColor: Record<RiskLevel, string> = {
    Low: "bg-green-100 text-green-600",
    Medium: "bg-orange-100 text-orange-600",
    High: "bg-red-100 text-red-600",
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 mt-5">
      {data.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
        >
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h2>
              <p className="text-sm text-gray-500"> {item.description}</p>
            </div>
            <span
              className={`px-3 py-1 text-xs font-medium rounded-full ${
                riskColor[item.riskLevel]
              }`}
            >
              {item.riskLevel}
            </span>
          </div>

          {/* Info Boxes */}
          <div className="grid grid-cols-2 gap-2 my-4">
            <div className="bg-green-50 p-3 rounded-md text-center">
              <p className="text-sm text-gray-500">Expected Return</p>
              <p className="font-bold text-green-600 text-md">
                {new Intl.NumberFormat("id-ID", {
                  maximumFractionDigits: 1,
                }).format(item.expectedReturn * 100)}
                % / year
              </p>
            </div>
            <div className="bg-green-50 p-3 rounded-md text-center">
              <p className="text-sm text-gray-500">Min. Investment</p>
              <p className="font-bold text-green-600 text-md">
                {item.minInvestment}
              </p>
            </div>
          </div>

          {/* Keuntungan */}
          <div className="mb-2">
            <h4 className="text-green-600 font-semibold flex items-center gap-1 text-sm">
              <CheckCircle size={16} /> Keuntungan:
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {item.keuntungan.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Perhatian */}
          <div className="mb-4">
            <h4 className="text-orange-500 font-semibold flex items-center gap-1 text-sm">
              <AlertTriangle size={16} /> Perhatikan:
            </h4>
            <ul className="list-disc list-inside text-sm text-gray-700">
              {item.perhatian.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Button */}
          <Button
            className="w-full text-sm font-medium text-gray-600 border border-gray-300 rounded-md py-2 hover:bg-gray-50 transition"
            onClick={() => setSelectedInvestments(item)}
          >
            Select for Simulation
          </Button>
        </div>
      ))}
    </div>
  );
}
