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
      <div className="flex min-h-[calc(100dvh-10rem)] w-full flex-col items-start justify-center">
        {children}
      </div>
    </div>
  );
}
