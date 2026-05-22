import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  title: "Expense Tracker App",

  description:
    "Modern full stack finance management dashboard with analytics and expense tracking.",

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {

  return (

    <html
      lang="en"
      suppressHydrationWarning
      className={`
        ${geistSans.variable}
        ${geistMono.variable}
        scroll-smooth
      `}
    >

      <body
        className="
          min-h-screen
          bg-[#030712]
          text-white
          antialiased
          overflow-x-hidden
          font-sans
        "
      >



        <div className="fixed inset-0 -z-50">

          <div className="absolute inset-0 bg-[#030712]" />

          <div className="
            absolute
            top-0
            left-0
            w-[500px]
            h-[500px]
            bg-violet-600/20
            blur-[160px]
            rounded-full
          " />

          <div className="
            absolute
            bottom-0
            right-0
            w-[500px]
            h-[500px]
            bg-cyan-500/20
            blur-[160px]
            rounded-full
          " />

        </div>



        <main className="relative z-10">

          {children}

        </main>



        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{

            duration: 3000,

            style: {
              background: "#111827",
              color: "#fff",
              border: "1px solid rgba(255,255,255,0.1)"
            }
          }}
        />

      </body>

    </html>
  );
}