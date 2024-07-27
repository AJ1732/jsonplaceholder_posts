import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Skeleton } from "@/components";
import { useArrayGen } from "@/hooks";

const TableLoading = ({ rowLimit }: { rowLimit: number }) => {
  const rows = useArrayGen(rowLimit);

  return (
    <Table>
      <TableCaption>
        A list of <span className="italic">JSON placeholder</span> posts.
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">S/N</TableHead>
          <TableHead className="w-[100px]">User Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {rows.map((item) => (
          <TableRow key={item} className="cursor-pointer">
            <TableCell className="font-medium">
              <Skeleton className="h-4 w-[50px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-4 w-[50px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-4 w-[150px]" />
            </TableCell>

            <TableCell>
              <Skeleton className="h-4 w-[150px]" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default TableLoading;
