"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/Footer";
import AuthGuard from "@/components/authguard";

import { ReduxProvider } from "@/lib/store/provider";

export default function AppWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const authRoutes = ["/login", "/registration", "/forgot-password", "/reset-password", "/change-password"];
    const isAuthPage = authRoutes.includes(pathname);

    if (isAuthPage) {
        return (
            <ReduxProvider >
                <div className="flex flex-col min-h-screen">
                    <main>{children}</main>
                </div>
            </ReduxProvider>
        );
    }

    return (
        <>
            <ReduxProvider >
                <AuthGuard>
                    <div className="flex flex-col min-h-screen">
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </div>
                </AuthGuard>
            </ReduxProvider>
        </>
    );
}
