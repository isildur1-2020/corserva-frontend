import { memo } from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl">Oops!</h1>
        <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
        <p className="text-3xl">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default memo(ErrorPage);
