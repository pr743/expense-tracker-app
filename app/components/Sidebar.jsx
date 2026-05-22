"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
    LayoutDashboard,
    Receipt,
    Tags,
    Wallet,
    LogOut,
    Menu,
    X,
    Sparkles
} from "lucide-react";

import { useState } from "react";

export default function Sidebar() {

    const pathname = usePathname();

    const router = useRouter();

    const [open, setOpen] = useState(false);

    const links = [

        {
            name: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard
        },

        {
            name: "Transactions",
            path: "/transactions",
            icon: Receipt
        },

        {
            name: "Categories",
            path: "/categories",
            icon: Tags
        }

    ];

    const handleLogout = () => {

        localStorage.removeItem("token");

        router.push("/login");
    };

    return (
        <>


            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-[75px] bg-[#050816]/90 backdrop-blur-2xl border-b border-white/10 flex items-center justify-between px-5">

                <div className="flex items-center gap-3">

                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-violet-500/30">

                        <Wallet size={22} className="text-white" />

                    </div>

                    <div>

                        <h1 className="text-lg font-black text-white leading-none">
                            ExpenseTracker
                        </h1>

                        <p className="text-xs text-gray-400 mt-1">
                            Smart Finance
                        </p>

                    </div>

                </div>

                <button
                    onClick={() => setOpen(!open)}
                    className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
                >
                    {
                        open
                            ? <X size={22} />
                            : <Menu size={22} />
                    }
                </button>

            </div>



            {
                open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="lg:hidden fixed inset-0 bg-black/70 z-40"
                    />
                )
            }



            <aside
                className={`
                    fixed top-0 left-0 z-50
                    h-screen
                    w-[290px]
                    bg-[#050816]
                    border-r border-white/10
                    flex flex-col
                    transition-all duration-300
                    
                    ${open
                        ? "translate-x-0"
                        : "-translate-x-full lg:translate-x-0"
                    }
                `}
            >



                <div className="p-6 border-b border-white/10 shrink-0">

                    <div className="flex items-center gap-4">

                        <div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600 flex items-center justify-center shadow-2xl shadow-violet-500/20">

                            <Wallet size={28} className="text-white" />

                        </div>

                        <div>

                            <h1 className="text-2xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                                ExpenseTracker
                            </h1>

                            <p className="text-gray-400 text-sm mt-1">
                                Finance Dashboard
                            </p>

                        </div>

                    </div>

                </div>



                <div className="flex-1 overflow-y-auto px-5 py-6">



                    <div className="rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 p-5 mb-8">

                        <div className="flex items-center gap-3 mb-4">

                            <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">

                                <Sparkles
                                    size={20}
                                    className="text-violet-300"
                                />

                            </div>

                            <div>

                                <p className="text-sm text-gray-400">
                                    Welcome Back
                                </p>

                                <h2 className="text-lg font-bold text-white">
                                    Smart Analytics
                                </h2>

                            </div>

                        </div>

                        <div className="flex items-center gap-2">

                            <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                            <span className="text-sm text-green-400 font-semibold">
                                System Running
                            </span>

                        </div>

                    </div>



                    <nav className="space-y-4">

                        {
                            links.map((link) => {

                                const Icon = link.icon;

                                const active =
                                    pathname === link.path;

                                return (

                                    <Link
                                        key={link.path}
                                        href={link.path}
                                        onClick={() => setOpen(false)}
                                        className={`
                                            group
                                            flex items-center gap-4
                                            rounded-3xl
                                            p-4
                                            border
                                            transition-all duration-300
                                            
                                            ${active
                                                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 border-violet-500 text-white shadow-xl shadow-violet-500/20"
                                                : "bg-white/[0.03] border-white/5 hover:bg-white/[0.06] text-gray-300"
                                            }
                                        `}
                                    >

                                        <div
                                            className={`
                                                w-12 h-12 rounded-2xl
                                                flex items-center justify-center
                                                
                                                ${active
                                                    ? "bg-white/20"
                                                    : "bg-white/5 group-hover:bg-white/10"
                                                }
                                            `}
                                        >

                                            <Icon size={23} />

                                        </div>

                                        <div>

                                            <h3 className="font-bold text-lg">
                                                {link.name}
                                            </h3>

                                            <p className="text-xs text-gray-400">
                                                Manage {link.name}
                                            </p>

                                        </div>

                                    </Link>
                                );
                            })
                        }

                    </nav>

                </div>


                <div className="p-5 border-t border-white/10 shrink-0">

                    <button
                        onClick={handleLogout}
                        className="
                            w-full
                            rounded-3xl
                            border border-red-500/20
                            bg-red-500/10
                            hover:bg-red-500/20
                            p-4
                            flex items-center gap-4
                            transition-all duration-300
                        "
                    >

                        <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">

                            <LogOut
                                size={22}
                                className="text-red-400"
                            />

                        </div>

                        <div className="text-left">

                            <h3 className="font-bold text-red-400">
                                Logout
                            </h3>

                            <p className="text-xs text-gray-400">
                                Exit dashboard
                            </p>

                        </div>

                    </button>

                </div>

            </aside>
        </>
    );
}