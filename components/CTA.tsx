import React from "react";

const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
  );
};

const CTA = () => {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white dark:from-teal-900 dark:to-gray-900 pb-20">
      <ResponsiveContainer>
        <section className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Siap Mengambil Kendali?
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Ambil langkah pertama menuju kebebasan finansial sekarang juga.
          </p>

          <div className="flex justify-center mt-3">
            <a
              href="/register"
              className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg text-lg transform hover:scale-105"
            >
              Mulai Sekarang!
            </a>
          </div>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
            Tanpa biaya tersembunyi, tanpa komitmen jangka panjang.
          </p>
        </section>
      </ResponsiveContainer>
    </div>
  );
};

export default CTA;
