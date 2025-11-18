import { Input, Button } from "@/components/ui";

export default function SkillsForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Skills</h2>

      <Input label="Add New Skill" className="mb-3" />
      <Button>Add Skill</Button>

      {/* Show existing skills */}
      <div className="flex gap-2 flex-wrap mt-4">
        <span className="px-3 py-1 bg-green-100 rounded">UI/UX</span>
        <span className="px-3 py-1 bg-green-100 rounded">React</span>
      </div>
    </div>
  );
}
