import { Input, Button } from "@/components/ui";

export default function ExperienceForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Experience</h2>

      <Input label="Job Title" className="mb-3" />
      <Input label="Company Name" className="mb-3" />
      <Input label="Start Year" className="mb-3" />
      <Input label="End Year" className="mb-3" />
      <Input label="Description" className="mb-3" />

      <Button>Add Experience</Button>
    </div>
  );
}
