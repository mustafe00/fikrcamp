import { MdKeyboardArrowRight } from "react-icons/md";
import Story from "./Story";

export function HomeStories({ data, read, index }) {
  return (
    <div
      className="w-full md:w-1/2 lg:w-1/4 p-2 hover:cursor-pointer"
      onClick={() => read(index)}
    >
      <img
        src={data.studentImage.fields.file.url}
        alt={data.studentImage.fields.file.fileName}
        className="h-[200px] w-full object-cover rounded drop-shadow-lg"
      />
      {/* <img
        src={data.studentImage.fields.file.url}
        alt={data.studentImage.fields.file.fileName}
        className="h-[200px] w-full object-cover rounded drop-shadow-lg"
      /> */}
      {/* <h4 className="font-semibold pt-1 hover:text-primary hover:pointer">
        {data.studentName}
      </h4> */}
      <h4 className="font-semibold pt-1 hover:text-primary">
        {data.studentName}
      </h4>
      <h6 className="text-sm font-medium text-gray">{data.job}</h6>
      {/* <div>
        <button className="bg-secondary text-white font-bold px-2 py-1 rounded-full flex text-sm items-center float-right">
          Read
          <MdKeyboardArrowRight />
        </button>
      </div> */}
    </div>
  );
}
