import Chip from "@repo/ui/Chip";
import { Activity } from "lucide-react";

export default function ChipPage() {
  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <Chip color="brand" startAdornment={<Activity size={15} />}>
          متن نمونه
        </Chip>
        <Chip color="info" startAdornment={<Activity size={15} />}>
          متن نمونه
        </Chip>
        <Chip color="success" startAdornment={<Activity size={15} />}>
          متن نمونه
        </Chip>
        <Chip color="danger" startAdornment={<Activity size={15} />}>
          متن نمونه
        </Chip>
        <Chip color="warning" startAdornment={<Activity size={15} />}>
          متن نمونه
        </Chip>
        <Chip color="gray" startAdornment={<Activity size={15} />}>
          متن نمونه
        </Chip>
      </div>

      <div className="flex items-center gap-4 p-4">
        <Chip color="brand">متن نمونه</Chip>
        <Chip color="info">متن نمونه</Chip>
        <Chip color="success">متن نمونه</Chip>
        <Chip color="danger">متن نمونه</Chip>
        <Chip color="warning">متن نمونه</Chip>
        <Chip color="gray">متن نمونه</Chip>
      </div>
    </>
  );
}
