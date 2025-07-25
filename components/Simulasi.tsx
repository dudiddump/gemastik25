"use client";
import { useState, useEffect } from 'react';
import { TrendingDown, TrendingUp, AlertTriangle, DollarSign, Calculator } from 'lucide-react';
import Link from 'next/link';

const Simulasi = () => {
  const [dailySpend, setDailySpend] = useState<number>(50000);
  const [results, setResults] = useState<any>(null);
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);
  };

  useEffect(() => {
    if (dailySpend > 0) {
      const monthlySpend = dailySpend * 30;
      const LOSS_RATE = 0.95;
      const ANNUAL_INVESTMENT_RETURN_RATE = 0.12;
      const MONTHLY_INVESTMENT_RETURN_RATE = ANNUAL_INVESTMENT_RETURN_RATE / 12;

      const loss1Month = monthlySpend * LOSS_RATE;
      const loss6Months = loss1Month * 6;
      const loss1Year = loss1Month * 12;

      let totalInvestmentValue = 0;
      let investment1Month = 0;
      let investment6Months = 0;
      let investment1Year = 0;

      for (let i = 1; i <= 12; i++) {
        totalInvestmentValue = (totalInvestmentValue + monthlySpend) * (1 + MONTHLY_INVESTMENT_RETURN_RATE);
        if (i === 1) {
          investment1Month = totalInvestmentValue - (monthlySpend * i);
        }
        if (i === 6) {
          investment6Months = totalInvestmentValue - (monthlySpend * i);
        }
        if (i === 12) {
          investment1Year = totalInvestmentValue - (monthlySpend * i);
        }
      }

      const totalDifference = loss1Year + investment1Year;

      setResults({
        monthlySpend: formatCurrency(monthlySpend),
        loss: {
          '1 Bulan': formatCurrency(loss1Month),
          '6 Bulan': formatCurrency(loss6Months),
          '1 Tahun': formatCurrency(loss1Year),
        },
        investment: {
          '1 Bulan': formatCurrency(investment1Month),
          '6 Bulan': formatCurrency(investment6Months),
          '1 Tahun': formatCurrency(investment1Year),
        },
        totalDifference: formatCurrency(totalDifference),
      });
    } else {
      setResults(null);
    }
  }, [dailySpend]);

  return (
    <section className="mt-4 py-4 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simulasi <span className="text-red-500">Judol</span> vs <span className="text-green-600">Investasi</span>
          </h2>
          <p className="text-lg text-gray-600">
            Lihat sendiri seberapa banyak uang yang bisa kamu hemat dan investasikan kalau berhenti dari kebiasaan judi online. Hasilnya pasti bikin kamu kaget!
          </p>
        </div>

        <div className="mt-3 p-4 bg-white rounded-xl shadow-md">
          <div className="flex items-center text-lg font-semibold text-gray-700">
            <Calculator className="h-6 w-6 mr-3 text-green-600" />
            Hitung Simulasimu
          </div>
          <p className="mt-1 text-sm text-gray-500">Masukkan berapa rata-rata kamu habiskan per hari untuk judi online</p>
          <div className="mt-3">
            <label htmlFor="daily-spend" className="block text-sm font-medium text-gray-700">Rata-rata per hari (Rupiah)</label>
            <input
              type="number"
              id="daily-spend"
              value={dailySpend}
              onChange={(e) => setDailySpend(Number(e.target.value))}
              className="mt-2 block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="50000"
            />
            {results && <p className="mt-1.5 px-1 text-sm text-gray-500">Per bulan: {results.monthlySpend}</p>}
          </div>
        </div>

        {results && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kolom Judi Online */}
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <div className="flex items-center">
                <div className="p-2 bg-red-100 rounded-full">
                  <TrendingDown className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-red-800">Kalau Lanjut Judi Online</h3>
              </div>
              <p className="text-sm text-red-600 mt-1">Estimasi kerugian (95% loss rate)</p>
              <div className="mt-6 space-y-4">
                {Object.entries(results.loss).map(([period, value]) => (
                  <div key={period} className={`flex justify-between items-center p-3 rounded-lg ${period === '1 Tahun' ? 'bg-red-100' : ''}`}>
                    <span className="font-semibold text-gray-700">{period}</span>
                    <span className="font-bold text-red-600">-Rp {String(value).replace('Rp', '').trim()}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-red-100 rounded-lg flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-semibold text-red-700">Bahaya Hidden Cost</h4>
                  <p className="text-sm text-red-600">Belum termasuk hutang, stress, dan dampak pada keluarga.</p>
                </div>
              </div>
            </div>
            {/* Kolom Investasi */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-full">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="ml-4 text-xl font-bold text-green-800">Kalau Dialihkan ke Investasi</h3>
              </div>
              <p className="text-sm text-green-600 mt-1">Estimasi keuntungan (12% return/tahun)</p>
              <div className="mt-6 space-y-4">
                {Object.entries(results.investment).map(([period, value]) => (
                  <div key={period} className={`flex justify-between items-center p-3 rounded-lg ${period === '1 Tahun' ? 'bg-green-100' : ''}`}>
                    <span className="font-semibold text-gray-700">{period}</span>
                    <span className="font-bold text-green-600">+{String(value).replace('Rp', '').trim()}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-3 bg-green-100 rounded-lg flex items-start">
                <DollarSign className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <div className="ml-3">
                  <h4 className="font-semibold text-green-700">Bonus Keuntungan</h4>
                  <p className="text-sm text-green-600">Peace of mind, rencana masa depan, dan kebanggaan keluarga.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {results && (
          <div className="mt-5 text-center bg-white rounded-xl shadow-md p-8">
            <p className="text-lg text-gray-600">Selisihnya Mencapai <span className="text-2xl font-extrabold text-green-600">{results.totalDifference}</span> per Tahun!</p>
            <p className="mt-2 max-w-md mx-auto text-gray-500">Dengan uang sebanyak itu, kamu bisa beli motor, DP rumah, atau mulai bisnis. Mau tunggu sampai kapan?</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/challenge" className="px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">
                Mulai Challenge Sekarang!
              </Link>
              <Link href="/edukasi" className="px-6 py-3 bg-gray-100 text-gray-800 font-bold rounded-lg hover:bg-gray-200">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Simulasi;
