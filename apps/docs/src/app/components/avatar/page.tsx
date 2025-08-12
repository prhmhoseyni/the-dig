import Avatar from "@repo/ui/Avatar";

export default function AvatarPage() {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <Avatar src="/prhm.jpg" alt="prhm" size="lg" />
      <Avatar src="/prhm.jpg" alt="prhm" size="md" />
      <Avatar src="/prhm.jpg" alt="prhm" size="sm" />
      <Avatar src="/prhm.jpg" alt="prhm" size="xs" />

      <Avatar size="lg" className="font-[var(--font-geist-mono)]">
        VB
      </Avatar>
      <Avatar size="md" className="font-[var(--font-geist-mono)]">
        VB
      </Avatar>
      <Avatar size="sm" className="font-[var(--font-geist-mono)]">
        VB
      </Avatar>
      <Avatar size="xs" className="font-[var(--font-geist-mono)]">
        VB
      </Avatar>

      <Avatar src="/prhm.jpg" alt="prhm" size="lg" status="online" />
      <Avatar src="/prhm.jpg" alt="prhm" size="md" status="online" />
      <Avatar src="/prhm.jpg" alt="prhm" size="sm" status="online" />
      <Avatar src="/prhm.jpg" alt="prhm" size="xs" status="online" />
    </div>
  );
}
