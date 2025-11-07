"user client"

import TextArea from "@/components/ui/form/Textarea";

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

interface EditAboutFormProps {
  formData?: UserFormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}


const AboutModal = ({ formData, handleInputChange }: EditAboutFormProps) => {
    return (
        <div className="flex flex-col gap-4">
                <TextArea
                    name="about"
                    value={formData?.about}
                    label="About"
                    onChange={handleInputChange}
                    className="border rounded p-2 min-h-[100px]"
                />
        </div>
    );
}

export default AboutModal;