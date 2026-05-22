"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
    Wallet,
    Mail,
    Lock,
    ArrowRight,
    ShieldCheck,
    TrendingUp,
    Eye,
    EyeOff
} from "lucide-react";

export default function LoginPage() {

    const router = useRouter();

    const API_URL =
        process.env.NEXT_PUBLIC_API_URL;

    const [showPassword, setShowPassword] =
        useState(false);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] =
        useState(false);

    const [message, setMessage] = useState({
        type: "",
        text: ""
    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            setLoading(true);

            setMessage({
                type: "",
                text: ""
            });

            const response = await axios.post(
                `${API_URL}/users/login`,
                formData
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            localStorage.setItem(
                "user",
                JSON.stringify(response.data.user)
            );

            setMessage({
                type: "success",
                text: "Login successful"
            });

            setTimeout(() => {

                router.push("/dashboard");

            }, 1200);

        } catch (error) {

            setMessage({
                type: "error",
                text:
                    error.response?.data?.message ||
                    "Login failed"
            });

        } finally {

            setLoading(false);
        }
    };

    return (

        <main className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

            <div className="absolute inset-0">

                <div className="absolute top-[-150px] left-[-120px] w-[420px] h-[420px] bg-violet-600/30 rounded-full blur-3xl" />

                <div className="absolute bottom-[-150px] right-[-120px] w-[420px] h-[420px] bg-fuchsia-600/20 rounded-full blur-3xl" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.15),transparent_30%)]" />

            </div>

            <div className="relative z-10 min-h-screen grid lg:grid-cols-2">

                <div className="hidden lg:flex flex-col justify-between p-14 border-r border-white/10">

                    <div>

                        <div className="flex items-center gap-4">

                            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/30">

                                <Wallet size={30} />

                            </div>

                            <div>

                                <h1 className="text-3xl font-black">
                                    ExpenseTracker
                                </h1>

                                <p className="text-gray-400 mt-1">
                                    Smart Finance Platform
                                </p>

                            </div>

                        </div>

                        <div className="mt-20">

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">

                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                                <span className="text-sm text-gray-300">
                                    Real-Time Financial Insights
                                </span>

                            </div>

                            <h2 className="text-6xl font-black leading-tight">

                                Track Your

                                <span className="block bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">

                                    Financial Growth

                                </span>

                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed mt-8 max-w-xl">

                                Manage transactions, analyze spending,
                                monitor income, and visualize your
                                complete financial journey with a
                                modern analytics dashboard.

                            </p>

                        </div>

                    </div>

                    <div className="grid grid-cols-3 gap-5">

                        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

                            <TrendingUp
                                size={28}
                                className="text-green-400 mb-5"
                            />

                            <h3 className="text-3xl font-black">
                                24/7
                            </h3>

                            <p className="text-sm text-gray-400 mt-2">
                                Analytics Tracking
                            </p>

                        </div>

                        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

                            <ShieldCheck
                                size={28}
                                className="text-violet-400 mb-5"
                            />

                            <h3 className="text-3xl font-black">
                                100%
                            </h3>

                            <p className="text-sm text-gray-400 mt-2">
                                Secure Access
                            </p>

                        </div>

                        <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

                            <Wallet
                                size={28}
                                className="text-fuchsia-400 mb-5"
                            />

                            <h3 className="text-3xl font-black">
                                Smart
                            </h3>

                            <p className="text-sm text-gray-400 mt-2">
                                Expense Control
                            </p>

                        </div>

                    </div>

                </div>

                <div className="flex items-center justify-center px-5 py-10 sm:px-8 lg:px-14">

                    <div className="w-full max-w-xl">

                        <div className="lg:hidden flex items-center gap-4 mb-10">

                            <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-xl shadow-violet-500/30">

                                <Wallet size={26} />

                            </div>

                            <div>

                                <h1 className="text-2xl font-black">
                                    ExpenseTracker
                                </h1>

                                <p className="text-sm text-gray-400">
                                    Smart Finance App
                                </p>

                            </div>

                        </div>

                        <div className="bg-white/[0.05] border border-white/10 backdrop-blur-2xl rounded-[34px] p-6 sm:p-8 lg:p-10 shadow-2xl">

                            <div className="mb-10">

                                <h1 className="text-4xl sm:text-5xl font-black">
                                    Welcome Back
                                </h1>

                                <p className="text-gray-400 mt-4 text-base sm:text-lg">

                                    Login to continue managing your
                                    finances smarter.

                                </p>

                            </div>

                            {
                                message.text && (

                                    <div className={`mb-6 rounded-2xl border px-5 py-4 text-sm font-medium

                                        ${message.type === "success"
                                            ? "bg-green-500/10 border-green-500/20 text-green-400"
                                            : "bg-red-500/10 border-red-500/20 text-red-400"
                                        }
                                    `}>

                                        {message.text}

                                    </div>
                                )
                            }

                            <form
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >

                                <div>

                                    <label className="block text-sm font-semibold text-gray-300 mb-3">

                                        Email Address

                                    </label>

                                    <div className="relative">

                                        <Mail
                                            size={20}
                                            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                                        />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="example@gmail.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="
                                                w-full
                                                h-16
                                                rounded-2xl
                                                bg-white/[0.04]
                                                border border-white/10
                                                pl-14 pr-5
                                                outline-none
                                                text-white
                                                placeholder:text-gray-500
                                                focus:border-violet-500
                                                focus:bg-white/[0.06]
                                                transition-all
                                            "
                                            required
                                        />

                                    </div>

                                </div>

                                <div>

                                    <label className="block text-sm font-semibold text-gray-300 mb-3">

                                        Password

                                    </label>

                                    <div className="relative">

                                        <Lock
                                            size={20}
                                            className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                                        />

                                        <input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            name="password"
                                            placeholder="Enter password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            className="
                                                w-full
                                                h-16
                                                rounded-2xl
                                                bg-white/[0.04]
                                                border border-white/10
                                                pl-14 pr-16
                                                outline-none
                                                text-white
                                                placeholder:text-gray-500
                                                focus:border-violet-500
                                                focus:bg-white/[0.06]
                                                transition-all
                                            "
                                            required
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
                                        >

                                            {
                                                showPassword
                                                    ? <EyeOff size={20} />
                                                    : <Eye size={20} />
                                            }

                                        </button>

                                    </div>

                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="
                                        group
                                        w-full
                                        h-16
                                        rounded-2xl
                                        bg-gradient-to-r
                                        from-violet-600
                                        to-fuchsia-600
                                        font-bold
                                        text-lg
                                        flex items-center
                                        justify-center
                                        gap-3
                                        transition-all
                                        duration-300
                                        hover:scale-[1.01]
                                        shadow-2xl
                                        shadow-violet-500/30
                                        disabled:opacity-70
                                    "
                                >

                                    {
                                        loading
                                            ? "Logging In..."
                                            : "Login Account"
                                    }

                                    {
                                        !loading && (

                                            <ArrowRight
                                                size={22}
                                                className="group-hover:translate-x-1 transition"
                                            />
                                        )
                                    }

                                </button>

                            </form>

                            <div className="mt-10 text-center">

                                <p className="text-gray-400">

                                    Don&apos;t have an account?

                                    <Link
                                        href="/register"
                                        className="ml-2 font-bold text-violet-400 hover:text-violet-300 transition"
                                    >

                                        Register

                                    </Link>

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </main>
    );
}