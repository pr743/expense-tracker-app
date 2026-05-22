"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


import toast from "react-hot-toast";

import {
    Plus,
    Trash2,
    ArrowUpCircle,
    ArrowDownCircle,
    Layers3,
    Sparkles,
    LoaderCircle
} from "lucide-react";
import API from "../API/api";

export default function CategoriesPage() {

    const router = useRouter();

    const [categories, setCategories] = useState([]);

    const [loading, setLoading] = useState(true);

    const [buttonLoading, setButtonLoading] = useState(false);

    const [deleteLoadingId, setDeleteLoadingId] = useState(null);

    const [formData, setFormData] = useState({
        name: "",
        type: "expense"
    });

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {

            router.push("/login");
            return;
        }

        // eslint-disable-next-line react-hooks/immutability
        fetchCategories();

    }, []);

    const fetchCategories = async () => {

        try {

            const response = await API.get("/categories");

            setCategories(response.data.categories);

        } catch (error) {

            console.log(error);

            toast.error("Failed to fetch categories");

        } finally {

            setTimeout(() => {

                setLoading(false);

            }, 1500);
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

            setButtonLoading(true);

            await API.post(
                "/categories",
                formData
            );

            toast.success("Category Created Successfully");

            setFormData({
                name: "",
                type: "expense"
            });

            fetchCategories();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Failed to create category"
            );

        } finally {

            setButtonLoading(false);
        }
    };

    const deleteCategory = async (id) => {

        try {

            setDeleteLoadingId(id);

            await API.delete(
                `/categories/${id}`
            );

            toast.success("Category Deleted");

            fetchCategories();

        } catch (error) {

            toast.error(
                error.response?.data?.message ||
                "Delete failed"
            );

        } finally {

            setDeleteLoadingId(null);
        }
    };

    if (loading) {

        return (

            <main className="min-h-screen bg-[#050816] overflow-hidden relative flex items-center justify-center text-white">

                <div className="absolute top-[-150px] left-[-120px] w-[400px] h-[400px] bg-violet-600/30 blur-[120px] rounded-full animate-pulse" />

                <div className="absolute bottom-[-150px] right-[-120px] w-[400px] h-[400px] bg-fuchsia-600/30 blur-[120px] rounded-full animate-pulse" />

                <div className="relative z-10 text-center">

                    <div className="relative w-36 h-36 mx-auto mb-10">

                        <div className="absolute inset-0 rounded-full border border-violet-500/20" />

                        <div className="absolute inset-4 rounded-full border border-fuchsia-500/20" />

                        <div className="absolute inset-0 animate-spin">

                            <div className="w-5 h-5 rounded-full bg-violet-500 shadow-[0_0_30px_#8b5cf6]" />

                        </div>

                        <div className="absolute inset-4 animate-spin [animation-direction:reverse] [animation-duration:4s]">

                            <div className="w-4 h-4 rounded-full bg-fuchsia-500 shadow-[0_0_30px_#d946ef]" />

                        </div>

                        <div className="absolute inset-0 flex items-center justify-center">

                            <div className="w-24 h-24 rounded-[30px] bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/40">

                                <Layers3 size={40} />

                            </div>

                        </div>

                    </div>

                    <div className="flex items-center justify-center gap-2 mb-4">

                        <Sparkles
                            size={20}
                            className="text-violet-400 animate-pulse"
                        />

                        <span className="uppercase tracking-[0.3em] text-sm text-violet-300 font-bold">
                            Smart Finance
                        </span>

                    </div>

                    <h1 className="text-5xl md:text-6xl font-black mb-5 bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text text-transparent">

                        Loading Categories

                    </h1>

                    <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">

                        Preparing your beautiful finance category workspace...

                    </p>

                    <div className="flex items-center justify-center gap-2 mt-10">

                        <div className="w-3 h-3 rounded-full bg-violet-500 animate-bounce" />

                        <div className="w-3 h-3 rounded-full bg-fuchsia-500 animate-bounce delay-100" />

                        <div className="w-3 h-3 rounded-full bg-purple-500 animate-bounce delay-200" />

                    </div>

                </div>

            </main>
        );
    }

    return (

        <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/20 blur-[120px]" />

            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-fuchsia-600/20 blur-[120px]" />

            <div className="relative z-10 p-4 md:p-8 lg:p-10">

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

                    <div>

                        <div className="flex items-center gap-4 mb-4">

                            <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/30">

                                <Layers3 size={30} />

                            </div>

                            <div>

                                <h1 className="text-4xl md:text-5xl font-black">
                                    Categories
                                </h1>

                                <p className="text-gray-400 mt-2">
                                    Manage income & expense categories
                                </p>

                            </div>

                        </div>

                    </div>

                    <button
                        onClick={() => router.push("/dashboard")}
                        className="
                            bg-gradient-to-r
                            from-violet-600
                            to-fuchsia-600
                            hover:scale-105
                            transition-all
                            px-7
                            py-4
                            rounded-2xl
                            font-bold
                            shadow-2xl
                            shadow-violet-500/20
                        "
                    >
                        Dashboard
                    </button>

                </div>

                <div className="
                    bg-white/[0.04]
                    border border-white/10
                    backdrop-blur-2xl
                    rounded-[32px]
                    p-5 md:p-8
                    mb-10
                    shadow-2xl
                ">

                    <form
                        onSubmit={handleSubmit}
                        className="grid grid-cols-1 lg:grid-cols-3 gap-5"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Enter category name"
                            value={formData.name}
                            onChange={handleChange}
                            className="
                                bg-white/[0.05]
                                border border-white/10
                                rounded-2xl
                                p-5
                                outline-none
                                text-white
                                placeholder:text-gray-500
                            "
                            required
                        />

                        <select
                            name="type"
                            value={formData.type}
                            onChange={handleChange}
                            className="
                                bg-white/[0.05]
                                border border-white/10
                                rounded-2xl
                                p-5
                                outline-none
                                text-white
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

                        <button
                            type="submit"
                            disabled={buttonLoading}
                            className="
                                bg-gradient-to-r
                                from-violet-600
                                to-fuchsia-600
                                rounded-2xl
                                font-bold
                                text-lg
                                flex items-center justify-center gap-3
                                min-h-[64px]
                            "
                        >

                            {
                                buttonLoading ? (
                                    <>
                                        <LoaderCircle
                                            size={22}
                                            className="animate-spin"
                                        />

                                        Creating...
                                    </>
                                ) : (
                                    <>
                                        <Plus size={22} />

                                        Add Category
                                    </>
                                )
                            }

                        </button>

                    </form>

                </div>

                <div className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-3
                    gap-6
                ">

                    {
                        categories.map((category) => (

                            <div
                                key={category.id}
                                className="
                                    relative
                                    overflow-hidden
                                    bg-white/[0.04]
                                    border border-white/10
                                    rounded-[32px]
                                    p-7
                                    backdrop-blur-xl
                                    shadow-2xl
                                "
                            >

                                <div className="relative z-10">

                                    <div className="flex items-start justify-between gap-4">

                                        <div>

                                            <div className={`
                                                w-16 h-16
                                                rounded-3xl
                                                flex items-center justify-center
                                                mb-5

                                                ${category.type === "income"
                                                    ? "bg-emerald-500/15"
                                                    : "bg-red-500/15"
                                                }
                                            `}>

                                                {
                                                    category.type === "income"
                                                        ? (
                                                            <ArrowUpCircle
                                                                size={34}
                                                                className="text-emerald-400"
                                                            />
                                                        )
                                                        : (
                                                            <ArrowDownCircle
                                                                size={34}
                                                                className="text-red-400"
                                                            />
                                                        )
                                                }

                                            </div>

                                            <h2 className="text-3xl font-black">
                                                {category.name}
                                            </h2>

                                            <p className={`
                                                mt-3
                                                text-sm
                                                font-semibold
                                                uppercase

                                                ${category.type === "income"
                                                    ? "text-emerald-400"
                                                    : "text-red-400"
                                                }
                                            `}>
                                                {category.type}
                                            </p>

                                        </div>

                                        <button
                                            onClick={() => deleteCategory(category.id)}
                                            disabled={deleteLoadingId === category.id}
                                            className="
                                                w-14 h-14
                                                rounded-2xl
                                                bg-red-500/10
                                                border border-red-500/20
                                                flex items-center justify-center
                                            "
                                        >

                                            {
                                                deleteLoadingId === category.id ? (
                                                    <LoaderCircle
                                                        size={22}
                                                        className="text-red-400 animate-spin"
                                                    />
                                                ) : (
                                                    <Trash2
                                                        size={22}
                                                        className="text-red-400"
                                                    />
                                                )
                                            }

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