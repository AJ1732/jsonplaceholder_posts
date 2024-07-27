import { Pagination, Table } from "@/components";

const PostsSection = () => {
  return (
    <section className="full-width content-grid bg-white pb-12 pt-20">
      <div className="space-y-8">
        <h2 className="ml-4 text-4xl font-light">Posts</h2>
        <Table />
        <Pagination />
      </div>
    </section>
  );
};
export default PostsSection;
