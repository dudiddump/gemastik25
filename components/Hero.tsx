import ResponsiveContainer from "@/components/ResponsiveContainer";
import { PlayCircle, BarChart, ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const statsData = [
    { value: '1000+', label: 'User Berhasil' },
    { value: '50M+', label: 'Uang Diselamatkan' },
    { value: '95%', label: 'Tingkat Keberhasilan' },
  ];

  const StatCard = ({ value, label }: { value: string; label: string }) => (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md text-center w-full">
      <p className="text-4xl font-bold text-green-500 dark:text-green-400">{value}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-1">{label}</p>
    </div>
  );

  return (
    <>
      <section className="bg-green-50 dark:bg-teal-900 flex items-center justify-center">
        <ResponsiveContainer>
          <div className="mt-10 pt-20 pb-5 flex flex-col lg:flex-row items-center justify-between  gap-5">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-5 py-1 rounded-full mb-5+4">
                Platform Anti-Judol #1 Indonesia
              </span>

              <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-green-50 leading-tight">
                Ganti Judol Lo,
                <br />
                <span className="text-green-600 dark:text-green-400">
                  Cuan Lebih Slow Tapi Lebih Aman!
                </span>
              </h1>

              <p className="mt-5 text-lg text-gray-600 dark:text-gray-100 max-w-xl mx-auto lg:mx-0">
                Aplikasi pertama di Indonesia yang membantu kamu berhenti dari
                kebiasaan judi online dan mengalihkannya ke investasi yang
                menguntungkan. Mulai perjalanan finansial sehatmu hari ini!
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/register"
                  className="flex items-center justify-center bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg"
                >
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Mulai Gantiin Kebiasaan Burukmu
                </Link>
                <a
                  href="#simulasi"
                  className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
                >
                  <BarChart className="mr-2 h-5 w-5" />
                  Lihat Simulasi Cuan
                </a>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <Image
                src="/pictHero.jpg"
                alt="Ilustrasi Aplikasi ReMoney"
                width={600}
                height={550}
                priority
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="py-10">
            <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
                {statsData.map((stat) => (
                  <StatCard key={stat.label} value={stat.value} label={stat.label} />
                ))}
            </div>
          </div>
          
          <div className="bg-green-50 dark:bg-teal-900 pb-20 text-center">
            <a 
            href="#features" 
            className="inline-flex flex-col items-center text-gray-500 dark:text-gray-300 hover:text-green-400 transition-colors animate-bounce">
              <span className="text-sm font-semibold">Lihat Fitur Unggulan Kami</span>
              <ArrowDown className="h-6 w-6 mt-1" />
            </a>
          </div>
        </ResponsiveContainer>
      </section>
    </>
  );
};
