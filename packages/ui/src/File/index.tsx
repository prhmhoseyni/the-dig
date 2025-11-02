import { File as FileIcon, Pause, Play, Trash, X } from "lucide-react";
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

export default function File(props: FileProps) {
  const isUploading = props.status === "uploading";
  const isPaused = props.status === "paused";
  const isCompleted = props.status === "completed";

  const formatBytes = (bytes: number, decimals: number = 1): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / k ** i).toFixed(dm))} ${sizes[i]}`;
  };

  const ActionButtons = () => (
    <div className="flex items-center gap-2">
      {isPaused && (
        <>
          <IconButton color="gray" variant="tinted" size="xs" onClick={props.onUpload} className="!rounded-full">
            <Play size={16} />
          </IconButton>

          <IconButton color="gray" variant="tinted" size="xs" onClick={props.onCancel} className="!rounded-full">
            <X size={16} />
          </IconButton>
        </>
      )}

      {isUploading && (
        <>
          <IconButton color="gray" variant="tinted" size="xs" onClick={props.onPause} className="!rounded-full">
            <Pause size={16} />
          </IconButton>

          <IconButton color="gray" variant="tinted" size="xs" onClick={props.onCancel} className="!rounded-full">
            <X size={16} />
          </IconButton>
        </>
      )}

      {isCompleted && (
        <IconButton color="gray" variant="tinted" size="xs" onClick={props.onRemove} className="!rounded-full">
          <Trash size={16} />
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
            width: `${props.percent}%`,
            backgroundImage:
              "linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)",
            backgroundSize: "1rem 1rem",
          }}
        />
      )}

      <div className="relative w-full min-h-10 flex items-center gap-4">
        <FileIcon size={18} />

        <div className="flex-1 text-prose-primary text-label2 truncate">{props.file.name}</div>

        <div dir="ltr" className="text-prose-hint text-label3 whitespace-nowrap">
          {formatBytes(props.file.size)}
        </div>

        <ActionButtons />
      </div>
    </div>
  );
}
