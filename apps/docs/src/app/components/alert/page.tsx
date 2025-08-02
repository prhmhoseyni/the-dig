"use client";

import Alert from "@repo/ui/Alert";

export default function AlertPage() {
  return (
    <div dir="rtl" className="container mx-auto p-4 flex flex-col gap-3">
      <Alert color="info" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="success" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="danger" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="warning" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="gray" description="توضیحات مختصر درمورد پیام هشدار." />

      <Alert color="info" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." onClose={() => null} />
      <Alert color="success" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." onClose={() => null} />
      <Alert color="danger" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." onClose={() => null} />
      <Alert color="warning" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." onClose={() => null} />
      <Alert color="gray" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." onClose={() => null} />

      <Alert color="info" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="success" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="danger" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="warning" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." />
      <Alert color="gray" title="عنوان پیام" description="توضیحات مختصر درمورد پیام هشدار." />
    </div>
  );
}
