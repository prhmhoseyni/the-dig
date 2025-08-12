import LinearProgress from "@repo/ui/LinearProgress";

export default function LinearProgressPage() {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-8">
      <LinearProgress value={10} />
      <LinearProgress value={20} />
      <LinearProgress value={30} color="success" />
      <LinearProgress value={40} color="success" />
      <LinearProgress value={50} color="warning" />
      <LinearProgress value={60} color="warning" />
      <LinearProgress value={70} color="danger" />
      <LinearProgress value={80} color="danger" />
      <LinearProgress value={90} />
      <LinearProgress value={100} />
    </div>
  );
}
