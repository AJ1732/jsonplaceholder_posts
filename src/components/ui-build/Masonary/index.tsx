import { twMerge } from "tailwind-merge";

const Masonary = ({ className }: { className?: string }) => {
  return (
    <div className="overflow-hidden max-md:max-h-[40rem] sm:-mt-20 lg:-mt-40">
      <div
        className={twMerge(
          "mt-2 flex max-h-[48rem] justify-center overflow-hidden",
          className,
        )}
      >
        <div
          className={`columns-2 gap-5 lg:gap-9 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-9 max-lg:[&_div:first-child]:mt-32 odd:[&_div]:aspect-[9/11] even:[&_div]:aspect-[9/9] lg:even:[&_div]:aspect-[9/9] [&:nth-child(3)]:[&_div]:bg-custom`}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="w-52 bg-black p-4 lg:w-60"></div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Masonary;
