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
import { useSearchParams } from "next/navigation";

export default function PaginationDemo() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "5";

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={`/?page=${Number(page) - 1}&limit=${limit}#posts`}
          />
        </PaginationItem>

        {[1, 2, 3].map((item) => (
          <PaginationItem>
            <PaginationLink
              href={`/?page=${item}&limit=${limit}#posts`}
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
            href={`/?page=${Number(page) + 1}&limit=${limit}#posts`}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
