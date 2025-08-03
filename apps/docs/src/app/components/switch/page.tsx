import Switch from "@repo/ui/Switch";

export default function SwitchPage() {
  return (
    <div className="container mx-auto flex gap-3 p-4 justify-center">
      <Switch color="brand" />
      <Switch color="danger" />
      <Switch color="info" />
      <Switch color="gray" />
      <Switch color="success" />
      <Switch color="warning" />
      <Switch size="lg" />
      <Switch size="sm" />
      <Switch isLoading />
      <Switch disabled />
    </div>
  );
}
