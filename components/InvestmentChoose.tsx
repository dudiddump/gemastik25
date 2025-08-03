"use client";

import { useInvestmentStore } from "@/stores/useInvestmentsStore";

export default function InvestmentChoose() {
  const { modalAwal, investasiBulanan, jangkaWaktu, selectedInvestment } =
    useInvestmentStore();
  const totalDiinvestasikan = modalAwal + investasiBulanan * jangkaWaktu;
  const keuntungan =
    totalDiinvestasikan * (selectedInvestment?.expectedReturn ?? 0);
  const totalAkhir = totalDiinvestasikan + keuntungan;

  return (
    <div>
      <div className="mt-4">
        <h1 className="text-black dark:text-gray-400 font-semibold text-xl">
          {selectedInvestment?.name}
        </h1>
        <span className="text-orange-400 bg-orange-100 py-1 px-5 mt-2 inline-flex rounded-full text-sm">
          {selectedInvestment?.riskLevel}
        </span>
      </div>

      <div className="flex justify-between bg-gray-50 dark:bg-gray-800 dark:text-white py-2 px-4 mt-5 rounded-md">
        <h1>Total Diinvestasikan</h1>
        <p>{totalDiinvestasikan}</p>
      </div>

      <div className="flex justify-between py-2 px-4 mt-5 rounded-md font-semibold bg-green-50 border border-primary dark:bg-gray-800">
        <h1 className="dark:text-white">Keuntungan</h1>
        <p className="text-primary ">+Rp. {keuntungan}</p>
      </div>
      <div className="flex justify-between bg-green-50 dark:bg-gray-800 py-2 px-4 mt-5 rounded-md font-bold border-primary border">
        <h1 className="dark:text-white">Total Akhir</h1>
        <p className="text-primary">Rp. {totalAkhir}</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 flex justify-center items-center flex-col border mt-5 border-gray-300 p-5">
        <h1 className="text-gray-600 dark:text-gray-400">Return rate</h1>
        <p className="text-primary font-semibold text-4xl">
          +{(selectedInvestment?.expectedReturn ?? 0) * 100}%
        </p>
      </div>
    </div>
  );
}
