"use client";

import { useState } from "react";
import Pagination from "@repo/ui/Pagination";

export default function PaginationPage() {
  const [page, setPage] = useState(10);

  console.log(page);

  return (
    <div className="flex items-center gap-4 p-4">
      <Pagination total={10} page={page} onChange={(_page) => setPage(_page)} />
    </div>
  );
}
