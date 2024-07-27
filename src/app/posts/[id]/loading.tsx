import { Skeleton } from "@/components";

const LoadingSinglePosts = () => {
  return (
    <section className="my-10 flex items-center justify-center">
      <div className="flex items-center justify-between gap-10 max-lg:flex-col">
        <div className="relative flex h-[22.875rem] w-96 items-center justify-center overflow-hidden rounded-lg">
          <Skeleton className="size-full" />
        </div>

        <div>
          <Skeleton className="h-4 w-[250px]" />
        </div>
      </div>
    </section>
  );
};
export default LoadingSinglePosts;
