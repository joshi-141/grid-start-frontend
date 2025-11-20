"use client";

import { Input } from "@/components/ui";

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
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const EditProfileModal = ({ formData, handleInputChange }: EditProfileFormProps) => {
  return (
    <div className="row">
      
      {/* Name Field */}
      <div className="col-md-6 mb-3">
        <Input
          type="text"
          name="name"
          label="Name"
          value={formData?.name || ""}
          onChange={handleInputChange}
        />
      </div>

      {/* Role Field */}
      <div className="col-md-6 mb-3">
        <Input
          type="text"
          name="role"
          label="Role"
          value={formData?.role || ""}
          onChange={handleInputChange}
        />
      </div>

    </div>
  );
};

export default EditProfileModal;
