"use client";

import Button from "@repo/ui/Button";
import Notification from "@repo/ui/Notification";
import { toast, Toaster } from "sonner";

export default function NotificationPage() {
  return (
    <div className="flex items-center gap-4 p-4">
      <div>
        <Toaster closeButton />

        <button
          onClick={() =>
            toast(
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
              />,
            )
          }
        >
          Give me a toast
        </button>
      </div>
    </div>
  );
}
