import type { Metadata } from "next";
import { BackIcon } from "@/components/svgs";

export const metadata: Metadata = {
  title: {
    absolute: "Posts | JSONplaceholder",
    template: "%s | JSONplaceholder",
  },
};

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mt-8">
      <BackIcon />
      <div>{children}</div>
    </div>
  );
}
