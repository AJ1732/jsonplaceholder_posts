import { Suspense } from "react";
import { Pagination, Table } from "@/components";

interface Props {
  page: number;
  limit: number;
}

const PostsSection = ({ page, limit }: Props) => {
  return (
    <section id="posts" className="bg-white pb-12 pt-20">
      <div className="space-y-8">
        <h2 className="text-4xl font-light">Posts</h2>

        <Suspense
          key={page}
          fallback={
            <div className="flex h-80 w-full items-center justify-center bg-red-500">
              Loading
            </div>
          }
        >
          <Table page={page} limit={limit} />
        </Suspense>
        <Pagination />
      </div>
    </section>
  );
};
export default PostsSection;
