import AvatarGroup from "@repo/ui/AvatarGroup";
import Avatar from "@repo/ui/Avatar";

export default function AvatarGroupPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/prhm.jpg" />
        <Avatar alt="Travis Howard" src="/prhm.jpg" />
        <Avatar alt="Cindy Baker" src="/prhm.jpg" />
        <Avatar alt="Agnes Walker" src="/prhm.jpg" />
        <Avatar alt="Trevor Henderson" src="/prhm.jpg" />
      </AvatarGroup>

        <AvatarGroup max={3} size="lg">
            <Avatar alt="Remy Sharp" src="/prhm.jpg" />
            <Avatar alt="Travis Howard" src="/prhm.jpg" />
            <Avatar alt="Cindy Baker" src="/prhm.jpg" />
            <Avatar alt="Agnes Walker" src="/prhm.jpg" />
            <Avatar alt="Trevor Henderson" src="/prhm.jpg" />
        </AvatarGroup>
    </div>
  );
}
