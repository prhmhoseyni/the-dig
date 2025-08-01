import Badge from "@repo/ui/Badge";

export default function BadgePage() {
  return (
    <>
      <div className="flex items-center gap-4 p-4">
        <Badge color="brand">Badge Label</Badge>
        <Badge color="info">Badge Label</Badge>
        <Badge color="success">Badge Label</Badge>
        <Badge color="danger">Badge Label</Badge>
        <Badge color="warning">Badge Label</Badge>
        <Badge color="gray">Badge Label</Badge>
      </div>

      <div className="flex items-center gap-4 p-4">
        <Badge color="brand" variant="tinted">
          Badge Label
        </Badge>
        <Badge color="info" variant="tinted">
          Badge Label
        </Badge>
        <Badge color="success" variant="tinted">
          Badge Label
        </Badge>
        <Badge color="danger" variant="tinted">
          Badge Label
        </Badge>
        <Badge color="warning" variant="tinted">
          Badge Label
        </Badge>
        <Badge color="gray" variant="tinted">
          Badge Label
        </Badge>
      </div>
    </>
  );
}
