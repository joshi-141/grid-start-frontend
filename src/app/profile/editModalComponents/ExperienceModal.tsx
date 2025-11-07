"use client";

import { Input } from "@/components/ui";
import React from "react";

interface Experience {
    title: string;
    company: string;
    startMonth: string;
    startYear: string;
    isCurrent: boolean;
    endMonth?: string;
    endYear?: string;
}

interface UserFormData {
    name: string;
    role: string;
    about: string;
    skills: string[];
    experience: Experience[];
}

interface ExperienceModalProps {
    formData?: UserFormData;
    setFormData: React.Dispatch<React.SetStateAction<UserFormData | null>>;
}

const ExperienceModal = ({ formData, setFormData }: ExperienceModalProps) => {
    if (!formData) return <p>No experience data available.</p>;

    const handleChange = (
        index: number,
        field: keyof Experience,
        value: string | boolean
    ) => {
        const updatedExperiences = [...formData.experience];
        (updatedExperiences[index] as any)[field] = value;
        setFormData((prev) =>
            prev ? { ...prev, experience: updatedExperiences } : prev
        );
    };

    const handleDateChange = (
        index: number,
        fieldPrefix: "start" | "end",
        value: string
    ) => {
        const [year, monthNum] = value.split("-");
        const monthName = new Date(value + "-01").toLocaleString("default", {
            month: "long",
        });

        const updatedExperiences = [...formData.experience];
        updatedExperiences[index][`${fieldPrefix}Month`] = monthName;
        updatedExperiences[index][`${fieldPrefix}Year`] = year;

        setFormData((prev) =>
            prev ? { ...prev, experience: updatedExperiences } : prev
        );
    };

    const handleAddExperience = () => {
        const newExp: Experience = {
            title: "",
            company: "",
            startMonth: "",
            startYear: "",
            isCurrent: false,
            endMonth: "",
            endYear: "",
        };
        setFormData((prev) =>
            prev ? { ...prev, experience: [...prev.experience, newExp] } : prev
        );
    };

    const handleRemoveExperience = (index: number) => {
        const updatedExperiences = formData.experience.filter((_, i) => i !== index);
        setFormData((prev) =>
            prev ? { ...prev, experience: updatedExperiences } : prev
        );
    };

    return (
        <div className="flex flex-col gap-4">
            {formData.experience.map((exp, i) => (
                <div key={i} className="border border-gray-300 rounded-lg p-4 relative bg-gray-50" >
                    <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-800">Experience {i + 1}</h4>
                        <button onClick={() => handleRemoveExperience(i)} className="text-red-500 hover:text-red-700 text-sm font-medium">
                            Remove ✕
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-3 mt-3">
                        <div className="w-full flex flex-col gap-4">
                            {/* Title */}
                            <Input
                                type="text"
                                value={exp.title}
                                label="Title"
                                onChange={(e) => handleChange(i, "title", e.target.value)}
                                placeholder="e.g. Frontend Developer"
                            />

                            {/* Company */}
                            <Input
                                type="text"
                                value={exp.company}
                                label="Company"
                                onChange={(e) => handleChange(i, "company", e.target.value)}
                                placeholder="e.g. Netforth Software Solutions"
                            />
                        </div>

                        {/* Currently Working */}
                        <Input
                            type="checkbox"
                            label="Currently working here"
                            checked={exp.isCurrent}
                            onChange={(e) => handleChange(i, "isCurrent", e.target.checked)}
                            className="flex gap-2 my-3"
                        />


                        <div className="w-full flex flex-wrap gap-4">

                            {/* start Working */}
                            <Input
                                type="month"
                                label="Start From"
                                onChange={(e) =>
                                    handleDateChange(i, "start", e.target.value)
                                }
                                value={
                                    exp.startYear && exp.startMonth
                                        ? `${exp.startYear}-${String(
                                            new Date(`${exp.startMonth} 1, ${exp.startYear}`).getMonth() + 1
                                        ).padStart(2, "0")}`
                                        : ""
                                }
                            />


                            {/* End date of Working */}
                            {!exp.isCurrent && (
                                <Input
                                    type="month"
                                    label="End At"
                                    onChange={(e) =>
                                        handleDateChange(i, "end", e.target.value)
                                    }
                                    value={
                                        exp.endYear && exp.endMonth
                                            ? `${exp.endYear}-${String(
                                                new Date(`${exp.endMonth} 1, ${exp.endYear}`).getMonth() + 1
                                            ).padStart(2, "0")}`
                                            : ""
                                    }
                                />
                            )}

                        </div>

                    </div>
                </div>
            ))}

            <button
                onClick={handleAddExperience}
                className="self-start mt-2 bg-[#19a4631a] text-[#19a463]
                 px-4 py-2 rounded hover:bg-[#19a463] hover:text-white"
            >
                + Add Experience
            </button>
        </div>
    );
};

export default ExperienceModal;
