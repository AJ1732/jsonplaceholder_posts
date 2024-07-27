import { PostsSection } from "@/components/sections";

interface Props {
  searchParams: { [key: string]: number | undefined };
}

const PostsPage = ({ searchParams }: Props) => {
  const { page = 1, limit = 10 } = searchParams;

  return (
    <div>
      <PostsSection page={page} limit={limit} />
    </div>
  );
};
export default PostsPage;
