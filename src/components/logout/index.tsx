"use client";

import { persistor, useAppDispatch } from "@/lib/store";
import { Button } from "../ui";
import { logout } from "@/lib/features/slices/authSlice";
import { useRouter } from "next/navigation";

const Logout = () => {

    const dispatch = useAppDispatch();
    const router = useRouter();

    const handleLogOut = () => {
        dispatch(logout());
        persistor.purge();
        router.push("/login");
    }

    return (
        <Button onClick={handleLogOut}>Logout</Button>
    );
}

export default Logout;