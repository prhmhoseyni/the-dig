"use client";

import { cloneElement, isValidElement, ReactElement } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

/**
 * :::: types ::::
 */
export type TooltipPlace =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end";

/**
 * @name Tooltip component
 */
export interface TooltipProps {
  id: string;
  content: string;
  place?: TooltipPlace;
  children: ReactElement;
}

export default function Tooltip(props: TooltipProps) {
  const { children, id, content, place = "top" } = props;

  if (!isValidElement(children)) {
    return children;
  }

  const newProps = {
    ...(children.props ?? {}),
    "data-tooltip-id": id,
    "data-tooltip-content": content,
    "data-tooltip-place": place,
  };

  const childWithProps = cloneElement(children, newProps as Record<string, unknown>);

  return (
    <>
      {childWithProps}

      <ReactTooltip
        id={id}
        style={{ direction: "rtl" }}
        className="!bg-gray-700 !rounded-lg !text-prose-inverse !text-subtitle5 !shadow-2xl"
      />
    </>
  );
}
