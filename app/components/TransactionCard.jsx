"use client";

import {

    ArrowDownRight,
    ArrowUpRight,
    Trash2,
    CalendarDays

} from "lucide-react";

export default function TransactionCard({

    transaction,
    onDelete

}) {

    const isIncome =
        transaction.type === "income";

    return (

        <div className="
            
            group
            relative
            overflow-hidden
            rounded-[30px]
            border border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-6
            transition-all duration-300
            hover:border-white/20
            hover:bg-white/[0.05]
            hover:-translate-y-1
        ">

            <div className={`
                
                absolute top-0 right-0
                w-40 h-40
                blur-3xl rounded-full
                
                ${isIncome
                    ? "bg-green-500/10"
                    : "bg-red-500/10"
                }
            `} />

            <div className="relative z-10">

                <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

                        <div className={`
                            
                            w-14 h-14
                            rounded-3xl
                            flex items-center justify-center
                            border
                            
                            ${isIncome
                                ? `
                                    bg-green-500/10
                                    border-green-500/20
                                    text-green-400
                                `
                                : `
                                    bg-red-500/10
                                    border-red-500/20
                                    text-red-400
                                `
                            }
                        `}>

                            {
                                isIncome
                                    ? <ArrowUpRight size={28} />
                                    : <ArrowDownRight size={28} />
                            }

                        </div>

                        <div>

                            <h2 className="text-2xl font-black text-white">
                                ₹{transaction.amount}
                            </h2>

                            <p className="text-gray-400 mt-1 capitalize">
                                {transaction.category_name}
                            </p>

                        </div>

                    </div>

                    <button
                        onClick={() => onDelete(transaction.id)}
                        className="
                            
                            w-12 h-12
                            rounded-2xl
                            bg-red-500/10
                            border border-red-500/20
                            flex items-center justify-center
                            text-red-400
                            transition-all duration-300
                            hover:bg-red-500/20
                        "
                    >

                        <Trash2 size={20} />

                    </button>

                </div>

                <div className="mt-7 flex items-center justify-between">

                    <div>

                        <p className="text-white font-semibold">
                            {transaction.note || "No Note"}
                        </p>

                        <div className="flex items-center gap-2 mt-3 text-gray-400 text-sm">

                            <CalendarDays size={16} />

                            <span>

                                {
                                    new Date(
                                        transaction.transaction_date
                                    ).toLocaleDateString()
                                }

                            </span>

                        </div>

                    </div>

                    <div className={`
                        
                        px-4 py-2
                        rounded-2xl
                        text-sm
                        font-bold
                        border
                        
                        ${isIncome
                            ? `
                                bg-green-500/10
                                border-green-500/20
                                text-green-400
                            `
                            : `
                                bg-red-500/10
                                border-red-500/20
                                text-red-400
                            `
                        }
                    `}>

                        {transaction.type}

                    </div>

                </div>

            </div>

        </div>
    );
}