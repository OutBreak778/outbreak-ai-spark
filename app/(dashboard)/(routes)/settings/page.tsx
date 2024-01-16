import Heading from "@/components/Heading";
import { UserButton, UserProfile } from "@clerk/nextjs";
import { SettingsIcon } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage your account from here"
        icon={SettingsIcon}
        iconColor="text-white-500"
        bgColor="bg-zinc-900/10"
      />
      <div className="flex items-center justify-center p-3">
        <UserProfile />
      </div>
    </div>
  );
};

export default page;
