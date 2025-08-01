import Checkbox from "@repo/ui/Checkbox";

export default function InputPage() {
    return (
        <>
            <input type="checkbox" />

            <div className="flex gap-4 p-8">
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox data-indeterminate />
            </div>

        </>
    )
}