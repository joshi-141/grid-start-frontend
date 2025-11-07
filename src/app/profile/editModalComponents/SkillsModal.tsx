"use client";

import React, { useState } from "react";

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

interface EditSkillsFormProps {
  formData?: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<UserFormData | null>>;
}

const availableSkills = [
  "UI/UX Design",
  "Graphic Design",
  "Product Design",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "SQL",
  "WordPress",
  "Figma",
  "Adobe XD",
];

const SkillsModal = ({ formData, setFormData }: EditSkillsFormProps) => {
  const [customSkill, setCustomSkill] = useState("");

  const handleSkillChange = (skill: string) => {
    if (!formData) return;

    const updatedSkills = formData.skills.includes(skill)
      ? formData.skills.filter((s) => s !== skill) // Uncheck (remove)
      : [...formData.skills, skill]; // Check (add)

    setFormData((prev) => (prev ? { ...prev, skills: updatedSkills } : prev));
  };

  const handleAddCustomSkill = () => {
    if (!formData || !customSkill.trim()) return;

    const newSkill = customSkill.trim();
    if (!formData.skills.includes(newSkill)) {
      setFormData((prev) =>
        prev ? { ...prev, skills: [...prev.skills, newSkill] } : prev
      );
    }
    setCustomSkill("");
  };

  return (
    <div className="flex flex-col gap-2">
      <h5 className="">Select Your Skills:</h5>

      {/* Skill checkboxes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {availableSkills.map((skill) => (
          <label key={skill} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData?.skills.includes(skill) || false}
              onChange={() => handleSkillChange(skill)}
              className="accent-green-600"
            />
            <span>{skill}</span>
          </label>
        ))}
      </div>

      {/* Add custom skill */}
      <div className="flex gap-2 my-4">
        <input
          type="text"
          placeholder="Add custom skill"
          value={customSkill}
          onChange={(e) => setCustomSkill(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 flex-1"
        />
        <button
          onClick={handleAddCustomSkill}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      {/* Selected skills preview */}
      {formData?.skills.length ? (
        <div className="">
          <h5>Selected Skills:</h5>
          <div className="flex flex-wrap gap-3 pt-2">
            {formData.skills.map((skill) => (
              <span
                key={skill}
                className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-sm mt-3">No skills selected yet.</p>
      )}
    </div>
  );
};

export default SkillsModal;
