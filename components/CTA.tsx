import ResponsiveContainer from "@/components/ResponsiveContainer";
import Link from 'next/link';

const CTA = () => {
  return (
    <ResponsiveContainer>
      <section className="text-center">
        <div className="flex justify-center">
          <Link href="/register" className="mt-10 inline-block bg-green-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg text-lg">
            Mulai Sekarang!
          </Link>
        </div>
        <p className="py-2 text-sm text-gray-900">Tanpa biaya tersembunyi, tanpa komitmen jangka panjang</p>
      </section>
    </ResponsiveContainer>
  );
};

export default CTA;