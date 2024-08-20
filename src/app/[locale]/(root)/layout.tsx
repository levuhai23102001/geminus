import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative w-full h-full">
            <Navbar />
            <div className="mt-[60px] flex w-full px-2">
                <Sidebar />
                <div className="relative ml-60 flex-1 py-0 px-7">
                    {children}
                </div>
            </div>
        </div>
    );
}
