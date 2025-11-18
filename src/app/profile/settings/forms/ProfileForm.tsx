import { Button, Input } from "@/components/ui";
import Image from "next/image";

const ProfileForm = () => {
  return (
    <div>
      <div className="relateve flex gap-4 items-center mb-4">
        <Image
          src="/images/user.png"
          width={80}
          height={80}
          alt="user image"
          className="rounded-full bg-gray-500"
        />
        <Button>Change Photo</Button>
      </div>

      <Input label="Full Name" name="name" className="mb-4" />
      <Input label="Role / Profession" name="role" className="mb-4" />
      <Input label="About Me" name="about" className="mb-4" />

      <Button className="mt-3">Save Changes</Button>
    </div>
  );
}

export default ProfileForm;