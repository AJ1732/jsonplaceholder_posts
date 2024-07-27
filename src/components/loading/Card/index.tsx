import { Skeleton } from "@/components";

const CardLoading = () => {
  return (
    <section className="my-10 flex items-center justify-center">
      <div className="flex items-center justify-between gap-10 max-lg:flex-col">
        <div className="relative flex h-[22.875rem] w-96 items-center justify-center overflow-hidden rounded-lg">
          <Skeleton className="size-full" />
        </div>

        <div className="mb-auto mt-12 flex flex-col items-start justify-center gap-10">
          <Skeleton className="h-4 w-[300px]" />

          <div className="space-y-4">
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[250px]" />
          </div>
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </section>
  );
};
export default CardLoading;
