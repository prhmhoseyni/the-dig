"use client";

import Autocomplete from "@repo/ui/Autocomplete";
import { BadgeCheck } from "lucide-react";

interface Place {
  place_id: string;
  name: string;
  formatted: string;
  lat: number;
  lon: number;
}

async function fetchBook(query: string): Promise<Place[]> {
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
      onSelect={(book) => {
        console.log("انتخاب شد:", book);
      }}
      idField="cover_i"
      labelField="title"
      minSearchChars={3}
      startAdornment={<BadgeCheck size={18} />}
    />
  );
}
