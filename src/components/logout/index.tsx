"use client";

import { persistor, useAppDispatch } from "@/lib/store";
import { Button } from "../ui";
import { logout } from "@/lib/features/slices/authSlice";
import { useRouter } from "next/navigation";


const Logout = ({ className, icon }: any) => {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogOut = () => {
        dispatch(logout());
        persistor.purge();
        document.cookie = "token=; Path=/; Max-Age=0; SameSite=Lax; Secure";
        router.push("/login");
    }

    return (
        <Button onClick={handleLogOut} className={`${className}`}>{icon} Logout</Button>
    );
}

export default Logout;