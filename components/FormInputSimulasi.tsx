"use client";

import FormInput from "./FormInput";
import { useInvestmentStore } from "@/stores/useInvestmentsStore";

export default function FormInputSimulasi() {
  const {
    modalAwal,
    investasiBulanan,
    jangkaWaktu,
    setModalAwal,
    setInvestasiBulanan,
    setJangkaWaktu,
  } = useInvestmentStore();

  return (
    <div className="mt-5">
      <form action="">
        <FormInput
          label="Modal Awal (Rp)"
          name="modalAwal"
          type="number"
          placeholder="Rp10.000"
          value={modalAwal}
          onChange={(e) => setModalAwal(Number(e.target.value))}
        />
        <FormInput
          label="Investasi Bulanan (Rp)"
          name="investasiBulanan"
          type="number"
          placeholder="Rp50.000"
          value={investasiBulanan}
          onChange={(e) => setInvestasiBulanan(Number(e.target.value))}
        />
        <FormInput
          label="Jangka Waktu (Bulan)"
          name="jangkaWaktu"
          type="number"
          placeholder="12"
          value={jangkaWaktu}
          onChange={(e) => setJangkaWaktu(Number(e.target.value))}
        />
      </form>
    </div>
  );
}
