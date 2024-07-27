"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const BackIcon = () => {
  const router = useRouter();

  return (
    <div>
      <ChevronLeft onClick={() => router.back()} className="lg:size-10 -ml-3" />
    </div>
  );
};
export default BackIcon;
