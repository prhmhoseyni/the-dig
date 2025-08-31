import IconButton from "@repo/ui/IconButton";
import { Activity } from "lucide-react";

export default function IconButtonPage() {
  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <IconButton color="brand">
          <Activity size={18} />
        </IconButton>
        <IconButton color="info">
          <Activity size={18} />
        </IconButton>
        <IconButton color="success">
          <Activity size={18} />
        </IconButton>
        <IconButton color="danger">
          <Activity size={18} />
        </IconButton>
        <IconButton color="warning">
          <Activity size={18} />
        </IconButton>
        <IconButton color="gray">
          <Activity size={18} />
        </IconButton>
      </div>

      <div className="flex items-center gap-4 p-4">
        <IconButton color="brand" variant="tinted">
          <Activity size={18} />
        </IconButton>
        <IconButton color="info" variant="tinted">
          <Activity size={18} />
        </IconButton>
        <IconButton color="success" variant="tinted">
          <Activity size={18} />
        </IconButton>
        <IconButton color="danger" variant="tinted">
          <Activity size={18} />
        </IconButton>
        <IconButton color="warning" variant="tinted">
          <Activity size={18} />
        </IconButton>
        <IconButton color="gray" variant="tinted">
          <Activity size={18} />
        </IconButton>
      </div>

      <div className="flex items-center gap-4 p-4">
        <IconButton color="brand" variant="outlined">
          <Activity size={18} />
        </IconButton>
        <IconButton color="info" variant="outlined">
          <Activity size={18} />
        </IconButton>
        <IconButton color="success" variant="outlined">
          <Activity size={18} />
        </IconButton>
        <IconButton color="danger" variant="outlined">
          <Activity size={18} />
        </IconButton>
        <IconButton color="warning" variant="outlined">
          <Activity size={18} />
        </IconButton>
        <IconButton color="gray" variant="outlined">
          <Activity size={18} />
        </IconButton>
      </div>
    </>
  );
}
