import Select from "@repo/ui/Select";
import { Activity } from "lucide-react";

export default function SelectPage() {
  return (
    <>
      <div className="flex flex-col gap-4 p-8">
        <Select>
          <option value="value">label</option>
        </Select>

        <Select hasError>
          <option value="value">label</option>
        </Select>

        <Select variant="secondary">
          <option value="value">label</option>
        </Select>

        <Select variant="secondary" hasError>
          <option value="value">label</option>
        </Select>
      </div>

      <div className="flex flex-col gap-4 p-8">
        <Select startAdornment={<Activity size={15} />}>
          <option value="value">label</option>
        </Select>

        <Select hasError startAdornment={<Activity size={15} />}>
          <option value="value">label</option>
        </Select>

        <Select variant="secondary" startAdornment={<Activity size={15} />}>
          <option value="value">label</option>
        </Select>

        <Select
          variant="secondary"
          hasError
          startAdornment={<Activity size={15} />}
        >
          <option value="value">label</option>
        </Select>
      </div>
    </>
  );
}
