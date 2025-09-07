import RadioGroup from "@repo/ui/RadioGroup";

export default function InputPage() {
  return (
    <div className="flex gap-4 p-8">
      <RadioGroup name="name" value="1" />
      <RadioGroup name="name" value="2" />
      <RadioGroup name="name" value="3" />
    </div>
  );
}
