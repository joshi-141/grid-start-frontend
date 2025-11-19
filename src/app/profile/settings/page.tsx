"use client";

import { useState } from "react";
import AccountForm from "./forms/AccountForm";
import PasswordForm from "./forms/PasswordForm";

export default function ProfileSettingsPage() {
  const [activeTab, setActiveTab] = useState("account");

  const tabs = [
    { key: "account", label: "Account Settings" },
    { key: "password", label: "Change Password" },
  ];

  return (
    <div className="about-us-banner py-20">
    <div className="container">
      <div className="mx-auto flex gap-10 px-4">
        {/* Sidebar */}
        <aside className="w-60">
          <h2 className="text-lg font-semibold mb-4">Settings</h2>

          <ul className="space-y-4 p-0">
            {tabs.map((item) => (
              <li
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                className={`cursor-pointer px-3 py-2 rounded-md
                ${activeTab === item.key
                    ? "bg-[#19a463] text-white"
                    : "bg-gray-200"
                  }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </aside>

        {/* Content Area */}
        <section className="flex-1">
          <div className="bg-white shadow-sm border rounded-md p-4">
            {activeTab === "account" && <AccountForm />}
            {activeTab === "password" && <PasswordForm />}
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
