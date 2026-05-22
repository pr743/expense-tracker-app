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
    WalletCards
} from "lucide-react";

import toast from "react-hot-toast";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://full-stack-project-2-using-sql-backend.onrender.com";

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
                        Authorization: `Bearer ${token}`,
                    },
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
            setTimeout(() => setLoading(false), 600);
        }
    };


    const fetchCategories = async (token) => {
        try {
            const response = await axios.get(
                `${API_URL}/api/categories`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCategories(response.data.categories || []);
        } catch (error) {
            console.log("CATEGORY ERROR:", error);
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
                        Authorization: `Bearer ${token}`,
                    },
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

            fetchTransactions(token);

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
                        Authorization: `Bearer ${token}`,
                    },
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
            <main className="min-h-screen bg-[#050816] flex items-center justify-center text-white">
                Loading...
            </main>
        );
    }


    return (
        <main className="min-h-screen bg-[#050816] text-white">

            <div className="lg:ml-[290px] px-6 py-10">


                <div className="flex justify-between items-center mb-10">
                    <div>
                        <h1 className="text-4xl font-black">
                            Transactions
                        </h1>
                        <p className="text-gray-400">
                            Manage your income and expenses
                        </p>
                    </div>

                    <button
                        onClick={() => router.push("/dashboard")}
                        className="px-6 py-3 bg-violet-600 rounded-xl"
                    >
                        Dashboard
                    </button>
                </div>


                <form
                    onSubmit={handleSubmit}
                    className="grid md:grid-cols-5 gap-4 mb-10"
                >
                    <select
                        name="category_id"
                        value={formData.category_id}
                        onChange={handleChange}
                        className="bg-black/30 p-3 rounded-xl"
                        required
                    >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>

                    <input
                        name="amount"
                        placeholder="Amount"
                        value={formData.amount}
                        onChange={handleChange}
                        className="bg-black/30 p-3 rounded-xl"
                        required
                    />

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="bg-black/30 p-3 rounded-xl"
                    >
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>

                    <input
                        type="date"
                        name="transaction_date"
                        value={formData.transaction_date}
                        onChange={handleChange}
                        className="bg-black/30 p-3 rounded-xl"
                        required
                    />

                    <input
                        name="note"
                        placeholder="Note"
                        value={formData.note}
                        onChange={handleChange}
                        className="bg-black/30 p-3 rounded-xl"
                    />

                    <button
                        type="submit"
                        disabled={addingTransaction}
                        className="md:col-span-5 bg-violet-600 py-3 rounded-xl font-bold"
                    >
                        {addingTransaction
                            ? "Adding..."
                            : "Add Transaction"}
                    </button>
                </form>

                {/* LIST */}
                <div className="space-y-4">
                    {transactions.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white/5 p-5 rounded-xl flex justify-between"
                        >
                            <div>
                                <h2 className="text-xl font-bold">
                                    ₹{t.amount}
                                </h2>
                                <p className="text-gray-400">
                                    {t.category_name}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {t.note}
                                </p>
                            </div>

                            <button
                                onClick={() => deleteTransaction(t.id)}
                                disabled={deletingId === t.id}
                                className="text-red-400"
                            >
                                <Trash2 />
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </main>
    );
}