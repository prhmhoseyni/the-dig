import Textarea from "@repo/ui/Textarea";
import { Activity } from "lucide-react";

export default function TextareaPage() {
    return (
        <>
            <div className="flex flex-col gap-4 p-8">
                <Textarea placeholder="Enter the information..." />
                <Textarea hasError placeholder="Enter the information..." />
                <Textarea variant="secondary" placeholder="Enter the information..." />
                <Textarea variant="secondary" hasError placeholder="Enter the information..." />
            </div>


            <div className="flex flex-col gap-4 p-8">
                <Textarea placeholder="Enter the information..." startAdornment={<Activity size={15} />} />
                <Textarea hasError placeholder="Enter the information..." startAdornment={<Activity size={15} />} />
                <Textarea variant="secondary" placeholder="Enter the information..." startAdornment={<Activity size={15} />} />
                <Textarea variant="secondary" hasError placeholder="Enter the information..." startAdornment={<Activity size={15} />} />
            </div>
        </>
    )
}