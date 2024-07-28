import { twMerge } from "tailwind-merge";
import "./loader.css";

const PageLoader = ({
  divClassName,
  parentClassName,
}: {
  divClassName?: string;
  parentClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-primary-50 | grid h-[calc(100dvh-10rem)] w-full place-content-center",
        parentClassName,
      )}
    >
      <div className="loader">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className={twMerge(
              `animate-bead m-2 inline-block size-8 scale-0 rounded-full`,
              divClassName,
            )}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default PageLoader;
