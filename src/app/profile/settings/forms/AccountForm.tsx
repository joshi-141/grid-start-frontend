import { Button, Input } from "@/components/ui";

export default function AccountForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

      <Input label="Username" name="username" className="mb-4" />
      <Input label="Email Address" name="email" className="mb-4" />

      <Button>Update Account</Button>
    </div>
  );
}