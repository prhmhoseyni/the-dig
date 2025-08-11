import CircularProgress from "@repo/ui/CircularProgress";

export default function CircularProgressPage() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-8">
      <div className="flex flex-col items-center gap-4">
        <CircularProgress size="lg" />
        <CircularProgress size="md" />
        <CircularProgress size="sm" />
        <CircularProgress size="xs" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <CircularProgress size="lg" color="info" />
        <CircularProgress size="md" color="info" />
        <CircularProgress size="sm" color="info" />
        <CircularProgress size="xs" color="info" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <CircularProgress size="lg" color="success" />
        <CircularProgress size="md" color="success" />
        <CircularProgress size="sm" color="success" />
        <CircularProgress size="xs" color="success" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <CircularProgress size="lg" color="warning" />
        <CircularProgress size="md" color="warning" />
        <CircularProgress size="sm" color="warning" />
        <CircularProgress size="xs" color="warning" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <CircularProgress size="lg" color="danger" />
        <CircularProgress size="md" color="danger" />
        <CircularProgress size="sm" color="danger" />
        <CircularProgress size="xs" color="danger" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <CircularProgress size="lg" color="gray" />
        <CircularProgress size="md" color="gray" />
        <CircularProgress size="sm" color="gray" />
        <CircularProgress size="xs" color="gray" />
      </div>
    </div>
  );
}
