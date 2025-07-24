import {PlayCircle, BarChart} from 'lucide-react';
import ResponsiveContainer from "@/components/ResponsiveContainer";
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-green-50 flex flex-col lg:flex-row items-center justify-between gap-12">
      <ResponsiveContainer className="mt-5">
      <div className="flex-1 text-center lg:text-left">
        <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-4 py-1 rounded-full mb-4">
          Platform Anti-Judol #1 Indonesia
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Ganti Judol Lo
        </h1>
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 leading-tight">
          Cuan Lebih Slow Tapi Aman!
        </h1>
        <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
          Aplikasi pertama di Indonesia yang membantu kamu berhenti dari kebiasaan judi online dan mengalihkannya ke investasi yang menguntungkan. Mulai perjalanan finansial sehatmu hari ini!
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Link 
            href="/register" 
            className="flex items-center justify-center bg-green-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg"
          >
            <PlayCircle className="mr-2 h-5 w-5" />
            Mulai Gantiin Kebiasaan Burukmu
          </Link>
          <Link 
            href="/simulasi" 
            className="flex items-center justify-center bg-white border border-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            <BarChart className="mr-2 h-5 w-5" />
            Lihat Simulasi Cuan
          </Link>
        </div>
      </div>
      </ResponsiveContainer>
    </section>
  );
};
export default Hero;