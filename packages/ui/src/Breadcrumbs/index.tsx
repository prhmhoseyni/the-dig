import clsx from "clsx";
import { Children, Fragment, type PropsWithChildren, type ReactNode } from "react";

/**
 * @name Breadcrumbs component
 */
export interface BreadcrumbsProps extends PropsWithChildren {
  separator?: ReactNode;
  className?: string;
}

export default function Breadcrumbs(props: BreadcrumbsProps) {
  const { children, separator, className = "" } = props;

  const childrenCount = Children.count(children);

  return (
    <nav className={clsx("flex items-center text-label3 gap-2", className)}>
      {Children.toArray(
        Children.map(children, (child, index) => (
          <Fragment>
            {child}
            {!(index === childrenCount - 1) && <span className="text-gray-500">{separator ?? "/"}</span>}
          </Fragment>
        )),
      )}
    </nav>
  );
}
