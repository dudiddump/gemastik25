import { create } from "zustand";

type RiskLevel = "Low" | "Medium" | "High";

interface InvestmentOption {
  name: string;
  riskLevel: RiskLevel;
  expectedReturn: number;
}

interface InvestmentState {
  selectedInvestment: InvestmentOption | null;
  modalAwal: number;
  investasiBulanan: number;
  jangkaWaktu: number;

  setSelectedInvestments: (item: InvestmentOption) => void;
  setModalAwal: (value: number) => void;
  setInvestasiBulanan: (value: number) => void;
  setJangkaWaktu: (value: number) => void;
}

export const useInvestmentStore = create<InvestmentState>((set) => ({
  selectedInvestment: null,
  modalAwal: 0,
  investasiBulanan: 0,
  jangkaWaktu: 0,

  setSelectedInvestments: (item: InvestmentOption) =>
    set({ selectedInvestment: item }),
  setModalAwal: (value: number) => set({ modalAwal: value }),
  setInvestasiBulanan: (value: number) => set({ investasiBulanan: value }),
  setJangkaWaktu: (value: number) => set({ jangkaWaktu: value }),
}));
