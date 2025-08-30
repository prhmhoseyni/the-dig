import Checkbox from "@repo/ui/Checkbox";

export default function InputPage() {
  return (
    <div className="flex gap-4 p-8">
      <Checkbox disabled />
      <Checkbox />
      <Checkbox />
      <Checkbox data-indeterminate />
    </div>
  );
}
