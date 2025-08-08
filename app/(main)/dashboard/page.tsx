"use client";
import React, { useState, useEffect } from 'react';

const ResponsiveContainer = ({ children }: { children: React.ReactNode }) => <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;

import { User, DollarSign, Flame, CheckSquare, RefreshCw, PlusCircle, BarChart2, Award, Target, Lightbulb, Star, Trophy } from 'lucide-react';

interface LevelCardProps { 
  level: number; 
  currentXp: number; 
  requiredXp: number; 
}
interface InfoCardProps { 
  title: string; 
  value: string; 
  icon: React.ReactNode; 
}
interface ChallengeItemProps { 
  title: string; 
  description:string; 
  xp: number; 
}
interface FormInputProps { 
  label: string; 
  type: string; 
  placeholder: string; 
  value: string | number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; name: string; 
}
interface Transaction { 
  category: string; 
  description: string; 
  amount: string; 
  date: string; 
}
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
    <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border border-gray-200 dark:border-gray-800">
        <div className="flex items-center space-x-3">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-text-primary dark:text-dark-text-primary">Level {level}</span>
        </div>
        <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-primary h-2 rounded-full" style={{ width: `${(currentXp / requiredXp) * 100}%` }}></div>
        </div>
        <p className="text-xs text-text-secondary dark:text-dark-text-secondary mt-2 text-right">{currentXp}/{requiredXp} XP</p>
    </div>
);

const InfoCard = ({ title, value, icon }: InfoCardProps) => (
    <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col items-center justify-center text-center">
        <div className="flex items-center space-x-3">
            {icon}
            <span className="text-2xl font-bold text-text-primary dark:text-dark-text-primary">{value}</span>
        </div>
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary mt-2">{title}</p>
    </div>
);


const ChallengeItem = ({ title, description, xp }: ChallengeItemProps) => (
    <div className="bg-surface dark:bg-dark-surface p-4 rounded-lg border border-gray-200 dark:border-gray-800 flex items-center justify-between">
        <div>
            <p className="font-semibold text-text-primary dark:text-dark-text-primary">{title}</p>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">{description}</p>
            <p className="text-sm font-bold text-primary mt-1">+{xp} XP</p>
        </div>
        <button className="p-2 rounded-full bg-bg dark:bg-bg-dark hover:bg-gray-200 dark:hover:bg-gray-800">
            <RefreshCw className="h-5 w-5 text-text-secondary dark:text-dark-text-secondary" />
        </button>
    </div>
);

const FormInput = ({ label, type, placeholder, value, onChange, name }: FormInputProps) => (
    <div>
        <label className="block text-sm font-medium text-text-secondary dark:text-dark-text-secondary mb-2">{label}</label>
        <input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} className="w-full bg-bg dark:bg-bg-dark border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 text-text-primary dark:text-dark-text-primary focus:ring-primary focus:border-primary"/>
    </div>
);

const TransactionItem = ({ category, description, amount, date }: Transaction) => (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-800 last:border-b-0">
        <div>
            <p className="font-semibold text-text-primary dark:text-dark-text-primary">{category}</p>
            <p className="text-sm text-text-secondary">{description}</p>
        </div>
        <div className="text-right">
            <p className="font-bold text-primary">{amount}</p>
            <p className="text-xs text-text-secondary">{date}</p>
        </div>
    </div>
);

const Badge = ({ icon, title, description }: BadgeProps) => (
    <div className="flex items-center p-4 bg-surface dark:bg-dark-surface rounded-lg border border-gray-200 dark:border-gray-800 space-x-4">
        <div className="text-accent">{icon}</div>
        <div>
            <p className="font-semibold text-text-primary dark:text-dark-text-primary">{title}</p>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">{description}</p>
        </div>
    </div>
);

const GoalCard = ({ title, currentAmount, targetAmount }: GoalProps) => {
    const progress = Math.min((currentAmount / targetAmount) * 100, 100);
    const formatCurrency = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(value);
    return (
        <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-text-primary dark:text-dark-text-primary flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary"/>Tujuan Finansial
                </h3>
                <span className="text-sm font-bold text-primary">{Math.round(progress)}%</span>
            </div>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary mb-2">{title}</p>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="text-xs text-text-secondary dark:text-dark-text-secondary flex justify-between">
                <span>{formatCurrency(currentAmount)}</span>
                <span>{formatCurrency(targetAmount)}</span>
            </div>
        </div>
    );
};

const InsightCard = ({ text }: { text: string }) => (
    <div className="bg-surface dark:bg-dark-surface p-4 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center space-x-3">
        <Lightbulb className="h-6 w-6 text-accent flex-shrink-0" />
        <p className="text-sm text-text-secondary dark:text-dark-text-secondary italic">{text}</p>
    </div>
);

const BudgetTracker = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([{ category: "Tabungan", description: "Alih dari budget judi ke tabungan", amount: "Rp 50.000", date: "2025-08-07" }]);
    const [formState, setFormState] = useState<FormState>({ amount: '', category: '', description: '', type: 'Other' });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState(prevState => ({ ...prevState, [name]: value }));
    };

    const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formState.amount || !formState.category) { return; }
        const newTransaction: Transaction = {
            category: formState.category,
            description: formState.description || "No description",
            amount: new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(Number(formState.amount)),
            date: new Date().toISOString().split('T')[0]
        };
        setTransactions([newTransaction, ...transactions]);
        setFormState({ amount: '', category: '', description: '', type: 'Other' });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="flex items-center text-xl font-bold text-text-primary dark:text-dark-text-primary mb-6"><PlusCircle className="h-6 w-6 mr-3 text-primary" />Add Expense</h3>
                <form onSubmit={handleAddExpense} className="space-y-4">
                    <FormInput label="Amount (Rp)" type="number" placeholder="50000" name="amount" value={formState.amount} onChange={handleInputChange} />
                    <FormInput label="Category" type="text" placeholder="Tabungan, Reksadana, etc." name="category" value={formState.category} onChange={handleInputChange} />
                    <FormInput label="Description (Optional)" type="text" placeholder="Money diverted from gambling" name="description" value={formState.description} onChange={handleInputChange} />
                    <button type="submit" className="w-full bg-primary text-bg-dark font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors">Add Expense</button>
                </form>
            </div>
            <div className="bg-surface dark:bg-dark-surface p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="flex items-center text-xl font-bold text-text-primary dark:text-dark-text-primary mb-4"><BarChart2 className="h-6 w-6 mr-3 text-primary" />Recent Transactions</h3>
                <div className="space-y-2">{transactions.map((tx, index) => <TransactionItem key={index} {...tx} />)}</div>
            </div>
        </div>
    );
};

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState('Challenges');
    const user = { name: "Champion" };
    const achievements = [
        { icon: <Flame className="h-8 w-8"/>, title: "Pejuang 7 Hari", description: "Login 7 hari berturut-turut." },
        { icon: <Star className="h-8 w-8"/>, title: "Investor Pemula", description: "Berhasil menabung Rp 500.000." },
    ];
    
    const infoCardsData = [
        { title: "Total Diselamatkan", value: "Rp 2.500.000", icon: <DollarSign className="h-6 w-6 text-primary" /> },
        { title: "Hari Streak", value: "12", icon: <Flame className="h-6 w-6 text-accent" /> },
        { title: "Challenge Selesai", value: "5", icon: <Target className="h-6 w-6 text-dark-primary-dark" /> },
    ];

    return (
        <div className="bg-bg dark:bg-bg-dark min-h-screen text-text-primary dark:text-dark-text-primary">
            <ResponsiveContainer>
                <main className="py-8 pt-24">
                    <div className="text-center mb-8">
                        <span className="inline-block bg-surface dark:bg-dark-surface text-primary-dark dark:text-primary text-xs font-semibold px-4 py-1 rounded-full mb-4"><User className="inline-block h-4 w-4 mr-2" />Personal Dashboard</span>
                        <h1 className="text-4xl font-bold">Selamat datang kembali, <span className="text-primary">{user.name}!</span></h1>
                        <p className="text-text-secondary dark:text-dark-text-secondary mt-2">Lihat progress harian kamu dan lanjutkan perjalanan menuju kebebasan finansial.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <LevelCard level={3} currentXp={750} requiredXp={1000} />
                        {infoCardsData.map(card => <InfoCard key={card.title} {...card} />)}
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        <div className="lg:col-span-3">
                            <div className="flex space-x-2 bg-surface dark:bg-dark-surface p-1 rounded-lg mb-6 border border-gray-200 dark:border-gray-800">
                                <button onClick={() => setActiveTab('Challenges')} className={`w-full py-2.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Challenges' ? 'bg-bg dark:bg-bg-dark text-text-primary dark:text-dark-text-primary' : 'text-text-secondary dark:text-dark-text-secondary hover:bg-bg dark:hover:bg-bg-dark'}`}>Challenges</button>
                                <button onClick={() => setActiveTab('Budget Tracker')} className={`w-full py-2.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Budget Tracker' ? 'bg-bg dark:bg-bg-dark text-text-primary dark:text-dark-text-primary' : 'text-text-secondary dark:text-dark-text-secondary hover:bg-bg dark:hover:bg-bg-dark'}`}>Budget Tracker</button>
                                <button onClick={() => setActiveTab('Achievements')} className={`w-full py-2.5 text-sm font-semibold rounded-md transition-colors ${activeTab === 'Achievements' ? 'bg-bg dark:bg-bg-dark text-text-primary dark:text-dark-text-primary' : 'text-text-secondary dark:text-dark-text-secondary hover:bg-bg dark:hover:bg-bg-dark'}`}>Achievements</button>
                            </div>
                            <div>
                                {activeTab === 'Challenges' && (
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">Daily Challenges</h2><p className="text-text-secondary dark:text-dark-text-secondary">Complete challenges to earn XP and build healthy financial habits.</p>
                                        <ChallengeItem title="Hari Bebas Judol" description="Tidak membuka aplikasi judi online hari ini" xp={50} />
                                        <ChallengeItem title="Alihkan ke Tabungan" description="Masukkan Rp50.000 ke tabungan/investasi" xp={75} />
                                    </div>
                                )}
                                {activeTab === 'Budget Tracker' && (<BudgetTracker />)}
                                {activeTab === 'Achievements' && (
                                    <div className="space-y-4">
                                        <h2 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">Your Badges</h2><p className="text-text-secondary dark:text-dark-text-secondary">Koleksi semua pencapaian untuk membuktikan progresmu!</p>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {achievements.map(badge => <Badge key={badge.title} {...badge} />)}
                                            <div className="flex items-center justify-center p-4 bg-bg dark:bg-bg-dark rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700"><p className="text-text-secondary dark:text-dark-text-secondary">Badge lainnya akan muncul di sini</p></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="lg:col-span-1 space-y-6">
                            <GoalCard title="Dana Darurat" currentAmount={2500000} targetAmount={10000000} />
                            <InsightCard text="Menabung Rp 20.000 per hari bisa menjadi Rp 7.3 Juta dalam setahun. Konsistensi adalah kunci!" />
                        </div>
                    </div>
                </main>
            </ResponsiveContainer>
        </div>
    );
};

export default DashboardPage;
