import ResponsiveContainer from "@/components/ResponsiveContainer";
import { ArrowRightLeft, Trophy, Calculator, BookOpen, MessageSquare, LineChart, Ribbon, Users } from 'lucide-react';

const featureList = [
  { icon: <ArrowRightLeft className="h-8 w-8 text-green-600" />, title: 'Simulasi Perbandingan', description: 'Lihat perbandingan real antara uang yang habis untuk judi vs investasi.' },
  { icon: <Trophy className="h-8 w-8 text-green-600" />, title: 'Challenge Harian', description: 'Sistem gamifikasi dengan level dan badge untuk ganti kebiasaan buruk.' },
  { icon: <Calculator className="h-8 w-8 text-green-600" />, title: 'Budget Tracker', description: 'AI assistant yang bantu track pengeluaran dan kasih saran.' },
  { icon: <BookOpen className="h-8 w-8 text-green-600" />, title: 'Edukasi Mini', description: 'Video dan artikel pendek (<1 menit) tentang cuan sehat dan bahaya judol.' },
  { icon: <MessageSquare className="h-8 w-8 text-green-600" />, title: 'Forum Curhat Cuan', description: 'Tempat anonim buat curhat pengalaman kecanduan dan dapat support.' },
  { icon: <LineChart className="h-8 w-8 text-green-600" />, title: 'Simulasi Investasi', description: 'Coba simulasi investasi mulai dari Rp10.000 dengan estimasi return.' },
  { icon: <Ribbon className="h-8 w-8 text-green-600" />, title: 'Progress & Achievement', description: 'Track total uang judol yang berhasil dialihkan dan sistem XP.' },
  { icon: <Users className="h-8 w-8 text-green-600" />, title: 'Community Support', description: 'Bergabung dengan komunitas yang punya tujuan sama: lepas dari judol.' },
];

const Features = () => {
  return (
    <ResponsiveContainer>
      <section className="mt-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Kenapa ReMoney Beda?</h2>
          <p className="mt-2 text-lg text-gray-600">Kami nggak cuma ngasih teori, tapi bantuin kamu dengan tools praktis dan komunitas yang supportive buat benar-benar berubah dari kebiasaan judol ke investasi sehat.</p>
        </div>
      </section>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {featureList.map((feature) => (
          <div key={feature.title} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-green-100 hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </ResponsiveContainer>
  );
};

export default Features;