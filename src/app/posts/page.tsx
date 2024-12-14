import { PostsSection } from "@/components/sections";

interface Props {
  searchParams: { [key: string]: number | undefined };
}

const PostsPage = async ({ searchParams }: Props) => {
  const { page = 1, limit = 10 } = searchParams;

  return <PostsSection page={page} limit={limit} />;
};
export default PostsPage;
