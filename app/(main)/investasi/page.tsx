import InvestmentResult from "@/components/InvestmentResult";
import InvestmentSimulator from "@/components/InvestmentSimulator";
import ResponsiveContainer from "@/components/ResponsiveContainer";
import SimmulationAssetCard from "@/components/SimulationAssetCard";
import rawData from "@/public/data/investmentOptions.json";

export default async function Page() {
  const investmentOptions = rawData as {
    name: string;
    description: string;
    riskLevel: "Low" | "Medium" | "High";
    expectedReturn: number;
    minInvestment: number;
    keuntungan: string[];
    perhatian: string[];
  }[];

  return (
    <div className="dark:bg-gray-800 h-screen ">
      <ResponsiveContainer>
        <div className="flex justify-center items-center flex-col gap-5">
          <h1 className="mt-20 text-gray-800 dark:text-white text-center font-bold text-4xl">
            Simulasi
            <span className="text-primary"> Investasi Mini</span>
          </h1>
          <p className="text-2xl text-center max-w-4xl dark:text-white text-gray-600">
            Coba simulasi investasi mulai dari Rp10.000 dan lihat potensi cuan
            yang bisa kamu dapatkan. Semua dijelaskan dengan bahasa yang gampang
            dimengerti!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 mt-20 gap-5">
          <InvestmentSimulator />
          <InvestmentResult />
        </div>

        <div className="mt-10">
          <h1 className="text-2xl font-semibold">Pilih Produk Investasi</h1>
          <SimmulationAssetCard data={investmentOptions} />
        </div>
      </ResponsiveContainer>
    </div>
  );
}
