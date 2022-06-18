import { MdAccessTime, MdLanguage } from "react-icons/md";
import dateFormat from "dateformat";
import Link from "next/link";

export function Webinar({ data }) {
  return (
    <div className="bg-white p-5 rounded shadow-sm ">
      <div className="flex flex-col space-y-4">
        <div className="flex justify-between">
          <h2 className="text-[25px] font-bold leading-tight">{data.title}</h2>
          {/* <span className="border border-primary text-xs p-0 m-0 rounded">
            {dateFormat(Date.now(), "yyyy-mm-dd") > data.date
              ? "happned"
              : "hasnt"}
          </span> */}
        </div>
        <p>{data.description}</p>
        <div className="border border-lightGray rounded p-3 flex justify-between items-center">
          <div>
            <h2 className="text-[15px] font-bold leading-tight">
              {dateFormat(data.date, "ddd, mmmm d, yyyy")}
            </h2>
            <p className="flex items-center">
              <MdAccessTime className="text-primary mr-1" />
              {data.time}
            </p>
            <p className="flex items-center">
              <MdLanguage className="text-primary mr-1" />
              {data.language}
            </p>
          </div>
          {dateFormat(Date.now(), "yyyy-mm-dd") > data.date ? (
            <h2 className="text-orange font-semibold">Event Ended</h2>
          ) : (
            <a href={data.link} target="_blank" rel="noopener noreferrer">
              <button className=" bg-primary text-white px-5 py-3 rounded">
                Register
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
