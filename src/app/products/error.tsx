"use client";

import { useEffect } from "react";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="">
      <p>Something went wrong</p>
      <p>{error?.message}</p>
      <div className="text-center">
        <button onClick={() => reset()} className="bg-red-600 hover:bg-red-700">
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
