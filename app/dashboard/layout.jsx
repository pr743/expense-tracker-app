import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {

    return (

        <div className="bg-black text-white min-h-screen overflow-x-hidden">

            <Sidebar />

            <main
                className="
                    lg:ml-[290px]
                    pt-[90px]
                    lg:pt-0
                    min-h-screen
                    p-4
                    md:p-8
                    overflow-x-hidden
                "
            >
                {children}
            </main>

        </div>
    );
}