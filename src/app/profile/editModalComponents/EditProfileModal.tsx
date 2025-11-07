"use client";

import { Input, Label } from "@/components/ui";


interface Experience {
    title: string;
    company: string;
    years: string;
}

interface UserFormData {
    name: string;
    role: string;
    about: string;
    skills: string[];
    experience: Experience[];
}

interface EditProfileFormProps {
    formData?: UserFormData;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const EditProfileModal = ({ formData, handleInputChange }: EditProfileFormProps) => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                        <Input
                            type="text"
                            name="name"
                            label="Name"
                            value={formData?.name}
                            onChange={handleInputChange}
                        />
                </div>

                <div className="col-md-6">
                        <Input
                            type="text"
                            name="role"
                            label="Role"
                            value={formData?.role}
                            onChange={handleInputChange}
                        />
                </div>

            </div>

        </>
    )
};

export default EditProfileModal;