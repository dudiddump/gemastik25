"use client";
import React, { useState, useEffect } from "react";
const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
);
import {
  User,
  DollarSign,
  Flame,
  CheckSquare,
  RefreshCw,
  PlusCircle,
  BarChart2,
  Award,
  Target,
  Lightbulb,
  Star,
} from "lucide-react";

interface LevelCardProps {
  level: number;
  currentXp: number;
  requiredXp: number;
}
interface InfoCardProps {
  title: string;
  value: string;
}
interface ChallengeItemProps {
  title: string;
  description: string;
  xp: number;
}
interface FormInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}
interface Transaction {
  category: string;
  description: string;
  amount: string;
  date: string;
}
interface TransactionItemProps extends Transaction {}
interface FormState {
  amount: string;
  category: string;
  description: string;
  type: string;
}
interface BadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
interface GoalProps {
  title: string;
  currentAmount: number;
  targetAmount: number;
}

const LevelCard = ({ level, currentXp, requiredXp }: LevelCardProps) => (
  <div className="bg-gray-900 p-4 rounded-xl border border-gray-800">
    <div className="flex items-center justify-between text-sm">
      <p className="font-bold text-white">Level {level}</p>
      <p className="text-gray-400">
        {currentXp} / {requiredXp} XP
      </p>
    </div>
    <div className="mt-2 w-full bg-gray-700 rounded-full h-2.5">
      <div
        className="bg-green-500 h-2.5 rounded-full"
        style={{ width: `${(currentXp / requiredXp) * 100}%` }}
      ></div>
    </div>
  </div>
);

const InfoCard = ({ title, value }: InfoCardProps) => (
  <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 text-center">
    <p className="text-2xl font-bold text-white">{value}</p>
    <p className="text-sm text-gray-400 mt-1">{title}</p>
  </div>
);

const ChallengeItem = ({ title, description, xp }: ChallengeItemProps) => (
  <div className="bg-gray-900 p-4 rounded-lg border border-gray-800 flex items-center justify-between">
    <div>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
      <p className="text-sm font-bold text-green-400 mt-1">+{xp} XP</p>
    </div>
    <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
      <RefreshCw className="h-5 w-5 text-gray-300" />
    </button>
  </div>
);

const FormInput = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  name,
}: FormInputProps) => (
  <div>
    <label className="block text-sm font-medium text-gray-400 mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:ring-green-500 focus:border-green-500"
    />
  </div>
);

const TransactionItem = ({
  category,
  description,
  amount,
  date,
}: TransactionItemProps) => (
  <div className="flex items-center justify-between py-3 border-b border-gray-800 last:border-b-0">
    <div>
      <p className="font-semibold text-white">{category}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
    <div className="text-right">
      <p className="font-bold text-green-400">{amount}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  </div>
);

const Badge = ({ icon, title, description }: BadgeProps) => (
  <div className="flex items-center p-4 bg-gray-900 rounded-lg border border-gray-800 space-x-4">
    <div className="text-yellow-400">{icon}</div>
    <div>
      <p className="font-semibold text-white">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  </div>
);

const GoalCard = ({ title, currentAmount, targetAmount }: GoalProps) => {
  const progress = Math.min((currentAmount / targetAmount) * 100, 100);
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white flex items-center">
          <Target className="h-5 w-5 mr-2 text-green-400" />
          Tujuan Finansial
        </h3>
        <span className="text-sm font-bold text-green-400">
          {Math.round(progress)}%
        </span>
      </div>
      <p className="text-sm text-gray-400 mb-2">{title}</p>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
        <div
          className="bg-green-500 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-xs text-gray-400 flex justify-between">
        <span>{formatCurrency(currentAmount)}</span>
        <span>{formatCurrency(targetAmount)}</span>
      </div>
    </div>
  );
};

const InsightCard = ({ text }: { text: string }) => (
  <div className="bg-gray-900 p-4 rounded-xl border border-gray-800 flex items-center space-x-3">
    <Lightbulb className="h-6 w-6 text-yellow-400 flex-shrink-0" />
    <p className="text-sm text-gray-300 italic">{text}</p>
  </div>
);

const BudgetTracker = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      category: "Tabungan",
      description: "Alih dari budget judi ke tabungan",
      amount: "Rp 50.000",
      date: "2025-08-07",
    },
  ]);
  const [formState, setFormState] = useState<FormState>({
    amount: "",
    category: "",
    description: "",
    type: "Other",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.amount || !formState.category) {
      return;
    }
    const newTransaction: Transaction = {
      category: formState.category,
      description: formState.description || "No description",
      amount: new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
      }).format(Number(formState.amount)),
      date: new Date().toISOString().split("T")[0],
    };
    setTransactions([newTransaction, ...transactions]);
    setFormState({ amount: "", category: "", description: "", type: "Other" });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h3 className="flex items-center text-xl font-bold text-white mb-6">
          <PlusCircle className="h-6 w-6 mr-3 text-green-400" />
          Add Expense
        </h3>
        <form onSubmit={handleAddExpense} className="space-y-4">
          <FormInput
            label="Amount (Rp)"
            type="number"
            placeholder="50000"
            name="amount"
            value={formState.amount}
            onChange={handleInputChange}
          />
          <FormInput
            label="Category"
            type="text"
            placeholder="Tabungan, Reksadana, etc."
            name="category"
            value={formState.category}
            onChange={handleInputChange}
          />
          <FormInput
            label="Description (Optional)"
            type="text"
            placeholder="Money diverted from gambling"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-primary transition-colors"
          >
            Add Expense
          </button>
        </form>
      </div>
      <div className="lg:col-span-2 bg-gray-900 p-6 rounded-xl border border-gray-800">
        <h3 className="flex items-center text-xl font-bold text-white mb-4">
          <BarChart2 className="h-6 w-6 mr-3 text-green-400" />
          Recent Transactions
        </h3>
        <div className="space-y-2">
          {transactions.map((tx, index) => (
            <TransactionItem key={index} {...tx} />
          ))}
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("Challenges");
  const user = { name: "Champion" };
  const achievements = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Pejuang 7 Hari",
      description: "Login 7 hari berturut-turut.",
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Investor Pemula",
      description: "Berhasil menabung Rp 500.000.",
    },
  ];

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <ResponsiveContainer>
        <main className="py-8 pt-24">
          <div className="text-center mb-8">
            <span className="inline-block bg-gray-800 text-green-400 text-xs font-semibold px-4 py-1 rounded-full mb-4">
              <User className="inline-block h-4 w-4 mr-2" />
              Personal Dashboard
            </span>
            <h1 className="text-4xl font-bold">
              Selamat datang kembali,{" "}
              <span className="text-green-400">{user.name}!</span>
            </h1>
            <p className="text-gray-400 mt-2">
              Lihat progress harian kamu dan lanjutkan perjalanan menuju
              kebebasan finansial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <LevelCard level={3} currentXp={800} requiredXp={1000} />
            <InfoCard title="Total Diselamatkan" value="Rp 2.500.000" />
            <InfoCard title="Hari Streak" value="12" />
            <InfoCard title="Challenge Selesai" value="6" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex border-b border-gray-800 mb-6">
                <button
                  onClick={() => setActiveTab("Challenges")}
                  className={`px-6 py-3 font-semibold text-sm transition-colors ${
                    activeTab === "Challenges"
                      ? "text-green-400 border-b-2 border-green-400"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Challenges
                </button>
                <button
                  onClick={() => setActiveTab("Budget Tracker")}
                  className={`px-6 py-3 font-semibold text-sm transition-colors ${
                    activeTab === "Budget Tracker"
                      ? "text-green-400 border-b-2 border-green-400"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Budget Tracker
                </button>
                <button
                  onClick={() => setActiveTab("Achievements")}
                  className={`px-6 py-3 font-semibold text-sm transition-colors ${
                    activeTab === "Achievements"
                      ? "text-green-400 border-b-2 border-green-400"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  Achievements
                </button>
              </div>
              <div>
                {activeTab === "Challenges" && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white">
                      Daily Challenges
                    </h2>
                    <p className="text-gray-400">
                      Complete challenges to earn XP and build healthy financial
                      habits.
                    </p>
                    <ChallengeItem
                      title="Hari Bebas Judol"
                      description="Tidak membuka aplikasi judi online hari ini"
                      xp={50}
                    />
                    <ChallengeItem
                      title="Alihkan ke Tabungan"
                      description="Masukkan Rp50.000 ke tabungan/investasi"
                      xp={75}
                    />
                  </div>
                )}
                {activeTab === "Budget Tracker" && <BudgetTracker />}
                {activeTab === "Achievements" && (
                  <div className="space-y-4">
                    <h2 className="text-xl font-bold text-white">
                      Your Badges
                    </h2>
                    <p className="text-gray-400">
                      Koleksi semua pencapaian untuk membuktikan progresmu!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {achievements.map((badge) => (
                        <Badge key={badge.title} {...badge} />
                      ))}
                      <div className="flex items-center justify-center p-4 bg-gray-900 rounded-lg border-2 border-dashed border-gray-700">
                        <p className="text-gray-500">
                          Badge lainnya akan muncul di sini
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <GoalCard
                title="Dana Darurat"
                currentAmount={2500000}
                targetAmount={10000000}
              />
              <InsightCard text="Menabung Rp 20.000 per hari bisa menjadi Rp 7.3 Juta dalam setahun. Konsistensi adalah kunci!" />
            </div>
          </div>
        </main>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardPage;
