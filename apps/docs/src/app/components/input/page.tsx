import Input from "@repo/ui/Input";
import { Activity } from "lucide-react";

export default function InputPage() {
  return (
    <>
      <div className="flex flex-col gap-4 p-8">
        <Input type="text" placeholder="Enter the information..." />
        <Input type="text" hasError placeholder="Enter the information..." />
        <Input type="text" variant="secondary" placeholder="Enter the information..." />
        <Input type="text" variant="secondary" hasError placeholder="Enter the information..." />
      </div>

      <div className="flex flex-col gap-4 p-8">
        <Input type="text" placeholder="Enter the information..." startAdornment={<Activity size={15} />} />
        <Input type="text" hasError placeholder="Enter the information..." startAdornment={<Activity size={15} />} />
        <Input
          type="text"
          variant="secondary"
          placeholder="Enter the information..."
          startAdornment={<Activity size={15} />}
          endAdornment={<Activity size={15} />}
        />
        <Input
          type="text"
          variant="secondary"
          hasError
          placeholder="Enter the information..."
          startAdornment={<Activity size={15} />}
          endAdornment={<Activity size={15} />}
        />
      </div>
    </>
  );
}
