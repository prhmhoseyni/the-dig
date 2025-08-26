"use client";

import FileUploader from "@repo/ui/FileUploader";

export default function FileUploaderPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <FileUploader id="1" onChange={(event) => console.log(event.target.files)} onDropFiles={(files) => console.log(files)} />
      <FileUploader id="2" multiple onDropFiles={() => null} />
      <FileUploader id="2" hasError onDropFiles={() => null} />
      <FileUploader id="3" disabled onDropFiles={() => null} />
    </div>
  );
}
