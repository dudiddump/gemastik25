export default function page() {
  return (
    <div className="dark:bg-gray-800 h-screen">
      <section className="mx-auto container">
        <div className="mt-20 flex justify-center items-center flex-col gap-5">
          <h1 className="text-white text-center font-bold text-4xl">
            Simulasi
            <span className="text-primary"> Investasi Mini</span>
          </h1>
          <p className="text-2xl text-center max-w-4xl text-white">
            Coba simulasi investasi mulai dari Rp10.000 dan lihat potensi cuan
            yang bisa kamu dapatkan. Semua dijelaskan dengan bahasa yang gampang
            dimengerti!
          </p>
        </div>
      </section>
    </div>
  );
}
