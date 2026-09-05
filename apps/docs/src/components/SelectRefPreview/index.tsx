"use client";

import Button from "@repo/ui/Button";
import SelectList, { type SelectListRef } from "@repo/ui/Select";
import { useRef, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

function RefControlExample() {
  const userSelectRef = useRef<SelectListRef<User>>(null);
  const [_selectedUserInfo, setSelectedUserInfo] = useState<string>("");

  const users: User[] = [
    { id: 1, name: "علی محمدی", email: "ali@example.com", role: "مدیر" },
    { id: 2, name: "رضا احمدی", email: "reza@example.com", role: "کاربر" },
    { id: 3, name: "سارا کریمی", email: "sara@example.com", role: "نویسنده" },
    { id: 4, name: "مریم حسینی", email: "maryam@example.com", role: "مشتری" },
    { id: 5, name: "امیر جعفری", email: "amir@example.com", role: "مشتری" },
  ];

  // فوکوس روی SelectList
  const handleFocus = () => {
    userSelectRef.current?.focus();
  };

  // حذف انتخاب‌ها
  const handleClearSelection = () => {
    if (userSelectRef.current) {
      const currentValue = userSelectRef.current.getValue();

      if (currentValue && (Array.isArray(currentValue) ? currentValue.length > 0 : true)) {
        userSelectRef.current.clearValue();
        setSelectedUserInfo("");
      } else {
      }
    }
  };

  const showSelectedValues = () => {
    const values = userSelectRef.current?.getValue();
    console.log("Selected tags:", values);
    alert(`تگ‌های انتخاب شده: ${JSON.stringify(values, null, 2)}`);
  };

  return (
    <div className="w-full">
      <SelectList
        ref={userSelectRef}
        options={users}
        placeholder="یک کاربر انتخاب کنید..."
        labelField="name"
        onChange={(_value) => {}}
        multiple
      />

      <div className="flex gap-2 flex-wrap mr-4">
        <Button variant="contained" color="brand" onClick={handleFocus}>
          فوکوس
        </Button>

        <Button variant="contained" color="brand" onClick={handleClearSelection}>
          حذف
        </Button>
        <Button variant="contained" color="brand" onClick={showSelectedValues}>
          نمایش مقادیر
        </Button>
      </div>
    </div>
  );
}

export default RefControlExample;
