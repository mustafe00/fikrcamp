import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export function StoriesLoading({ data }) {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
        <Skeleton className="h-52" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
        <Skeleton className="h-52" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
        <Skeleton className="h-52" />
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer">
        <Skeleton className="h-52" />
      </div>
    </>
  );
}
