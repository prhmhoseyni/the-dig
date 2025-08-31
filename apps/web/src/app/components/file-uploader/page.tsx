"use client";

import File from "@repo/ui/File";
import FileUploader from "@repo/ui/FileUploader";
import { useState } from "react";

export default function FileUploaderPage() {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <FileUploader
        id="1"
        onChange={(event) => {
          if (event.target.files) setFiles(Array.from(event.target.files));
        }}
        onDropFiles={(files) => setFiles(Array.from(files))}
      />
      <FileUploader id="2" multiple onDropFiles={() => null} />
      <FileUploader id="2" hasError onDropFiles={() => null} />
      <FileUploader id="3" disabled onDropFiles={() => null} />

      <h2 className="text-lg font-medium mb-2">Uploaded Files:</h2>
      {files.length === 0 && <p>No files uploaded yet.</p>}
      <ul className="list-disc list-inside max-w-sm">
        {files.map((file, index) => (
          <File
            key={index}
            file={file}
            status="uploading"
            percent={50}
            onUpload={() => null}
            onCancel={() => null}
            onPause={() => null}
          />
        ))}
      </ul>
    </div>
  );
}
