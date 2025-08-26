import { X, Pause, Play, File as FileIcon } from "lucide-react";
import IconButton from "../IconButton";

export type UploadStatus = "uploading" | "paused" | "completed" | "cancelled";

export interface FileProps {
  file: File;
  status: UploadStatus;
  percent: number;
  onUpload: () => void;
  onCancel: () => void;
  onPause: () => void;
  onRemove?: () => void;
}

export default function File({ file, status, percent, onUpload, onCancel, onPause, onRemove }: FileProps) {
  const isUploading = status === "uploading";
  const isPaused = status === "paused";
  const isCompleted = status === "completed";

  const formatBytes = (bytes: number, decimals: number = 1): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const ActionButtons = () => (
    <div className="flex items-center gap-2">
      {isPaused && (
        <IconButton color="gray" variant="tinted" size="xs" onClick={onUpload} className="!rounded-full">
          <Play size={16} />
        </IconButton>
      )}

      {isUploading && (
        <IconButton color="gray" variant="tinted" size="xs" onClick={onPause} className="!rounded-full">
          <Pause size={16} />
        </IconButton>
      )}

      {status !== "completed" && (
        <IconButton color="gray" variant="tinted" size="xs" onClick={onCancel} className="!rounded-full">
          <X size={16} />
        </IconButton>
      )}

      {isCompleted && (
        <IconButton color="gray" variant="tinted" size="xs" onClick={onRemove} className="!rounded-full">
          <X size={16} />
        </IconButton>
      )}
    </div>
  );

  return (
    <div className="relative w-full bg-background-secondary border border-gray-400 rounded-lg px-3 py-1">
      {!isCompleted && (
        <div
          className="absolute top-0 right-0 h-full bg-blue-200 transition-all duration-300 ease-linear rounded-lg"
          style={{
            width: `${percent}%`,
            backgroundImage:
              "linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)",
            backgroundSize: "1rem 1rem",
          }}
        />
      )}

      <div className="relative w-full min-h-10 flex items-center gap-4">
        <FileIcon size={18} />

        <div className="flex-1 text-prose-primary text-label2 truncate">{file.name}</div>

        <div dir="ltr" className="text-prose-hint text-label3 whitespace-nowrap">
          {formatBytes(file.size)}
        </div>

        <ActionButtons />
      </div>
    </div>
  );
}
