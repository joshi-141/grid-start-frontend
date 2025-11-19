import { Button, Input } from "@/components/ui";

export default function AccountForm() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Account Settings</h2>

      <form action="">
        <div  className="flex flex-col gap-3">
        <Input label="Username" name="username" />
        <Input label="Email Address" name="email" />
        </div>
        <Button className="custom-btn mt-3" style={{height:"45px", fontWeight:"500"}}>Update Account</Button>
      </form>

    </div>
  );
}