"use client";

import Button from "@repo/ui/Button";
import Notification from "@repo/ui/Notification";

export default function NotificationPage() {
  return (
    <div dir="rtl" className="bg-[#7e7e7e60] p-10">
      <Notification
        title="به‌روزرسانی جدید"
        description="نسخه جدید آماده نصب است. برای بهبود عملکرد به‌روزرسانی کنید."
        actions={
          <div className="flex gap-3">
            <Button color="gray" variant="outlined">
              مشاهده تغییرات
            </Button>

            <Button color="gray" variant="outlined">
              به‌روزرسانی
            </Button>
          </div>
        }
        onClose={() => null}
      />
    </div>
  );
}
