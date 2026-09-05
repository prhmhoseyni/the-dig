"use client";

import Autocomplete from "@repo/ui/Autocomplete";
import Button from "@repo/ui/Button";
import { useRef } from "react";

export default function MultipleSelection() {
  const tagsRef = useRef<any>(null);

  const handleFocus = () => {
    tagsRef.current?.focus();
  };

  const _handleBlur = () => {
    tagsRef.current?.blur();
  };

  const handleClearAll = () => {
    tagsRef.current?.clear();
  };

  const showSelectedValues = () => {
    const values = tagsRef.current?.getSelectedValue();
    console.log("Selected tags:", values);
    alert(`تگ‌های انتخاب شده: ${JSON.stringify(values, null, 2)}`);
  };

  return (
    <div className="w-full">
      <Autocomplete
        ref={tagsRef}
        name="tags"
        multiple
        options={[
          { id: "react", label: "React" },
          { id: "vue", label: "Vue" },
          { id: "angular", label: "Angular" },
          { id: "svelte", label: "Svelte" },
          { id: "nextjs", label: "Next.js" },
          { id: "nuxt", label: "Nuxt" },
        ]}
        onChange={(tags) => {
          console.log("Tags changed:", tags);
        }}
      />

      <div className="flex gap-2 flex-wrap mr-4">
        <Button variant="contained" color="brand" onClick={handleFocus}>
          فوکوس
        </Button>

        <Button variant="contained" color="brand" onClick={handleClearAll}>
          پاک کردن همه
        </Button>
        <Button variant="contained" color="brand" onClick={showSelectedValues}>
          نمایش مقادیر
        </Button>
      </div>
    </div>
  );
}
