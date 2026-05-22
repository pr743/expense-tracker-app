"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

import {
    ArrowDownCircle,
    ArrowUpCircle,
    CalendarDays,
    IndianRupee,
    Plus,
    Trash2,
    ReceiptText,
    WalletCards
} from "lucide-react";

import toast from "react-hot-toast";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://your-backend-api.onrender.com";

export default function TransactionsPage() {

    const router = useRouter();

    const [transactions, setTransactions] = useState([]);

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    const [addingTransaction, setAddingTransaction] = useState(false);

    const [deletingId, setDeletingId] = useState(null);

    const [formData, setFormData] = useState({

        category_id: "",
        amount: "",
        type: "expense",
        note: "",
        transaction_date: ""
    });

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            router.push("/login");
            return;
        }

        // eslint-disable-next-line react-hooks/immutability
        fetchTransactions(token);
        // eslint-disable-next-line react-hooks/immutability
        fetchCategories(token);

    }, []);

    const fetchTransactions = async (token) => {

        try {

            const response = await axios.get(
                `${API_URL}/api/transactions`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setTransactions(response.data.transactions || []);

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch transactions"
            );

        } finally {

            setTimeout(() => {

                setLoading(false);

            }, 1000);
        }
    };

    const fetchCategories = async (token) => {

        try {

            const response = await axios.get(
                `${API_URL}/api/categories`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setCategories(response.data.categories || []);

        } catch (error) {

            console.log(error);

            toast.error(
                error.response?.data?.message ||
                "Failed to fetch categories"
            );
        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setAddingTransaction(true);

            const token = localStorage.getItem("token");

            await axios.post(
                `${API_URL}/api/transactions`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success("Transaction Created Successfully");

            setFormData({

                category_id: "",
                amount: "",
                type: "expense",
                note: "",
                transaction_date: ""
            });

            await fetchTransactions(token);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to add Transaction"
            );

        } finally {

            setAddingTransaction(false);
        }
    };

    const deleteTransaction = async (id) => {

        try {

            setDeletingId(id);

            const token = localStorage.getItem("token");

            await axios.delete(
                `${API_URL}/api/transactions/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            toast.success("Transaction Deleted");

            fetchTransactions(token);

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to delete transaction"
            );

        } finally {

            setDeletingId(null);
        }
    };

    if (loading) {

        return (

            <main className="min-h-screen bg-[#050816] overflow-hidden relative flex items-center justify-center">

                <div className="absolute inset-0">

                    <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-violet-600/20 blur-[120px] rounded-full animate-pulse" />

                    <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-fuchsia-600/20 blur-[120px] rounded-full animate-pulse" />

                </div>

                <div className="relative z-10 text-center">

                    <div className="relative w-32 h-32 mx-auto mb-10">

                        <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-ping" />

                        <div className="absolute inset-4 rounded-full border border-fuchsia-500/30 animate-pulse" />

                        <div className="absolute inset-0 flex items-center justify-center">

                            <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/40 animate-bounce">

                                <WalletCards
                                    size={42}
                                    className="text-white"
                                />

                            </div>

                        </div>

                    </div>

                    <h1 className="text-5xl font-black text-white mb-4">
                        Loading Finance Hub
                    </h1>

                    <p className="text-gray-400 text-lg mb-10">
                        Preparing your smart transactions...
                    </p>

                    <div className="w-[280px] h-3 bg-white/10 rounded-full overflow-hidden mx-auto">

                        <div className="h-full w-[40%] bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 rounded-full animate-[loading_1.5s_ease-in-out_infinite]" />

                    </div>

                </div>

                <style jsx>{`
                    @keyframes loading {
                        0% {
                            transform: translateX(-100%);
                        }
                        100% {
                            transform: translateX(300%);
                        }
                    }
                `}</style>

            </main>
        );
    }

    return (

        <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

            <div className="fixed inset-0 -z-10 overflow-hidden">

                <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />

                <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-fuchsia-600/20 blur-[120px] rounded-full" />

            </div>

            <div className="lg:ml-[290px] px-4 sm:px-6 lg:px-10 py-24 lg:py-10">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

                    <div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-sm font-semibold mb-5">

                            <WalletCards size={16} />

                            Transaction Management

                        </div>

                        <h1 className="text-4xl sm:text-5xl font-black leading-tight">

                            Smart Expense

                            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">

                                Tracking System

                            </span>

                        </h1>

                        <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl">

                            Manage all income & expenses with beautiful financial tracking analytics.

                        </p>

                    </div>

                    <button
                        onClick={() => router.push("/dashboard")}
                        className="
                            h-[60px]
                            px-8
                            rounded-2xl
                            bg-gradient-to-r
                            from-violet-600
                            to-fuchsia-600
                            hover:scale-105
                            transition-all
                            duration-300
                            font-bold
                            shadow-2xl
                            shadow-violet-500/20
                        "
                    >
                        Dashboard
                    </button>

                </div>

                <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 sm:p-8 lg:p-10 mb-10">

                    <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 blur-3xl rounded-full" />

                    <div className="relative z-10">

                        <div className="flex items-center gap-4 mb-8">

                            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/20">

                                <Plus size={28} />

                            </div>

                            <div>

                                <h2 className="text-3xl font-black">
                                    Add Transaction
                                </h2>

                                <p className="text-gray-400 mt-1">
                                    Add new income or expense transaction
                                </p>

                            </div>

                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5"
                        >

                            <select
                                name="category_id"
                                value={formData.category_id}
                                onChange={handleChange}
                                className="
                                    w-full
                                    h-[60px]
                                    bg-black/30
                                    border border-white/10
                                    rounded-2xl
                                    px-5
                                    outline-none
                                    focus:border-violet-500
                                "
                                required
                            >

                                <option value="">
                                    Select Category
                                </option>

                                {
                                    categories.map((category) => (

                                        <option
                                            key={category.id}
                                            value={category.id}
                                            className="text-black"
                                        >
                                            {category.name}
                                        </option>
                                    ))
                                }

                            </select>

                            <div className="relative">

                                <IndianRupee
                                    size={18}
                                    className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400"
                                />

                                <input
                                    type="number"
                                    name="amount"
                                    placeholder="0.00"
                                    value={formData.amount}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        h-[60px]
                                        pl-11
                                        bg-black/30
                                        border border-white/10
                                        rounded-2xl
                                        outline-none
                                        px-5
                                        focus:border-violet-500
                                    "
                                    required
                                />

                            </div>

                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className="
                                    w-full
                                    h-[60px]
                                    bg-black/30
                                    border border-white/10
                                    rounded-2xl
                                    px-5
                                    outline-none
                                    focus:border-violet-500
                                "
                            >

                                <option
                                    value="expense"
                                    className="text-black"
                                >
                                    Expense
                                </option>

                                <option
                                    value="income"
                                    className="text-black"
                                >
                                    Income
                                </option>

                            </select>

                            <div className="relative">

                                <CalendarDays
                                    size={18}
                                    className="absolute top-1/2 -translate-y-1/2 left-4 text-gray-400"
                                />

                                <input
                                    type="date"
                                    name="transaction_date"
                                    value={formData.transaction_date}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        h-[60px]
                                        pl-11
                                        bg-black/30
                                        border border-white/10
                                        rounded-2xl
                                        outline-none
                                        px-5
                                        focus:border-violet-500
                                    "
                                    required
                                />

                            </div>

                            <input
                                type="text"
                                name="note"
                                placeholder="Transaction note"
                                value={formData.note}
                                onChange={handleChange}
                                className="
                                    w-full
                                    h-[60px]
                                    bg-black/30
                                    border border-white/10
                                    rounded-2xl
                                    outline-none
                                    px-5
                                    focus:border-violet-500
                                "
                            />

                            <button
                                type="submit"
                                disabled={addingTransaction}
                                className="
                                    md:col-span-2
                                    xl:col-span-5
                                    h-[65px]
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-violet-600
                                    via-purple-600
                                    to-fuchsia-600
                                    font-black
                                    text-lg
                                    hover:scale-[1.01]
                                    transition-all
                                    duration-300
                                    shadow-2xl
                                    shadow-violet-500/20
                                    disabled:opacity-70
                                "
                            >

                                {
                                    addingTransaction
                                        ? "Adding Transaction..."
                                        : "Add Transaction"
                                }

                            </button>

                        </form>

                    </div>

                </div>

                <div className="space-y-5">

                    {
                        transactions.map((transaction) => (

                            <div
                                key={transaction.id}
                                className="
                                    rounded-[30px]
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    p-6
                                "
                            >

                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

                                    <div className="flex items-start gap-5">

                                        <div className={`
                                            w-16
                                            h-16
                                            rounded-3xl
                                            flex
                                            items-center
                                            justify-center
                                            ${transaction.type === "income"
                                                ? "bg-green-500/20"
                                                : "bg-red-500/20"
                                            }
                                        `}>

                                            {
                                                transaction.type === "income"
                                                    ? (
                                                        <ArrowUpCircle
                                                            size={32}
                                                            className="text-green-400"
                                                        />
                                                    )
                                                    : (
                                                        <ArrowDownCircle
                                                            size={32}
                                                            className="text-red-400"
                                                        />
                                                    )
                                            }

                                        </div>

                                        <div>

                                            <h2 className="text-3xl font-black">

                                                ₹{transaction.amount}

                                            </h2>

                                            <div className="flex flex-wrap items-center gap-3 mt-3">

                                                <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300">

                                                    {transaction.category_name}

                                                </span>

                                                <span className={`
                                                    px-4
                                                    py-2
                                                    rounded-xl
                                                    text-sm
                                                    font-bold
                                                    ${transaction.type === "income"
                                                        ? "bg-green-500/20 text-green-400"
                                                        : "bg-red-500/20 text-red-400"
                                                    }
                                                `}>

                                                    {transaction.type}

                                                </span>

                                            </div>

                                            {
                                                transaction.note && (

                                                    <p className="text-gray-400 mt-4">
                                                        {transaction.note}
                                                    </p>
                                                )
                                            }

                                        </div>

                                    </div>

                                    <div className="flex flex-col items-start lg:items-end gap-4">

                                        <div className="text-gray-400 text-sm">

                                            {
                                                new Date(
                                                    transaction.transaction_date
                                                ).toLocaleDateString()
                                            }

                                        </div>

                                        <button
                                            onClick={() =>
                                                deleteTransaction(transaction.id)
                                            }
                                            disabled={
                                                deletingId === transaction.id
                                            }
                                            className="
                                                flex
                                                items-center
                                                gap-2
                                                px-5
                                                py-3
                                                rounded-2xl
                                                bg-red-500/10
                                                hover:bg-red-500/20
                                                border
                                                border-red-500/20
                                                transition-all
                                            "
                                        >

                                            <Trash2
                                                size={18}
                                                className="text-red-400"
                                            />

                                            <span className="text-red-400 font-semibold">

                                                {
                                                    deletingId === transaction.id
                                                        ? "Deleting..."
                                                        : "Delete"
                                                }

                                            </span>

                                        </button>

                                    </div>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </main>
    );
}