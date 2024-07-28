"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const BackIcon = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="flex items-center justify-start cursor-pointer"
    >
      <ChevronLeft className="-ml-3 lg:size-8" /> Back
    </div>
  );
};
export default BackIcon;
