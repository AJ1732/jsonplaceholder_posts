import { PostsSection } from "@/components/sections";

interface Props {
  searchParams: { [key: string]: number | undefined };
}

const PostsPage = async ({ searchParams }: Props) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const { page = 1, limit = 10 } = searchParams;

  return (
    <div>
      <PostsSection page={page} limit={limit} />
    </div>
  );
};
export default PostsPage;
