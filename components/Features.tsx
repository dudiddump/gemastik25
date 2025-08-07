import ResponsiveContainer from "@/components/ResponsiveContainer";
import { ArrowRightLeft, Trophy, Calculator, BookOpen, MessageSquare, LineChart, Ribbon, Users } from 'lucide-react';

const featureList = [
  { icon: <ArrowRightLeft className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Simulasi Perbandingan', description: 'Lihat perbandingan real antara uang yang habis untuk judi vs investasi.' },
  { icon: <Trophy className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Challenge Harian', description: 'Sistem gamifikasi dengan level dan badge untuk ganti kebiasaan buruk.' },
  { icon: <Calculator className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Budget Tracker', description: 'AI assistant yang bantu track pengeluaran dan kasih saran.' },
  { icon: <BookOpen className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Edukasi Mini', description: 'Video dan artikel pendek (<1 menit) tentang cuan sehat dan bahaya judol.' },
  { icon: <MessageSquare className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Forum Curhat Cuan', description: 'Tempat anonim buat curhat pengalaman kecanduan dan dapat support.' },
  { icon: <LineChart className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Simulasi Investasi', description: 'Coba simulasi investasi mulai dari Rp10.000 dengan estimasi return.' },
  { icon: <Ribbon className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Progress & Achievement', description: 'Track total uang judol yang berhasil dialihkan dan sistem XP.' },
  { icon: <Users className="h-8 w-8 text-green-600 dark:text-green-400" />, title: 'Community Support', description: 'Bergabung dengan komunitas yang punya tujuan sama: lepas dari judol.' },
];

const Features = () => {
  return (
    <div id="features" className="bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-teal-900 pt-1 pb-10">

      <ResponsiveContainer>
        <section className="pt-15">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Kenapa ReMoney Beda?</h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-100">Kami nggak cuma ngasih teori, tapi bantuin kamu dengan tools praktis dan komunitas yang supportive buat benar-benar berubah dari kebiasaan judol ke investasi sehat.</p>
          </div>
        </section>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featureList.map((feature) => (
            <div key={feature.title} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-green-300 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </ResponsiveContainer>
    </div>
  );
};

export default Features;