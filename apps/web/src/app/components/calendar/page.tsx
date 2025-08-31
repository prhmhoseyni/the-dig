"use client";

import Calendar from "@repo/ui/Calendar";

export default function CalendarPage() {
  return (
    <div className="h-dvh flex items-center justify-center gap-4 p-4">
      <Calendar mode="range" />
    </div>
  );
}
