"use client";

import Autocomplete from "@repo/ui/Autocomplete";
import { BadgeCheck } from "lucide-react";

async function fetchBook(query: string): Promise<[]> {
  console.log(query);
  const url = `https://openlibrary.org/search.json?q=${query}`;

  const resp = await fetch(url);
  if (!resp.ok) {
    console.error("fetch failed", resp.statusText);
    return [];
  }
  const data = await resp.json();
  return data?.docs;
}
export default function Page() {
  return (
    <Autocomplete
      fetchOptions={fetchBook}
      inputProps={{ placeholder: "جستجو ..." }}
      onChange={(book) => {
        console.log("انتخاب شد:", book);
      }}
      idField="cover_i"
      labelField="title"
      minSearchChars={3}
      startAdornment={<BadgeCheck size={18} />}
    />
  );
}
