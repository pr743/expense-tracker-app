"use client";

import CountUp from "react-countup";

export default function DashboardCard({

    title,
    amount,
    icon,
    color = "violet",
    subtitle

}) {

    const colorStyles = {

        green: `
            from-emerald-500/20
            to-green-500/5
            border-emerald-500/20
            text-emerald-400
            shadow-emerald-500/10
        `,

        red: `
            from-red-500/20
            to-rose-500/5
            border-red-500/20
            text-red-400
            shadow-red-500/10
        `,

        violet: `
            from-violet-500/20
            to-purple-500/5
            border-violet-500/20
            text-violet-400
            shadow-violet-500/10
        `,

        blue: `
            from-sky-500/20
            to-cyan-500/5
            border-sky-500/20
            text-sky-400
            shadow-sky-500/10
        `
    };

    return (

        <div className={`
            
            relative
            overflow-hidden
            rounded-[32px]
            border
            bg-gradient-to-br
            p-7
            backdrop-blur-xl
            shadow-2xl
            transition-all duration-300
            hover:scale-[1.02]
            hover:-translate-y-1
            
            ${colorStyles[color]}
        `}>

            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

            <div className="relative z-10">

                <div className="flex items-start justify-between">

                    <div>

                        <p className="text-gray-400 text-sm font-medium">
                            {title}
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black mt-5 text-white">

                            ₹

                            <CountUp
                                end={Number(amount)}
                                duration={2}
                                separator=","
                                decimals={2}
                            />

                        </h2>

                    </div>

                    <div className="
                        
                        w-16 h-16
                        rounded-3xl
                        bg-white/10
                        border border-white/10
                        flex items-center justify-center
                        backdrop-blur-xl
                    ">

                        {icon}

                    </div>

                </div>

                <div className="mt-8 flex items-center justify-between">

                    <p className="text-gray-400 text-sm">
                        {subtitle}
                    </p>

                    <div className="flex items-center gap-2">

                        <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />

                        <span className="text-xs text-gray-300">
                            Live
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}