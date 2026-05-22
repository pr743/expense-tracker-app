"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    Legend
} from "recharts";

import {
    TrendingUp,
    TrendingDown,
    BarChart3
} from "lucide-react";

export default function MonthlyAnalyticsChart({

    reports = []

}) {

    const totalIncome =
        reports.reduce(
            (acc, item) => acc + Number(item.income),
            0
        );

    const totalExpense =
        reports.reduce(
            (acc, item) => acc + Number(item.expense),
            0
        );

    return (

        <section className="relative overflow-hidden mt-10 rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">


            <div className="absolute top-0 left-0 w-80 h-80 bg-violet-500/10 blur-3xl rounded-full" />

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-fuchsia-500/10 blur-3xl rounded-full" />



            <div className="relative z-10 p-4 sm:p-6 lg:p-8">



                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6 mb-10">

                    <div>

                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-violet-500/10 border border-violet-500/20 mb-5">

                            <BarChart3
                                size={18}
                                className="text-violet-400"
                            />

                            <span className="text-violet-300 text-sm font-semibold">
                                Advanced Analytics
                            </span>

                        </div>

                        <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                            Monthly Reports
                        </h2>

                        <p className="text-gray-400 mt-3 text-sm md:text-base">
                            Visual overview of your monthly income & expenses
                        </p>

                    </div>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full xl:w-auto">

                        <div className="min-w-[220px] rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-5">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-green-400 text-sm font-semibold">
                                        Total Income
                                    </p>

                                    <h3 className="text-3xl font-black text-white mt-3">
                                        ₹{totalIncome}
                                    </h3>

                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center">

                                    <TrendingUp
                                        size={28}
                                        className="text-green-400"
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="min-w-[220px] rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-500/5 p-5">

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-red-400 text-sm font-semibold">
                                        Total Expense
                                    </p>

                                    <h3 className="text-3xl font-black text-white mt-3">
                                        ₹{totalExpense}
                                    </h3>

                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-red-500/20 flex items-center justify-center">

                                    <TrendingDown
                                        size={28}
                                        className="text-red-400"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="w-full h-[350px] sm:h-[450px] lg:h-[520px] rounded-[28px] border border-white/10 bg-black/20 p-3 sm:p-6 overflow-hidden">

                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >

                        <BarChart
                            data={reports}
                            margin={{
                                top: 20,
                                right: 10,
                                left: -15,
                                bottom: 5
                            }}
                            barGap={10}
                        >

                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#2a2a2a"
                                vertical={false}
                            />

                            <XAxis
                                dataKey="month"
                                stroke="#9ca3af"
                                tickLine={false}
                                axisLine={false}
                                fontSize={12}
                            />

                            <YAxis
                                stroke="#9ca3af"
                                tickLine={false}
                                axisLine={false}
                                fontSize={12}
                            />

                            <Tooltip
                                cursor={{
                                    fill: "rgba(255,255,255,0.03)"
                                }}
                                contentStyle={{
                                    background: "#111827",
                                    border: "1px solid #27272a",
                                    borderRadius: "18px",
                                    color: "#fff"
                                }}
                            />

                            <Legend
                                wrapperStyle={{
                                    paddingTop: 20
                                }}
                            />

                            <Bar
                                dataKey="income"
                                fill="#22c55e"
                                radius={[12, 12, 0, 0]}
                                name="Income"
                            />

                            <Bar
                                dataKey="expense"
                                fill="#ef4444"
                                radius={[12, 12, 0, 0]}
                                name="Expense"
                            />

                        </BarChart>

                    </ResponsiveContainer>

                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

                        <p className="text-gray-400 text-sm">
                            Best Income Month
                        </p>

                        <h3 className="text-3xl font-black text-green-400 mt-4">
                            {
                                reports.reduce(
                                    (max, item) =>
                                        item.income > max.income
                                            ? item
                                            : max,
                                    reports[0] || {}
                                )?.month || "N/A"
                            }
                        </h3>

                    </div>



                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

                        <p className="text-gray-400 text-sm">
                            Highest Expense Month
                        </p>

                        <h3 className="text-3xl font-black text-red-400 mt-4">
                            {
                                reports.reduce(
                                    (max, item) =>
                                        item.expense > max.expense
                                            ? item
                                            : max,
                                    reports[0] || {}
                                )?.month || "N/A"
                            }
                        </h3>

                    </div>

                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">

                        <p className="text-gray-400 text-sm">
                            Financial Status
                        </p>

                        <h3 className="text-3xl font-black text-violet-400 mt-4">
                            {
                                totalIncome > totalExpense
                                    ? "Profit"
                                    : "Loss"
                            }
                        </h3>

                    </div>

                </div>

            </div>

        </section>
    );
}