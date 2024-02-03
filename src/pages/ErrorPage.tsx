import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div className="flex w-full h-scree justify-center items-center">
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occurred."}
      </div>
    </>
  );
};
export default ErrorPage;
