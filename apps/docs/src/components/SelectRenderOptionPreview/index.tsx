"use client";

import SelectList from "@repo/ui/Select";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function UserSelectExample() {
  const users: User[] = [
    { id: 1, name: "کاربر شماره 1", email: "test1@example.com", role: "مدیر" },
    { id: 2, name: "کاربر شماره 2", email: "test2@example.com", role: "کاربر" },
    { id: 3, name: "کاربر شماره 3", email: "test3@example.com", role: "نویسنده" },
    { id: 4, name: "کاربر شماره 4", email: "test4@example.com", role: "مشتری" },
  ];

  const renderUserOption = (user: User, isSelected: boolean) => (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
          {user.name.charAt(0)}
        </div>
        <div>
          <div className="font-medium">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
        {isSelected && <div className="text-green-500 text-lg">✓</div>}
      </div>

      <div
        className={`px-2 py-1 rounded text-xs ${
          user.role === "مدیر"
            ? "bg-red-100 text-red-800"
            : user.role === "نویسنده"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
        }`}
      >
        {user.role}
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <SelectList options={users} renderOption={renderUserOption} placeholder="کاربر را انتخاب کنید..." labelField="name" />
    </div>
  );
}
