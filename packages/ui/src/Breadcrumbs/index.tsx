import { Children, type PropsWithChildren, type ReactNode } from "react";

interface Props extends PropsWithChildren {
  separator?: ReactNode;
}

export default function Breadcrumbs(props: Props) {
  const childrenCount = Children.count(props.children);

  return (
    <nav className="flex items-center text-label3 gap-2">
      {Children.map(props.children, (child, index) => {
        const isLast = index === childrenCount - 1;

        return (
          <>
            {child}
            {!isLast && <span className="text-gray-500">{props.separator ?? "/"}</span>}
          </>
        );
      })}
    </nav>
  );
}
