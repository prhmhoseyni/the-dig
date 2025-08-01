import Chip from "@repo/ui/Chip";
import { Activity } from "lucide-react";

export default function ChipPage() {
    return (
        <>

            <div className="flex items-center gap-4 p-4">
                <Chip color="brand" startAdornment={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="info" startAdornment={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="success" startAdornment={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="danger" startAdornment={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="warning" startAdornment={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="gray" startAdornment={<Activity size={15} />}>Chip Label</Chip>
            </div>

            <div className="flex items-center gap-4 p-4">
                <Chip color="brand">
                    Chip Label
                </Chip>
                <Chip color="info">
                    Chip Label
                </Chip>
                <Chip color="success">
                    Chip Label
                </Chip>
                <Chip color="danger">
                    Chip Label
                </Chip>
                <Chip color="warning">
                    Chip Label
                </Chip>
                <Chip color="gray">
                    Chip Label
                </Chip>
            </div>
        </>
    );
}
