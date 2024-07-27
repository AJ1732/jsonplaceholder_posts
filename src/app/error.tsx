"use client";

import { useEffect } from "react";

const DataError = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error(`${error}`);
  }, [error]);
  
  return <div>Error in fetching data</div>;
};
export default DataError;
