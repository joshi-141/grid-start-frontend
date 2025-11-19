"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import { ReduxProvider } from "@/lib/store/provider";
import GlobalLoader from "../loaders/GlobalLoader";


export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const authRoutes = [
        "/login",
        "/registration",
        "/forgot-password",
        "/reset-password",
        "/change-password"
    ];
    const isAuthPage = authRoutes.includes(pathname);

    return (
        <ReduxProvider>
            <GlobalLoader /> 

            {isAuthPage ? (
                <div className="flex flex-col min-h-screen">
                    <main>{children}</main>
                </div>
            ) : (
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
            )}
        </ReduxProvider>
    );
}
