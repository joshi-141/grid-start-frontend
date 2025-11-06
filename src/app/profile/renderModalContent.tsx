"use client";

interface RenderModalContentProps {
  modalSection: string | null;
  formData: UserFormData;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface UserFormData {
  name: string;
  role: string;
  about: string;
  skills: string[];
  experience: any;
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
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-semibold">Name</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border rounded p-2"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-semibold">Role</span>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="border rounded p-2"
            />
          </label>
        </div>
      );

    case "about":
      return (
        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="font-semibold">About</span>
            <textarea
              name="about"
              value={formData.about}
              onChange={handleInputChange}
              className="border rounded p-2 min-h-[100px]"
            />
          </label>
        </div>
      );

    case "skills":
      return (
        <div className="flex flex-col gap-4">
          <span className="font-semibold">Skills (comma separated)</span>
          <input
            type="text"
            name="skills"
            value={formData.skills.join(", ")}
            onChange={(e) =>
              setFormData((prev:any) => ({
                ...prev,
                skills: e.target.value.split(",").map((s) => s.trim()),
              }))
            }
            className="border rounded p-2"
          />
        </div>
      );

    case "experience":
      return (
        <div className="flex flex-col gap-4">
          {formData.experience.map((exp: any, i: number) => (
            <div key={i} className="border p-3 rounded">
              <label className="flex flex-col mb-2">
                <span className="font-semibold">Title</span>
                <input
                  type="text"
                  value={exp.title}
                  onChange={(e) => {
                    const updated = [...formData.experience];
                    updated[i].title = e.target.value;
                    setFormData((prev:any) => ({ ...prev, experience: updated }));
                  }}
                  className="border rounded p-2"
                />
              </label>

              <label className="flex flex-col mb-2">
                <span className="font-semibold">Company</span>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => {
                    const updated = [...formData.experience];
                    updated[i].company = e.target.value;
                    setFormData((prev:any) => ({ ...prev, experience: updated }));
                  }}
                  className="border rounded p-2"
                />
              </label>

              <label className="flex flex-col">
                <span className="font-semibold">Years</span>
                <input
                  type="text"
                  value={exp.years}
                  onChange={(e) => {
                    const updated = [...formData.experience];
                    updated[i].years = e.target.value;
                    setFormData((prev:any) => ({ ...prev, experience: updated }));
                  }}
                  className="border rounded p-2"
                />
              </label>
            </div>
          ))}
        </div>
      );

    default:
      return <p>Select a section to edit.</p>;
  }
}
