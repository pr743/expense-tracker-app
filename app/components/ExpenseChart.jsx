"use client";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

import {
    TrendingUp,
    TrendingDown,
    Wallet
} from "lucide-react";

const COLORS = [
    "#22c55e",
    "#ef4444"
];

export default function ExpenseChart({

    income,
    expense

}) {

    const totalBalance =
        Number(income) - Number(expense);

    const data = [

        {
            name: "Income",
            value: Number(income)
        },

        {
            name: "Expense",
            value: Number(expense)
        }
    ];

    return (

        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-4 sm:p-6 lg:p-8">


            <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/10 blur-3xl rounded-full" />


            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

                <div>

                    <h2 className="text-3xl md:text-4xl font-black text-white">
                        Financial Analytics
                    </h2>

                    <p className="text-gray-400 mt-2 text-sm md:text-base">
                        Smart overview of your income & expenses
                    </p>

                </div>

                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/[0.04] w-fit">

                    <div className="w-12 h-12 rounded-2xl bg-violet-500/20 flex items-center justify-center">

                        <Wallet className="text-violet-400" size={24} />

                    </div>

                    <div>

                        <p className="text-gray-400 text-xs">
                            Current Balance
                        </p>

                        <h3 className="text-2xl font-black text-white">
                            ₹{totalBalance}
                        </h3>

                    </div>

                </div>

            </div>





            <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">


                <div className="w-full h-[320px] sm:h-[420px]">

                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart>

                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={80}
                                outerRadius={140}
                                paddingAngle={5}
                                dataKey="value"
                                stroke="transparent"
                            >

                                {
                                    data.map((entry, index) => (

                                        <Cell
                                            key={index}
                                            fill={COLORS[index]}
                                        />
                                    ))
                                }

                            </Pie>

                            <Tooltip
                                contentStyle={{
                                    background: "#111827",
                                    border: "1px solid #27272a",
                                    borderRadius: "18px",
                                    color: "#fff"
                                }}
                            />

                            <Legend />

                        </PieChart>

                    </ResponsiveContainer>

                </div>

                <div className="space-y-5">


                    <div className="group rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6 transition-all duration-300 hover:scale-[1.02]">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-green-400 text-sm font-semibold">
                                    Total Income
                                </p>

                                <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
                                    ₹{income}
                                </h2>

                            </div>

                            <div className="w-16 h-16 rounded-3xl bg-green-500/20 flex items-center justify-center">

                                <TrendingUp
                                    className="text-green-400"
                                    size={30}
                                />

                            </div>

                        </div>

                        <div className="mt-6 flex items-center gap-2">

                            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

                            <p className="text-gray-300 text-sm">
                                Income flow active
                            </p>

                        </div>

                    </div>


                    <div className="group rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-rose-500/5 p-6 transition-all duration-300 hover:scale-[1.02]">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-red-400 text-sm font-semibold">
                                    Total Expense
                                </p>

                                <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
                                    ₹{expense}
                                </h2>

                            </div>

                            <div className="w-16 h-16 rounded-3xl bg-red-500/20 flex items-center justify-center">

                                <TrendingDown
                                    className="text-red-400"
                                    size={30}
                                />

                            </div>

                        </div>

                        <div className="mt-6 flex items-center gap-2">

                            <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse" />

                            <p className="text-gray-300 text-sm">
                                Expense tracking active
                            </p>

                        </div>

                    </div>

                    <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-6">

                        <div className="flex items-center justify-between">

                            <div>

                                <p className="text-violet-400 text-sm font-semibold">
                                    Remaining Balance
                                </p>

                                <h2 className="text-4xl md:text-5xl font-black text-white mt-4">
                                    ₹{totalBalance}
                                </h2>

                            </div>

                            <div className="w-16 h-16 rounded-3xl bg-violet-500/20 flex items-center justify-center">

                                <Wallet
                                    className="text-violet-400"
                                    size={30}
                                />

                            </div>

                        </div>

                        <div className="mt-6 h-3 bg-white/10 rounded-full overflow-hidden">

                            <div
                                className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
                                style={{
                                    width: `${income > 0
                                        ? (totalBalance / income) * 100
                                        : 0
                                        }%`
                                }}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}