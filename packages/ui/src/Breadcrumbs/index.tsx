import {
  Children,
  Fragment,
  type PropsWithChildren,
  type ReactNode,
} from "react";

/**
 * @name Breadcrumbs component
 */
export interface BreadcrumbsProps extends PropsWithChildren {
  separator?: ReactNode;
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const { children, separator } = props;

  const childrenCount = Children.count(children);

  return (
    <nav className="flex items-center text-label3 gap-2">
      {Children.map(children, (child, index) => (
        <Fragment key={index}>
          {child}
          {!(index === childrenCount - 1) && (
            <span className="text-gray-500">{separator ?? "/"}</span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
