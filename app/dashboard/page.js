"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
    IndianRupee,
    TrendingUp,
    TrendingDown,
    Sparkles,
    Activity
} from "lucide-react";

import DashboardCard from "../components/DashboardCard";
import ExpenseChart from "../components/ExpenseChart";
import MonthlyAnalyticsChart from "../components/MonthlyAnalyticsChart";

export default function DashboardPage() {

    const router = useRouter();

    const [summary, setSummary] = useState({
        totalIncome: 0,
        totalExpense: 0,
        balance: 0
    });

    const [reports, setReports] = useState([]);

    const [loading, setLoading] = useState(true);

    const API_URL =
        process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            router.push("/login");
            return;
        }

        // eslint-disable-next-line react-hooks/immutability
        fetchDashboardData(token);

    }, []);

    const fetchDashboardData = async (token) => {

        try {

            const summaryResponse = await axios.get(
                `${API_URL}/analytics/summary`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setSummary(
                summaryResponse.data.summary
            );

            const reportResponse = await axios.get(
                `${API_URL}/analytics/monthly-report`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setReports(
                reportResponse.data.reports
            );

        } catch (error) {

            console.log(error);

        } finally {

            setTimeout(() => {

                setLoading(false);

            }, 1200);
        }
    };

    if (loading) {

        return (

            <main className="min-h-screen bg-[#050816] overflow-hidden flex items-center justify-center relative">

                <div className="absolute inset-0">

                    <div className="absolute top-[-100px] left-[-100px] w-[320px] h-[320px] bg-violet-600/30 rounded-full blur-3xl" />

                    <div className="absolute bottom-[-120px] right-[-100px] w-[320px] h-[320px] bg-fuchsia-600/20 rounded-full blur-3xl" />

                </div>

                <div className="relative z-10">

                    <div className="w-[340px] sm:w-[420px] rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 shadow-2xl">

                        <div className="flex items-center gap-4">

                            <div className="relative">

                                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/30">

                                    <IndianRupee
                                        size={30}
                                        className="text-white"
                                    />

                                </div>

                                <div className="absolute inset-0 rounded-3xl border-4 border-violet-400/30 animate-ping" />

                            </div>

                            <div>

                                <h1 className="text-2xl font-black text-white">
                                    ExpenseTracker
                                </h1>

                                <p className="text-gray-400 text-sm mt-1">
                                    Loading dashboard analytics
                                </p>

                            </div>

                        </div>

                        <div className="mt-10">

                            <div className="flex items-center gap-3 mb-6">

                                <Activity
                                    size={20}
                                    className="text-violet-400 animate-pulse"
                                />

                                <p className="text-gray-300 font-medium">
                                    Syncing financial data...
                                </p>

                            </div>

                            <div className="w-full h-3 rounded-full bg-white/5 overflow-hidden">

                                <div
                                    className="
                                        h-full
                                        w-[70%]
                                        bg-gradient-to-r
                                        from-violet-500
                                        via-fuchsia-500
                                        to-pink-500
                                        rounded-full
                                        animate-pulse
                                    "
                                />

                            </div>

                        </div>

                        <div className="grid grid-cols-3 gap-4 mt-10">

                            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-4">

                                <TrendingUp
                                    size={22}
                                    className="text-green-400 mb-4"
                                />

                                <div className="h-3 rounded-full bg-white/10 mb-2 animate-pulse" />

                                <div className="h-3 w-2/3 rounded-full bg-white/10 animate-pulse" />

                            </div>

                            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-4">

                                <TrendingDown
                                    size={22}
                                    className="text-red-400 mb-4"
                                />

                                <div className="h-3 rounded-full bg-white/10 mb-2 animate-pulse" />

                                <div className="h-3 w-2/3 rounded-full bg-white/10 animate-pulse" />

                            </div>

                            <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-4">

                                <Sparkles
                                    size={22}
                                    className="text-violet-400 mb-4"
                                />

                                <div className="h-3 rounded-full bg-white/10 mb-2 animate-pulse" />

                                <div className="h-3 w-2/3 rounded-full bg-white/10 animate-pulse" />

                            </div>

                        </div>

                        <div className="mt-8 flex items-center justify-center gap-2">

                            <div className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" />

                            <div className="w-2 h-2 rounded-full bg-fuchsia-400 animate-bounce delay-100" />

                            <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce delay-200" />

                        </div>

                    </div>

                </div>

            </main>
        );
    }

    return (

        <main className="min-h-screen bg-[#070B14] text-white p-4 md:p-8">

            <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

                <div>

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-5">

                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                        <span className="text-sm text-gray-300">
                            Live Financial Overview
                        </span>

                    </div>

                    <h1 className="text-4xl md:text-6xl font-black leading-tight">

                        Financial

                        <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Dashboard
                        </span>

                    </h1>

                    <p className="text-gray-400 mt-4 text-lg max-w-2xl">

                        Track your income, expenses,
                        balance, and monthly financial growth
                        with real-time analytics.

                    </p>

                </div>

                <button
                    onClick={() =>
                        router.push("/transactions")
                    }
                    className="
                        group
                        bg-gradient-to-r
                        from-violet-600
                        to-fuchsia-600
                        hover:scale-105
                        transition-all
                        duration-300
                        px-8
                        py-5
                        rounded-3xl
                        font-bold
                        shadow-2xl
                        shadow-violet-500/20
                    "
                >

                    <span className="flex items-center gap-3">

                        Open Transactions

                        <TrendingUp
                            size={22}
                            className="group-hover:translate-x-1 transition"
                        />

                    </span>

                </button>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6">

                <DashboardCard
                    title="Total Income"
                    amount={summary.totalIncome}
                    color="green"
                    subtitle="All income transactions"
                    icon={
                        <TrendingUp
                            size={32}
                            className="text-emerald-400"
                        />
                    }
                />

                <DashboardCard
                    title="Total Expense"
                    amount={summary.totalExpense}
                    color="red"
                    subtitle="All expense transactions"
                    icon={
                        <TrendingDown
                            size={32}
                            className="text-red-400"
                        />
                    }
                />

                <DashboardCard
                    title="Remaining Balance"
                    amount={summary.balance}
                    color="violet"
                    subtitle="Available financial balance"
                    icon={
                        <IndianRupee
                            size={32}
                            className="text-violet-400"
                        />
                    }
                />

            </div>

            <div className="mt-10">

                <ExpenseChart
                    income={summary.totalIncome}
                    expense={summary.totalExpense}
                />

            </div>

            <div className="mt-10">

                <MonthlyAnalyticsChart
                    reports={reports}
                />

            </div>

        </main>
    );
}