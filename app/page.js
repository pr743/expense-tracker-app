import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Wallet,
  BarChart3,
  TrendingUp,
  CreditCard,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function Home() {

  const features = [

    {
      title: "Smart Analytics",
      desc: "Track income, expenses, savings, and monthly financial growth.",
      icon: <BarChart3 size={28} />
    },

    {
      title: "Secure Authentication",
      desc: "JWT authentication system with protected routes & user security.",
      icon: <ShieldCheck size={28} />
    },

    {
      title: "Real-time Dashboard",
      desc: "Modern dashboard with charts, reports, and live transaction updates.",
      icon: <TrendingUp size={28} />
    },

    {
      title: "Expense Management",
      desc: "Manage categories, transactions, income & expenses professionally.",
      icon: <CreditCard size={28} />
    }

  ];

  return (

    <main className="bg-[#030712] text-white overflow-hidden">



      <section className="relative min-h-screen flex items-center px-5 sm:px-8 lg:px-16 py-24">



        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-black to-[#111827]" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-600/20 blur-[140px] rounded-full" />

        <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/20 blur-[140px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">


          <div>

            <div className="inline-flex items-center gap-3 border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-3 rounded-full">

              <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />

              <span className="text-sm text-gray-300 font-medium">
                AI Powered Finance Management
              </span>

            </div>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">

              Modern

              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">

                Expense Tracker

              </span>

              Dashboard

            </h1>

            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl">

              A professional full stack finance management platform built with
              Next.js, Node.js, Express, MySQL & Tailwind CSS. Track expenses,
              analyze reports, monitor transactions, and manage financial growth
              with real-time analytics.

            </p>


            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <Link
                href="/register"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600
                  hover:scale-105
                  transition-all
                  duration-300
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  shadow-2xl
                  shadow-violet-500/30
                "
              >

                Start Free

                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-all"
                />

              </Link>

              <Link
                href="/login"
                className="
                  border
                  border-white/10
                  bg-white/5
                  hover:bg-white/10
                  backdrop-blur-xl
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  transition-all
                  duration-300
                "
              >
                Login Account
              </Link>

            </div>



            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

                <h2 className="text-3xl font-black">
                  10K+
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  Transactions
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

                <h2 className="text-3xl font-black">
                  99%
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  Secure
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

                <h2 className="text-3xl font-black">
                  Live
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  Analytics
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 backdrop-blur-xl">

                <h2 className="text-3xl font-black">
                  Smart
                </h2>

                <p className="text-gray-400 text-sm mt-2">
                  Reports
                </p>

              </div>

            </div>

          </div>



          <div className="relative">

            <div className="
              relative
              rounded-[40px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-6
              lg:p-8
              shadow-2xl
            ">



              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

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
                      Finance Dashboard
                    </h2>

                    <p className="text-gray-400 text-sm mt-1">
                      Real-time analytics
                    </p>

                  </div>

                </div>

                <div className="
                  px-4
                  py-2
                  rounded-2xl
                  bg-green-500/20
                  text-green-400
                  text-sm
                  font-bold
                  border
                  border-green-500/20
                ">
                  Live
                </div>

              </div>



              <div className="
                mt-8
                rounded-[32px]
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-600
                to-cyan-500
                p-8
                shadow-2xl
              ">

                <p className="text-white/70 text-sm">
                  Total Balance
                </p>

                <h1 className="text-5xl lg:text-6xl font-black mt-3">
                  ₹38,450
                </h1>

                <div className="flex items-center gap-3 mt-5">

                  <CheckCircle2 size={20} />

                  <span className="font-semibold">
                    +12% this month
                  </span>

                </div>

              </div>



              <div className="grid grid-cols-2 gap-5 mt-6">

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-3xl p-6">

                  <p className="text-emerald-400 text-sm">
                    Income
                  </p>

                  <h2 className="text-3xl font-black mt-3">
                    ₹50,000
                  </h2>

                </div>

                <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-6">

                  <p className="text-red-400 text-sm">
                    Expense
                  </p>

                  <h2 className="text-3xl font-black mt-3">
                    ₹11,550
                  </h2>

                </div>

              </div>



              <div className="mt-8 space-y-4">

                {
                  [
                    {
                      title: "Salary",
                      type: "Income",
                      amount: "+₹50,000",
                      color: "text-emerald-400"
                    },

                    {
                      title: "Shopping",
                      type: "Expense",
                      amount: "-₹2,500",
                      color: "text-red-400"
                    },

                    {
                      title: "Netflix",
                      type: "Subscription",
                      amount: "-₹799",
                      color: "text-red-400"
                    },

                    {
                      title: "Freelancing",
                      type: "Project Payment",
                      amount: "+₹12,000",
                      color: "text-emerald-400"
                    }

                  ].map((item, index) => (

                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        justify-between
                        bg-white/[0.03]
                        hover:bg-white/[0.06]
                        border
                        border-white/5
                        rounded-3xl
                        p-5
                        transition-all
                        duration-300
                      "
                    >

                      <div className="flex items-center gap-4">

                        <div className="
                          w-12
                          h-12
                          rounded-2xl
                          bg-white/10
                          flex
                          items-center
                          justify-center
                        ">

                          <Sparkles size={20} />

                        </div>

                        <div>

                          <h3 className="font-bold">
                            {item.title}
                          </h3>

                          <p className="text-gray-400 text-sm mt-1">
                            {item.type}
                          </p>

                        </div>

                      </div>

                      <h2 className={`font-black text-lg ${item.color}`}>
                        {item.amount}
                      </h2>

                    </div>

                  ))
                }

              </div>

            </div>

          </div>

        </div>

      </section>



      <section className="relative px-5 sm:px-8 lg:px-16 py-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl lg:text-5xl font-black">

              Everything You Need
              <span className="block text-violet-400 mt-3">
                In One Platform
              </span>

            </h2>

            <p className="text-gray-400 mt-6 text-lg">

              Professional finance management system with modern UI,
              analytics, transactions, reports, and secure authentication.

            </p>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-20">

            {
              features.map((feature, index) => (

                <div
                  key={index}
                  className="
                    group
                    bg-white/[0.03]
                    hover:bg-white/[0.05]
                    border
                    border-white/10
                    rounded-[32px]
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-2
                  "
                >

                  <div className="
                    w-16
                    h-16
                    rounded-3xl
                    bg-gradient-to-br
                    from-violet-600
                    to-fuchsia-600
                    flex
                    items-center
                    justify-center
                    shadow-xl
                    shadow-violet-500/20
                  ">

                    {feature.icon}

                  </div>

                  <h3 className="text-2xl font-black mt-8">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mt-4">
                    {feature.desc}
                  </p>

                </div>

              ))
            }

          </div>

        </div>

      </section>

    </main>
  );
}