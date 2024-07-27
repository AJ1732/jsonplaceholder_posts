import { HeroSection, PostsSection } from "@/components/sections";

interface Props {
  searchParams: { [key: string]: number | undefined };
}

export default function Home({ searchParams }: Props) {
  const { page = 1, limit = 5 } = searchParams;

  return (
    <div className="full-width content-grid size-full pt-4">
      <HeroSection />
      <PostsSection page={page} limit={limit} />
    </div>
  );
}
