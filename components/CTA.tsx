import Link from 'next/link';

const CTA = () => {
  return (
    <section className="text-center">
      <div className="mt-4">
        <Link href="/register" className="inline-block bg-green-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-lg text-lg">
          Mulai Sekarang!
        </Link>
      </div>
      <p className="py-2 text-sm text-gray-900">Tanpa biaya tersembunyi, tanpa komitmen jangka panjang</p>
    </section>
  );
};

export default CTA;