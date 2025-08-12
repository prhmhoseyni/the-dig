import React, {Children, cloneElement, isValidElement, useId} from "react";
import Avatar from "../Avatar";

// Define props for AvatarGroup, including the new size prop
interface AvatarGroupProps {
  children: React.ReactNode;
  max: number;
  size?: "xs" | "sm" | "md" | "lg"; // Add the size prop here
}

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, max, size = "md" }) => {
  const uuid = useId();
  const avatars = Children.toArray(children);
  const numAvatars = avatars.length;
  const showCount = numAvatars > max;
  const visibleAvatars = showCount ? avatars.slice(0, max - 1) : avatars;
  const remainingCount = numAvatars - (max - 1);

  return (
    <div className="flex items-center -space-x-4">
      {visibleAvatars.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, { key: `avatar-group-${uuid}-${index}`, size } as Record<string, unknown>);
        }
        return child;
      })}
      {showCount && <Avatar size={size}>{`+${remainingCount}`}</Avatar>}
    </div>
  );
};

export default AvatarGroup;
