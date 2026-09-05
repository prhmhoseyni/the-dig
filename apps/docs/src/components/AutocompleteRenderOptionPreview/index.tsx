"use client";

import Autocomplete from "@repo/ui/Autocomplete";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar?: string;
}

export default function UserAutocomplete() {
  const users: User[] = [
    { id: 1, name: "علیرضا محمدی", email: "ali@example.com", role: "مدیر" },
    { id: 2, name: "فاطمه کریمی", email: "fatemeh@example.com", role: "کاربر" },
    { id: 3, name: "محمد حسینی", email: "mohammad@example.com", role: "نویسنده" },
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
    <Autocomplete
      options={users}
      renderOption={renderUserOption}
      labelField="name"
      idField="id"
      onChange={(user) => console.log("Selected user:", user)}
    />
  );
}
