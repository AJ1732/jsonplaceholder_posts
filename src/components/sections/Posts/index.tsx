import { Suspense } from "react";
import { Pagination, Table, TableLoading } from "@/components";

interface Props {
  page: number;
  limit: number;
}

const PostsSection = ({ page, limit }: Props) => {
  return (
    <section id="posts" className="w-full bg-white pb-12 pt-10">
      <div className="space-y-8">
        <h2 className="text-4xl font-light">Posts</h2>

        <Suspense key={page} fallback={<TableLoading rowLimit={limit} />}>
          <Table page={page} limit={limit} />
        </Suspense>

        <Pagination cPage={page} cLimit={limit} />
      </div>
    </section>
  );
};
export default PostsSection;
