export interface PaginationProps {
  total: number;
  page: number;
  onChange: (page: number) => void;
}


export default function Pagination({ total, page, onChange }: PaginationProps) {