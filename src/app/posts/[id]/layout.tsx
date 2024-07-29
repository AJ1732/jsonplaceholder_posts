import type { Metadata } from "next";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  params: {
    id: number;
  };
};

// GENERATE METADATA
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return {
    title:  `Post ${params.id}`,
  };
};

export default function UserDetailsLayout({ children }: Props) {
  return (
    <>
      {children}
    </>
  );
}
