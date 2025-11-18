import { Input, Button } from "@/components/ui";
import { authApi } from "@/lib/api/authApi";
import React, { useState } from "react";
import { toast } from "react-toastify";

interface FieldType {
    new_password1: string;
    new_password2: string;
}

const initialFormData: FieldType = {
    new_password1: "",
    new_password2: "",
};


export default function PasswordForm() {
    const [formData, setFormData] = useState<FieldType>(initialFormData);

    const handleChange = (e: any) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("formData", formData);
        try {
            const res = await authApi.changePassword(formData);
            console.log("res", res);
            toast.success("Password updated!");
        } catch {
            toast.error("Failed to change password");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-semibold mb-4">Change Password</h2>
            {/* 
            <Input
                label="Old Password"
                name="old_password"
                type="password"
                onChange={handleChange}
                className="mb-3"
            /> */}
            <Input
                label="New Password"
                name="new_password1"
                type="password"
                onChange={handleChange}
                className="mb-3"
            />
            <Input
                label="Confirm New Password"
                name="new_password2"
                type="password"
                onChange={handleChange}
                className="mb-3"
            />

            <Button>Update Password</Button>
        </form>
    );
}
