"use client";

import { useState } from "react";
import axios from "axios";
import Link from "next/link";

import {
    Wallet,
    ShieldCheck,
    TrendingUp,
    Eye,
    EyeOff,
    CheckCircle2
} from "lucide-react";

export default function RegisterPage() {

    const API_URL =
        process.env.NEXT_PUBLIC_API_URL ||
        "https://full-stack-project-2-using-sql-backend.onrender.com/api";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const [success, setSuccess] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

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

            setErrorMessage("");

            setSuccess("");

            const response = await axios.post(
                `${API_URL}/users/register`,
                formData
            );

            setSuccess(
                response.data.message ||
                "Account created successfully"
            );

            setFormData({
                name: "",
                email: "",
                password: ""
            });

        } catch (error) {

            setErrorMessage(
                error.response?.data?.message ||
                "Registration failed"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <main className="
            min-h-screen
            relative
            overflow-hidden
            bg-[#030712]
            flex
            items-center
            justify-center
            px-4
            py-10
        ">

            <div className="
                absolute
                top-0
                left-0
                w-[500px]
                h-[500px]
                bg-violet-600/20
                blur-[150px]
                rounded-full
            " />

            <div className="
                absolute
                bottom-0
                right-0
                w-[500px]
                h-[500px]
                bg-cyan-500/20
                blur-[150px]
                rounded-full
            " />

            <div className="
                relative
                z-10
                w-full
                max-w-7xl
                grid
                lg:grid-cols-2
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                shadow-2xl
            ">

                <div className="
                    hidden
                    lg:flex
                    relative
                    overflow-hidden
                    flex-col
                    justify-between
                    p-14
                    border-r
                    border-white/10
                    bg-gradient-to-br
                    from-violet-600/10
                    via-transparent
                    to-cyan-500/10
                ">

                    <div>

                        <div className="
                            inline-flex
                            items-center
                            gap-3
                            px-5
                            py-3
                            rounded-full
                            bg-white/5
                            border
                            border-white/10
                            backdrop-blur-xl
                        ">

                            <div className="
                                w-2.5
                                h-2.5
                                rounded-full
                                bg-green-400
                                animate-pulse
                            " />

                            <span className="text-sm text-gray-300">
                                Smart Finance Platform
                            </span>

                        </div>

                        <h1 className="
                            text-6xl
                            font-black
                            leading-tight
                            mt-10
                        ">

                            Manage Your

                            <span className="
                                block
                                bg-gradient-to-r
                                from-violet-400
                                via-fuchsia-400
                                to-cyan-400
                                bg-clip-text
                                text-transparent
                            ">

                                Money Smarter

                            </span>

                        </h1>

                        <p className="
                            text-gray-400
                            text-lg
                            leading-relaxed
                            mt-8
                            max-w-xl
                        ">

                            Modern expense tracking dashboard with
                            analytics, transaction management,
                            secure authentication, reports,
                            and real-time financial insights.

                        </p>

                    </div>

                    <div className="grid grid-cols-2 gap-5 mt-14">

                        <div className="
                            bg-white/[0.04]
                            border
                            border-white/10
                            rounded-3xl
                            p-6
                        ">

                            <div className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-violet-500/20
                                flex
                                items-center
                                justify-center
                            ">

                                <TrendingUp size={28} />

                            </div>

                            <h2 className="text-4xl font-black mt-6">
                                10K+
                            </h2>

                            <p className="text-gray-400 mt-2">
                                Transactions Managed
                            </p>

                        </div>

                        <div className="
                            bg-white/[0.04]
                            border
                            border-white/10
                            rounded-3xl
                            p-6
                        ">

                            <div className="
                                w-14
                                h-14
                                rounded-2xl
                                bg-cyan-500/20
                                flex
                                items-center
                                justify-center
                            ">

                                <ShieldCheck size={28} />

                            </div>

                            <h2 className="text-4xl font-black mt-6">
                                99%
                            </h2>

                            <p className="text-gray-400 mt-2">
                                Secure System
                            </p>

                        </div>

                    </div>

                </div>

                <div className="
                    flex
                    items-center
                    justify-center
                    p-6
                    sm:p-10
                    lg:p-16
                ">

                    <div className="w-full max-w-xl">

                        <div className="
                            lg:hidden
                            flex
                            items-center
                            gap-4
                            mb-10
                        ">

                            <div className="
                                w-14
                                h-14
                                rounded-3xl
                                bg-gradient-to-br
                                from-violet-600
                                to-fuchsia-600
                                flex
                                items-center
                                justify-center
                            ">

                                <Wallet size={28} />

                            </div>

                            <div>

                                <h2 className="text-2xl font-black">
                                    ExpenseTracker
                                </h2>

                                <p className="text-gray-400 text-sm">
                                    Smart Finance App
                                </p>

                            </div>

                        </div>

                        <div>

                            <h1 className="
                                text-4xl
                                sm:text-5xl
                                font-black
                            ">
                                Create Account
                            </h1>

                            <p className="
                                text-gray-400
                                mt-4
                                text-base
                            ">
                                Start managing your financial future today.
                            </p>

                        </div>

                        {
                            success && (

                                <div className="
                                    mt-8
                                    flex
                                    items-center
                                    gap-3
                                    bg-green-500/10
                                    border
                                    border-green-500/20
                                    text-green-400
                                    rounded-2xl
                                    p-4
                                ">

                                    <CheckCircle2 size={20} />

                                    <p className="font-medium">
                                        {success}
                                    </p>

                                </div>
                            )
                        }

                        {
                            errorMessage && (

                                <div className="
                                    mt-8
                                    bg-red-500/10
                                    border
                                    border-red-500/20
                                    text-red-400
                                    rounded-2xl
                                    p-4
                                ">

                                    {errorMessage}

                                </div>
                            )
                        }

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 mt-10"
                        >

                            <div>

                                <label className="
                                    block
                                    text-sm
                                    font-semibold
                                    text-gray-300
                                    mb-3
                                ">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        h-14
                                        rounded-2xl
                                        bg-white/[0.05]
                                        border
                                        border-white/10
                                        px-5
                                        text-white
                                        placeholder:text-gray-500
                                        outline-none
                                        focus:border-violet-500
                                        focus:ring-4
                                        focus:ring-violet-500/10
                                        transition-all
                                    "
                                    required
                                />

                            </div>

                            <div>

                                <label className="
                                    block
                                    text-sm
                                    font-semibold
                                    text-gray-300
                                    mb-3
                                ">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="
                                        w-full
                                        h-14
                                        rounded-2xl
                                        bg-white/[0.05]
                                        border
                                        border-white/10
                                        px-5
                                        text-white
                                        placeholder:text-gray-500
                                        outline-none
                                        focus:border-violet-500
                                        focus:ring-4
                                        focus:ring-violet-500/10
                                        transition-all
                                    "
                                    required
                                />

                            </div>

                            <div>

                                <label className="
                                    block
                                    text-sm
                                    font-semibold
                                    text-gray-300
                                    mb-3
                                ">
                                    Password
                                </label>

                                <div className="relative">

                                    <input
                                        type={
                                            showPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="password"
                                        placeholder="Enter secure password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="
                                            w-full
                                            h-14
                                            rounded-2xl
                                            bg-white/[0.05]
                                            border
                                            border-white/10
                                            px-5
                                            pr-14
                                            text-white
                                            placeholder:text-gray-500
                                            outline-none
                                            focus:border-violet-500
                                            focus:ring-4
                                            focus:ring-violet-500/10
                                            transition-all
                                        "
                                        required
                                    />

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="
                                            absolute
                                            right-5
                                            top-1/2
                                            -translate-y-1/2
                                            text-gray-400
                                        "
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
                                    w-full
                                    h-14
                                    rounded-2xl
                                    bg-gradient-to-r
                                    from-violet-600
                                    via-fuchsia-600
                                    to-cyan-500
                                    hover:scale-[1.02]
                                    transition-all
                                    duration-300
                                    font-bold
                                    shadow-2xl
                                    shadow-violet-500/20
                                    disabled:opacity-70
                                "
                            >

                                {
                                    loading
                                        ? "Creating Account..."
                                        : "Create Account"
                                }

                            </button>

                        </form>

                        <p className="
                            text-center
                            text-gray-400
                            mt-8
                        ">

                            Already have an account?

                            <Link
                                href="/login"
                                className="
                                    ml-2
                                    font-bold
                                    text-violet-400
                                    hover:text-violet-300
                                "
                            >
                                Login
                            </Link>

                        </p>

                    </div>

                </div>

            </div>

        </main>
    );
}