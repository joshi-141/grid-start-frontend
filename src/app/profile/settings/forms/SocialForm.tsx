import { Input, Button } from "@/components/ui";

export default function SocialForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Social Links</h2>

      <Input label="LinkedIn" className="mb-3" />
      <Input label="Facebook" className="mb-3" />
      <Input label="Instagram" className="mb-3" />
      <Input label="Twitter / X" className="mb-3" />

      <Button>Save Social Links</Button>
    </div>
  );
}
