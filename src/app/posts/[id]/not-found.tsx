import { ErrorPage } from "@/components";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <ErrorPage message="the page" />
    </div>
  );
};
export default NotFound;
