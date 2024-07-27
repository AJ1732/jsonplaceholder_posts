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

export default function PaginationDemo() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "5";
  
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`${pathname}?page=${Number(page) - 1}&limit=${limit}`}
          />
        </PaginationItem>

        {[1, 2, 3].map((item) => (
          <PaginationItem>
            <PaginationLink
              href={`${pathname}?page=${item}&limit=${limit}`}
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
