import { Pagination, Table } from "@/components";

interface Props {
  page: number;
  limit: number;
}

const PostsSection = ({ page, limit }: Props) => {
  return (
    <section className=" bg-white pb-12 pt-20">
      <div className="space-y-8">
        <h2 className="text-4xl font-light">Posts</h2>
        <Table page={page} limit={limit} />
        <Pagination />
      </div>
    </section>
  );
};
export default PostsSection;
