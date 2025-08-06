import React from 'react';

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

const Stats = () => {
  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        {statsData.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="flex items-center justify-center bg-green-50 dark:bg-teal-900 pb-10">
       <Stats />
    </div>
  )
}

export default App;
