"use client";

import { useEffect } from "react";
import { ErrorPage } from "@/components";

const DataError = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);

  return (
    <div className="flex items-center justify-center">
      <ErrorPage message="Seems there's an error in loading the page." />
    </div>
  );
};
export default DataError;
