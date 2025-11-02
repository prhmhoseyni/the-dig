"use client";

import Pagination from "@repo/ui/Pagination";
import { useState } from "react";

export default function PaginationPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="flex items-center gap-4 p-4">
      <Pagination total={10} page={page} onChange={(_page) => setPage(_page)} />
    </div>
  );
}
