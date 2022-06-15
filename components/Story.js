import { MdClose } from "react-icons/md";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
export function Story({ read, story, body }) {
  return (
    <div className="flex justify-center">
      <div
        className="fixed  top-0 bg-black w-full h-screen opacity-70 z-50"
        onClick={() => read()}
      ></div>
      <div className="fixed container md:w-3/4 top-0 py-10 opacity-100 z-50 ">
        <div className="bg-white rounded-md p-5 h-[90vh] mb-10 overflow-auto">
          <div className="flex justify-end">
            <button onClick={() => read()}>
              <MdClose size={32} />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="w-3/4 justify-center">
              <h2 className="font-bold text-[35px] text-center leading-10">
                {story.storyTitle}
              </h2>

              <div className="h-20 flex items-center space-x-5 justify-center my-4">
                <img
                  src={story.studentImage.fields.file.url}
                  className="h-14 w-14 object-cover rounded"
                />
                <div>
                  <h4 className="hover:text-primary ">{story.studentName}</h4>

                  <h6 className="text-sm font-medium text-gray">{story.job}</h6>
                </div>
              </div>
              <div className="py-2">
                {documentToReactComponents(story.story)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
