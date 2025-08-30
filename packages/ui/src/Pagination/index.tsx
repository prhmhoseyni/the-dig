import { type ButtonHTMLAttributes, type DetailedHTMLProps } from "react";
import clsx from "clsx";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { toPersianDigits } from "msk-utils";

interface PaginationButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  active?: boolean;
}

function PaginationButton(props: PaginationButtonProps) {
  const { children, ...rest } = props;
  return (
    <button
      className={clsx(
        "w-8 h-8 inline-flex items-center justify-center rounded text-label2 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed",
        props.active ? "text-prose-brand bg-brand-light" : "text-prose-primary hover:bg-gray-200",
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface PaginationProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  return (
    <div className="w-fit flex items-center gap-px border border-gray-300 rounded-lg p-px">
      <PaginationButton onClick={() => props.onChange(1)} disabled={props.page === 1}>
        <ChevronsRight size={16} />
      </PaginationButton>

      <PaginationButton onClick={() => props.onChange(props.page - 1)} disabled={props.page === 1}>
        <ChevronRight size={16} />
      </PaginationButton>

      <PaginationButton onClick={() => props.onChange(1)} active={props.page === 1}>
        {toPersianDigits(1)}
      </PaginationButton>

      {![1, 2, 3].includes(props.page) && <PaginationButton> ... </PaginationButton>}

      {![1, 2].includes(props.page) && (
        <PaginationButton onClick={() => props.onChange(props.page - 1)}>{toPersianDigits(props.page - 1)}</PaginationButton>
      )}

      {![1, props.total].includes(props.page) && <PaginationButton active>{toPersianDigits(props.page)}</PaginationButton>}

      {![props.total, props.total - 1].includes(props.page) && (
        <PaginationButton onClick={() => props.onChange(props.page + 1)}>{toPersianDigits(props.page + 1)}</PaginationButton>
      )}

      {![props.total, props.total - 1, props.total - 2].includes(props.page) && <PaginationButton> ... </PaginationButton>}

      <PaginationButton onClick={() => props.onChange(1)} active={props.page === props.total}>
        {toPersianDigits(props.total)}
      </PaginationButton>

      <PaginationButton onClick={() => props.onChange(props.page + 1)} disabled={props.page === props.total}>
        <ChevronLeft size={16} />
      </PaginationButton>

      <PaginationButton onClick={() => props.onChange(props.total)} disabled={props.page === props.total}>
        <ChevronsLeft size={16} />
      </PaginationButton>
    </div>
  );
}
