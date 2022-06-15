import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import { useEffect } from "react";
import { useState } from "react";
import { HomeStories } from "./components/homeStories";
import { Story } from "./components/Story";
import { StoriesLoading } from "./components/StoriesLoading";

export default function Home() {
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
    <div className="relative">
      {read.open && <Story read={readStory} story={read.story} />}
      <Header />

      {/* HERO SECTION */}
      <div className="bg-background">
        <div className="container py-24 flex justify-center">
          <div className="flex flex-col space-y-5 text-center w-4/5 md:w-2/4">
            <h2 className="text-[45px] font-black leading-tight">
              Dont just be a <span className="text-primary">coder</span> be a{" "}
              <span className="text-primary">coder</span> that stands out!
            </h2>
            <p className="text-lg font-medium ">
              Become a full stack developer in just 16 weeks with the assistance
              of expert instructors and mentors!!
            </p>
            <p className="font-bold">
              100% Somali Content | Qualified Instructors | Community
            </p>
            <div>
              <button className=" bg-primary text-white px-6 py-3 rounded text-sm font-bold">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION */}
      {/* ABOUT SECTION */}
      <div className="container py-5">
        <div className="flex space-x-10">
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl">
              <span className="w-min p-1 mr-1 text-2xl md:text-3xl  text-primary bg-background">
                Fikrcamp
              </span>
              teaches you the skills to launch a tech career — and the outcomes
              prove it
            </h3>
            <p className="my-4 text-sm">
              We are Somalilands very first coding bootcamp. Students go through
              a 16-week program where they are taught programming skills that
              employers look for using the latest technologies. The teaching
              method we provide is “by doing” hence basic skills such as
              teamwork, problem solving and critical thinking are all integrated
              into the learning progress.
            </p>
          </div>
          <div className="hidden md:block flex-1">
            <img src="./space.jpg" className="rounded-md" />
          </div>
        </div>
      </div>
      {/* ABOUT SECTION */}
      {/* UPCOMING PROGRAMS */}
      <div className="container py-5">
        <h2 className="text-[30px] font-black leading-tight text-center pb-5">
          Upcoming <span className="text-primary">Bootcamps</span>
        </h2>
        <div className="flex justify-center flex-wrap">
          <div className="border-2 border-background bg-white p-5 flex flex-col space-y-2 w-[430px] m-2">
            <h2 className="font-extrabold">Web development - Batch-105</h2>
            <p>
              Learn JavaScript and build a career in code with our accelerated
              Full Stack JavaScript course.
            </p>
            <p className="font-extrabold">June 24th, 2022</p>
            <div>
              <button className="border-2 border-primary text-primary px-3 py-2 text-sm">
                Learn More
              </button>
            </div>
          </div>
          <div className="border-2 border-background bg-white p-5 flex flex-col space-y-2 w-[430px] m-2">
            <h2 className="font-extrabold">Web development - Batch-106</h2>
            <p>
              Learn JavaScript and build a career in code with our accelerated
              Full Stack JavaScript course.
            </p>
            <p className="font-extrabold">June 24th, 2022</p>
            <div>
              <button className="border-2 border-primary text-primary px-3 py-2 text-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* UPCOMING PROGRAMS */}

      {/* HIRING PARTNERS */}
      <div className="container py-5">
        <h2 className="text-[30px] font-black leading-tight text-center py-5">
          Local Hiring Partners
        </h2>
        <div className="flex justify-center">
          <img src="./somtel.jpg" className="h-[100px] m-2" />
          <img src="./telesom.jpg" className="h-[100px] m-2" />
          <img src="./wayeel.jpg" className="h-[100px] m-2" />
          <img src="./somtel.jpg" className="h-[100px] m-2" />
        </div>
      </div>
      {/* HIRING PARTNERS */}
      {/* TESTIMONAL */}
      <div className="bg-sBackground ">
        <div className="container py-5 flex items-center justify-center space-x-5 md:w-4/5">
          <img
            src="./student-1.jpg"
            className="w-[280px] h-[350px] border-4 border-white rounded hidden md:block drop-shadow-lg"
          />

          <div className="">
            <h2 className="font-bold text-[25px]">
              From refugee to full stack developer in just 4 months
            </h2>
            <div className="border-l-2 border-primary pl-2">
              <p>
                <span className="font-bold text-[20px]">&quot;</span>I am a deaf
                Yemani refugee who lost his hearing and hair due to a missle
                strike that destroyed my home. I came to Hargeisa looking for a
                better opportunity and i was lucky enough to enroll at Fikrcamp
                and finish the bootcamp in Nov 2021. Two months later i found a
                job! Fikrcamp has changed my life.
                <span className="font-bold text-[20px]">&quot;</span>
              </p>
            </div>
            <b>Huessein Mohamed</b>
          </div>
        </div>
      </div>
      {/* TESTIMONAL */}
      {/* MEET OUT GRADS */}
      <div className="">
        <div className="container py-5">
          <h2 className="text-[30px] font-black leading-tight py-4">
            Meet our coding bootcamp grads
          </h2>
          <p>
            Coming from all walks of life, our graduates have something in
            common: they decided to learn to code to become autonomous and use
            their new skills to pursue their dreams.
          </p>
          {/* {stories.length > 0 && (
            <div className="flex flex-wrap py-4 ">
              {stories.map((story) => (
                <HomeStories key={story.id} data={story.fields} />
              ))}
            </div>
          )} */}
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
          </div>
          {loading === false && stories.length == 0 && (
            <div className="text-center ">
              <h1>Sorry there are no stories currently😔</h1>
            </div>
          )}
        </div>
      </div>
      {/*  MEET OUT GRADS */}
      {/* JOIN THE COMMUNITY */}
      <div className=" py-10 flex justify-center items-center bg-sBackground">
        <div className="rounded-lg p-10 flex justify-center ">
          <div className="w-3/4 text-center">
            <h2 className="text-[30px] font-black leading-tight py-4">
              Are you ready to break into{" "}
              <span className="text-primary">tech?</span>
            </h2>
            <p>
              Want to get a feel of tech before you commit? Join our slack
              community
            </p>
            <button className="border-2 border-primary text-primary px-3 py-2 text-sm">
              Join Channel!
            </button>
          </div>
        </div>
      </div>
      {/* JOIN THE COMMUNITY */}
      <Footer />
    </div>
  );
}
