"use client";

import { useState } from "react";
import AccountForm from "./forms/AccountForm";
import SocialForm from "./forms/SocialForm";
import SkillsForm from "./forms/SkillsForm";
import ExperienceForm from "./forms/ExperienceForm";
import PasswordForm from "./forms/PasswordForm";
import ProfileForm from "./forms/ProfileForm";

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-6xl mx-auto mt-10 flex gap-8">

      {/* LEFT SIDEBAR */}
      <aside className="w-64 h-fit">
        <h2 className="mb-4">Settings</h2>

        <ul className="space-y-3 font-medium p-0">
          {[
            { key: "profile", label: "My Profile" },
            { key: "account", label: "Account Settings" },
            { key: "password", label: "Change Password" },
            { key: "social", label: "Social Links" },
            { key: "experience", label: "Experience" },
            { key: "skills", label: "Skills" },
          ].map(item => (
            <li
              key={item.key}
              onClick={() => setActiveTab(item.key)}
              className={`cursor-pointer p-2 rounded ${activeTab === item.key ? "bg-green-100 text-green-700" : "hover:bg-gray-100"
                }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </aside>

      {/* RIGHT SECTION */}
      <section className="w-full">
        <h2 className="text-xl font-semibold mb-4 capitalize">{activeTab}</h2>
        <div className="border p-4 rounded">
          {activeTab === "profile" && <ProfileForm />}
          {activeTab === "account" && <AccountForm />}
          {activeTab === "password" && <PasswordForm />}
          {activeTab === "social" && <SocialForm />}
          {activeTab === "experience" && <ExperienceForm />}
          {activeTab === "skills" && <SkillsForm />}
        </div>
      </section>
    </div>
  );
}
