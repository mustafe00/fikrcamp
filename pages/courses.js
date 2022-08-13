import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
import PageHead from "./Partials/PageHead";
import { useState } from "react";
import Introductory from "../components/Courses/Introductory";
import Pre from "../components/Courses/Pre";
import Bootcamp from "../components/Courses/Bootcamp";
import Project from "../components/Courses/Project";
function Courses() {
  const [page, setPage] = useState(1);

  return (
    <div>
      <PageHead title={"FikrCamp - Web development bootcamp"} />
      <Header />
      {/* HERO SECTION */}
      <div className="container py-5 flex lg:space-x-20">
        <div className="flex flex-col space-y-3 justify-center md:w-1/2">
          <h2 className="text-[30px] font-bold leading-tight">
            Online Web Development Bootcamp
          </h2>
          <p className="text-xl">Full-Time and Self-paced (16-weeks)</p>
          <p>
            In 16 intensive weeks, this carefully curated curriculum teaches you
            the software development skills with the highest demand in the job
            market. Go from a beginner, learn the skills and get a job working
            as a software engineer.
          </p>
          <div className="space-x-2">
            <a
              href="https://forms.gle/mk7TpqWa8yiXPtzj9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-primary text-primary px-3 py-2 text-sm">
                Apply Now
              </button>
            </a>
            <a href="/info.pdf" target="_blank" rel="noreferrer">
              <button className="border-2 border-primary bg-primary text-white px-3 py-2 text-sm">
                Curriculum
              </button>
            </a>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <img src="./students.jpg" className="w-full p-3 rounded" />
        </div>
      </div>
      {/* HERO SECTION */}
      {/* COURSE DETAILS */}
      <div className="py-5 bg-background">
        <div className="container">
          <h2 className="text-[30px] font-bold leading-tight  text-center">
            What will you <span className="text-primary">learn</span> in 16
            weeks you ask?
          </h2>
          <p className="md:w-3/4 py-5 text-sm m-auto text-center">
            Your hard work and commitment will transform you into a Full-stack
            Web Developer. Build from scratch with JavaScript, NOSQL, HTML and
            CSS. Accelerate your projects with ReactJS and Express. You will be
            shocked at how much you can learn - employers will be too.
          </p>
          <div className="flex justify-center py-3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div
                className={page == 1 ? "course-nav-active" : "course-nav "}
                onClick={() => setPage(1)}
              >
                <h3 className="text-[14px] text-center">Introductory</h3>
                <h5 className="text-gray text-[12px] text-center font-normal">
                  (1 week)
                </h5>
              </div>
              <div
                className={page == 2 ? "course-nav-active" : "course-nav "}
                onClick={() => setPage(2)}
              >
                <h3 className="text-[14px] text-center">Pre Bootcamp</h3>
                <h5 className="text-gray text-[12px] text-center font-normal">
                  (6 week)
                </h5>
              </div>
              <div
                className={page == 3 ? "course-nav-active" : "course-nav "}
                onClick={() => setPage(3)}
              >
                <h3 className="text-[14px] text-center">Bootcamp</h3>
                <h5 className="text-gray text-[12px] text-center font-normal">
                  (9 week)
                </h5>
              </div>
              <div
                className={page == 4 ? "course-nav-active" : "course-nav "}
                onClick={() => setPage(4)}
              >
                <h3 className="text-[14px] text-center">Final Project</h3>
                <h5 className="text-gray text-[12px] text-center font-normal">
                  (4 week)
                </h5>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="md:w-4/6">
              {page === 1 && <Introductory />}
              {page === 2 && <Pre />}
              {page === 3 && <Bootcamp />}
              {page === 4 && <Project />}
            </div>
          </div>
        </div>
      </div>
      {/* COURSE DETAILS */}
      {/* COURSE DETAILS */}
      {/* <div className="py-5 bg-background">
        <div className="container flex justify-center">
          <div className="md:w-2/3 text-center flex flex-col items-center space-y-4 ">
            <h2 className="text-[30px] font-bold leading-tight">
              What will you <span className="text-primary">learn</span> in 16
              weeks you ask?
            </h2>
            <p>
              Your hard work and commitment will transform you into a Full-stack
              Web Developer. Build from scratch with JavaScript, NOSQL, HTML and
              CSS. Accelerate your projects with ReactJS and Express. You will
              be shocked at how much you can learn - employers will be too.
            </p>
            <div className="md:w-2/3 text-left flex flex-col space-y-3">
              <div className="bg-white p-5 rounded">
                <b>Week 1:</b> Intro to this web devlopment & Git
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 2:</b> HTML & CSS
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 3 & 4:</b> JS Fundementals Part I
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 5 & 6:</b> JS Fundementals Part II & DOM Manipulation
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 7:</b> Intro To APIs
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 8 & 9:</b> React JS
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 10 & 11:</b> Express JS & RESTful APIs
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 12:</b> Intro to NoSQL & Data Modeling
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 13 - 15:</b> Project
              </div>
              <div className="bg-white p-5 rounded">
                <b>Week 16:</b> Deployment! 🎉
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* COURSE DETAILS */}

      {/* COURSE XAYSIIS */}
      <div className=" bg-white">
        <div className="container py-5 ">
          <div className="flex justify-center">
            <div className="text-center md:w-3/5">
              <h2 className="text-[30px] font-bold leading-tight pb-3">
                Exceptionally designed. Focused on your{" "}
                <span className="text-primary">success.</span>
              </h2>
              <p>
                We are engineers and educators. We know the skills that make a
                solid programmer and how to teach them to you.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-7">
            <div>
              <div className="flex items-center">
                <img src="./slack.png" />
                <h2 className="font-bold pl-1">Community</h2>
              </div>
              <p className="py-2 text-[14px]">
                Be accountable with community. Showcase your progress and plans
                on the Slack workspace and celebrate or keep others accountable
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src="./live.png" />
                <h2 className="font-bold pl-1">Live instructor</h2>
              </div>
              <p className="py-2 text-[14px]">
                Live instructor led sessions. Join weekly startup calls to plan
                what your weekly learning goals, interact with the instructor
                and get help
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src="./rocket.png" />
                <h2 className="font-bold pl-1">Career Support</h2>
              </div>
              <p className="py-2 text-[14px]">
                The curriculum is injected with much experienced based learning
                and soft skills to aid your swift entry to the job market
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src="./build.png" />
                <h2 className="font-bold pl-1">Project Based Learning</h2>
              </div>
              <p className="py-2 text-[14px]">
                Mentors and Project Based Learning. Get support from our
                high-end experienced mentors and build simple projects to make
                the most of what you have learned
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src="./class.png" />
                <h2 className="font-bold pl-1">Curriculum</h2>
              </div>
              <p className="py-2 text-[14px]">
                Carefully curated curriculum. it covers the all you the software
                development skills with the highest demand in the job market
              </p>
            </div>
            <div>
              <div className="flex items-center">
                <img src="./code.png" />
                <h2 className="font-bold pl-1">Interactive</h2>
              </div>
              <p className="py-2 text-[14px]">
                Interactive platform for learning. Watch coding videos and pair
                program with the teacher in our interactive screencast
                recordings
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* COURSE XAYSIIS */}
      {/* TESTIMONAL */}
      <div className="bg-sBackground">
        <div className="container flex justify-center">
          <div className="md:w-3/6 text-center py-5">
            <div className="flex justify-center py-2">
              <img
                src="./sara.jpg"
                className="w-[70px] h-[70px] rounded-full "
              />
            </div>
            <p className="leading-6">
              <span className="font-bold text-[20px] text-primary">&quot;</span>
              Fikrcamp bootcamp has helped me alot and gave me a fresh
              prespective on things. The encouragement and belief that was put
              in me really propelled me forward.
              <span className="font-bold text-[20px] text-primary">&quot;</span>
            </p>
            <div className="flex justify-center items-center mt-3">
              <div className="">
                <h2 className="font-bold">Sara Issa - Fikrcamp Alumni</h2>
                <h2 className="font-bold text-gray text-[13px]">
                  Software Developer @Sifaalo
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONAL */}
      {/* MENTORS */}
      <div className=" bg-white">
        <div className="container py-5 ">
          <h2 className="text-[30px] font-bold leading-tight pb-3">
            Our <span className="text-primary">Mentors.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {/* AHMED FUAD */}
            <div className="flex space-x-3">
              <div className=" h-[200px] w-[180px]">
                <div className="bg-[url('../public/ahmed.jpg')]  bg-no-repeat bg-cover h-[200px] w-[180px]"></div>
              </div>
              <div className="py-4 relative ">
                <div>
                  <h3 className="font-semibold">Ahmed Mire</h3>
                  <p className="text-[14px] pt-2">
                    Ahmed is an experienced software engineer based in London.
                    He currently works for Splyt and is a co-founder of his own
                    startup hyperfeedback.
                  </p>
                </div>
                <div className="flex items-center absolute  bottom-3">
                  <img src="./linkedin.png" className="h-[24px]" />
                  <a
                    href="https://www.linkedin.com/in/ahmedmire/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-[13px] hover:font-semibold hover:text-primary hover:cursor-pointer">
                      More about Ahmed
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* AHMED FUAD */}
            {/* KHALID SUBAAN */}
            <div className="flex space-x-3">
              <div className=" h-[200px] w-[180px]">
                <div className="bg-[url('../public/khalid.jpeg')]  bg-no-repeat bg-cover h-[200px] w-[180px]"></div>
              </div>
              <div className="py-4 relative ">
                <div>
                  <h3 className="font-semibold">Khalid Suubaan</h3>
                  <p className="text-[14px] pt-2">
                    Khaalid is a software engineer specialized in devops. He
                    currenly works at a tech company based in Germany.
                  </p>
                </div>
                <div className="flex items-center absolute  bottom-3">
                  <img src="./linkedin.png" className="h-[24px]" />
                  <a
                    href="https://www.linkedin.com/in/khaalid-subaan/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-[13px] hover:font-semibold hover:text-primary hover:cursor-pointer">
                      More about Khalid
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* KHALID SUUBAAN */}
            {/* MUKHTAAR */}
            <div className="flex space-x-3">
              <div className=" h-[200px] w-[180px]">
                <div className="bg-[url('../public/mukhtaar.jpg')] bg-center bg-no-repeat bg-cover h-[200px] w-[180px]"></div>
              </div>
              <div className="py-4 relative ">
                <div>
                  <h3 className="font-semibold">Mukhtaar Mahamed</h3>
                  <p className="text-[14px] pt-2">
                    Mukhtaar is an experienced software engineer with over 10
                    years in the field. He is also the founder of bigil hub and
                    bigil technologies based in Hargeisa
                  </p>
                </div>
                <div className="flex items-center absolute  bottom-3">
                  <img src="./linkedin.png" className="h-[24px]" />
                  <a
                    href="https://www.linkedin.com/in/janogale/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-[13px] hover:font-semibold hover:text-primary hover:cursor-pointer">
                      More about Mukhtaar
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* MUKHTAAR */}
            {/* ROBLE */}
            <div className="flex space-x-3">
              <div className=" h-[200px] w-[180px]">
                <div className="bg-[url('../public/roble.jpg')] bg-center bg-no-repeat bg-cover h-[200px] w-[180px]"></div>
              </div>
              <div className="py-4 relative ">
                <div>
                  <h3 className="font-semibold">Abdulladif Roble</h3>
                  <p className="text-[14px] pt-2">
                    Abdulladif is a software developer based in Hargeisa. He is
                    a co-founder and lead instructor at fikrcamp.
                  </p>
                </div>
                <div className="flex items-center absolute  bottom-3">
                  <img src="./linkedin.png" className="h-[24px]" />

                  <a
                    href="  https://www.linkedin.com/in/abdulladif-roble-892681118/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="text-[13px] hover:font-semibold hover:text-primary hover:cursor-pointer">
                      More about Roble
                    </span>
                  </a>
                </div>
              </div>
            </div>
            {/* ROBLE */}
          </div>
        </div>
      </div>
      {/* MENTORS */}
      {/* JOIN THE COMMUNITY */}
      <div className=" py-10 flex justify-center items-center bg-sBackground">
        <div className="rounded-lg p-10 flex justify-center ">
          <div className="w-3/4 text-center">
            <h2 className="text-[30px] font-black leading-tight py-4">
              Application for the cohort is{" "}
              <span className="text-primary">underway!</span>
            </h2>
            <div className="space-x-2">
              <a
                href="https://forms.gle/mk7TpqWa8yiXPtzj9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="border-2 border-primary text-primary px-3 py-2 text-sm">
                  Apply Now
                </button>
              </a>
              <a href="/info.pdf" target="_blank" rel="noreferrer">
                <button className="border-2 border-primary bg-primary text-white px-3 py-2 text-sm">
                  Curriculum
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* JOIN THE COMMUNITY */}
      {/* TESTIMONAL */}
      <div className="bg-white">
        <div className="container flex justify-center">
          <div className="md:w-3/6 text-center py-5">
            <div className="flex justify-center py-2">
              <img
                src="./hussein.png"
                className="w-[70px] h-[70px] rounded-full "
              />
            </div>
            <p className="leading-6">
              <span className="font-bold text-[20px] text-primary">&quot;</span>
              The Fikrcamps environment was really different, I like the sense
              of flexibility and the ability to engage with other people.
              Fikrcamp, on the other hand, did not place a high value on
              attendance or exercise delivery, but instead placed the entire
              burden of responsibility on the student, which was a big shift in
              mindset for me
              <span className="font-bold text-[20px] text-primary">&quot;</span>
            </p>
            <div className="flex justify-center items-center mt-3">
              <div className="">
                <h2 className="font-bold">Hussein Mohamed - Fikrcamp Alumni</h2>
                <h2 className="font-bold text-gray text-[13px]">
                  Software Developer @Ministry of Finance
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TESTIMONAL */}
      {/* CALL TO ACTION */}
      <div className="bg-sBackground flex justify-center py-5">
        <a
          href="https://forms.gle/mk7TpqWa8yiXPtzj9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="border-2 border-primary bg-primary text-white px-3 py-2 text-sm">
            Join today! - Limited space left
          </button>
        </a>
      </div>
      {/* CALL TO ACTION */}
      <Footer />
    </div>
  );
}

export default Courses;
