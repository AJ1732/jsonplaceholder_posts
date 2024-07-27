"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams, usePathname } from "next/navigation";
interface Props {
  cPage: number;
  cLimit: number;
}

export default function PaginationDemo({cPage, cLimit}: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const page = searchParams.get("page") ?? cPage;
  const limit = searchParams.get("limit") ?? cLimit;

  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${pathname}?page=${Number(page) - 1}&limit=${limit}#posts`}
          />
        </PaginationItem>

        {[1, 2, 3].map((item) => (
          <PaginationItem>
            <PaginationLink
              href={`${pathname}?page=${item}&limit=${limit}#posts`}
              isActive={Number(page) === item}
            >
              {item}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href={`${pathname}?page=${Number(page) + 1}&limit=${limit}#posts`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
