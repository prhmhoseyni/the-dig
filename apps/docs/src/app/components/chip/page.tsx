import Chip from "@repo/ui/Chip";
import { Activity } from "lucide-react";

export default function ChipPage() {
    return (
        <>

            <div className="flex items-center gap-4 p-4">
                <Chip color="brand" icon={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="info" icon={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="success" icon={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="danger" icon={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="warning" icon={<Activity size={15} />}>Chip Label</Chip>
                <Chip color="gray" icon={<Activity size={15} />}>Chip Label</Chip>
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
