import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";
import { getPosts } from "@/func/getData";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

interface Props {
  page: number;
  limit: number;
}

export default async function TableDemo({ page, limit }: Props) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const posts: Post[] = await getPosts(Number(page), Number(limit));

  return (
    <Table>
      <TableCaption>
        A list of <span className="italic">JSON placeholder</span> posts.
      </TableCaption>
      <TableHeader>
        <TableRow className="uppercase">
          <TableHead className="w-[100px]">S/N</TableHead>
          <TableHead className="w-[100px]">User Id</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Body</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {posts.map(({ id, userId, title, body }) => (
          <Link key={id} href={`/posts/${id}`} legacyBehavior={true} scroll>
            <TableRow key={id} className="cursor-pointer hover:bg-[#ffeace]/50">
              <TableCell className="font-medium">{id}</TableCell>
              <TableCell>{userId}</TableCell>
              <TableCell>
                <span className="line-clamp-1">{title}</span>
              </TableCell>
              <TableCell>
                <span className="line-clamp-1">{body}</span>
              </TableCell>
            </TableRow>
          </Link>
        ))}
      </TableBody>
    </Table>
  );
}
