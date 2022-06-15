import Header from "./Partials/Header";
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from "./Partials/Footer";
import { HomeStories } from "./components/homeStories";
import { useState, useEffect } from "react";
import { Story } from "./components/Story";
import { StoriesLoading } from "./components/StoriesLoading";
function Stories() {
  const [loading, setLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const [read, setRead] = useState({ story: {}, open: false });
  useEffect(() => {
    fetch("api/stories")
      .then((res) => res.json())
      .then((data) => {
        setStories(data.data);
        setLoading(false);
      });
  }, []);
  function readStory(index) {
    let story = index !== undefined ? stories[index].fields : {};
    setRead({ story, open: !read.open });
  }
  return (
    <div>
      <Header />
      {read.open && <Story read={readStory} story={read.story} />}
      {/* HEADER */}
      <div className="bg-white">
        <div className=" py-5 container flex space-x-10">
          <div className="hidden lg:block flex-1">
            <img src="./space.jpg" className="w-full rounded" />
          </div>
          <div className="flex-1">
            <h2 className="text-[35px] font-black leading-tight">
              Meet our <span className="text-primary">graduates</span> who've
              taken the tech world by storm
            </h2>
            <p className="py-5">
              "Change your life, learn to code": our alumni stories reflect our
              motto. See how our 15,012 graduates started their new careers in
              tech, and get inspired to find your own path.
            </p>
            <div className="grid grid-cols-2 text-center gap-4">
              <div>
                <h2 className="text-[35px] font-bold leading-tight">
                  24<span className="text-primary">+</span>
                </h2>
                <p>Graduates that have gone through the coding bootcamps</p>
              </div>
              <div>
                <h2 className="text-[35px] font-bold leading-tight">
                  63<span className="text-primary">%</span>
                </h2>
                <p>Have recieved job positions by one of our hiring partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HEADER */}
      {/* SUCCESS STORIES */}
      <div className="container">
        <h2 className="text-[30px] font-black leading-tight text-center py-5">
          Meet our <span className="text-primary">graduates</span>
        </h2>
        <div className="flex flex-wrap py-4 ">
          {stories.map((story, index) => (
            <HomeStories
              key={index}
              read={readStory}
              data={story.fields}
              index={index}
            />
          ))}

          {loading === true && <StoriesLoading />}
          {/* CARD */}
        </div>
        {loading === false && stories.length == 0 && (
          <div className="text-center ">
            <h1>Sorry there are no stories currently😔</h1>
          </div>
        )}
      </div>
      {/* SUCCESS STORIES */}
      <Footer />
    </div>
  );
}

export default Stories;
