"use client";

import AboutModal from "./editModalComponents/AboutModal";
import EditProfileModal from "./editModalComponents/EditProfileModal";
import SkillsModal from "./editModalComponents/SkillsModal";
import ExperienceModal from "./editModalComponents/ExperienceModal";

interface UserFormData {
  name: string;
  role: string;
  about: string;
  skills: string[];
  experience: any;
}

interface RenderModalContentProps {
  modalSection: string | null;
  formData?: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void; // required
}

export default function RenderModalContent({
  modalSection,
  formData,
  setFormData,
  handleInputChange,
}: RenderModalContentProps) {
  switch (modalSection) {
    case "profile":
      return (
        <EditProfileModal
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );

    case "about":
      return (
        <AboutModal
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );

    case "skills":
      return (
        <SkillsModal
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
        />
      );

    case "experience":
      return (
        <ExperienceModal
          formData={formData}
          setFormData={setFormData}
        />
      );

    default:
      return <p>Select a section to edit.</p>;
  }
}
