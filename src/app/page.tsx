import { HeroSection, PostsSection } from "@/components/sections";

export default function Home() {
  return (
    <div className="full-width content-grid size-full pt-4">
      <HeroSection />
      <PostsSection />
    </div>
  );
}
