import Header from "./Partials/Header";
import Footer from "./Partials/Footer";
function Courses() {
  return (
    <div>
      <Header />
      {/* HERO SECTION */}
      <div className="container py-5 flex lg:space-x-20">
        <div className="flex flex-col space-y-3 justify-center md:w-1/2">
          <h2 className="text-[30px] font-bold leading-tight">
            Web Development Bootcamp
          </h2>
          <p className="text-xl">Full-Time (16-weeks)</p>
          <p>
            In 9 intensive weeks, learn all the skills of a Software Developer,
            code your own web applications from scratch and change your career.
          </p>
          <div>
            <button className="border-2 border-primary text-primary px-3 py-2 text-sm">
              Apply Now
            </button>
          </div>
        </div>
        <div className="hidden md:block w-1/2">
          <img src="./development.png" className="w-full p-3 rounded" />
        </div>
      </div>
      {/* HERO SECTION */}
      {/* COURSE DETAILS */}
      <div className="py-5 bg-background">
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
      </div>
      {/* COURSE DETAILS */}
      {/* COURSE XAYSIIS */}
      <div className="container bg-white py-5 ">
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
        <div className="grid md:grid-cols-3 gap-4 py-7">
          <div className="border border-lightGray rounded p-4 text-center flex flex-col justify-between">
            <div>
              <h3 className="py-3 text-xl font-semibold ">
                Fast paced learning
              </h3>
              <p className="text-sm">
                Come prepared to work hard and problem solve. You will be
                presented with coding challenges that will accelerate your
                understanding of the core concepts taught.
              </p>
            </div>
            <img src="./fast.png" alt="take off" />
          </div>
          <div className="border border-lightGray rounded p-4 text-center flex flex-col justify-between">
            <div>
              <h3 className="py-3 text-xl font-semibold">Hands-on Coding</h3>
              <p className="text-sm">
                Over 75% of your time at FikrCamp will be focused on building
                software. After all, that is why you are here, right?
              </p>
            </div>
            <img src="./build.png" alt="take off" />
          </div>
          <div className="border border-lightGray rounded p-4 text-center flex flex-col justify-between">
            <div>
              <h3 className="py-3 text-xl font-semibold ">
                Community Of Developers
              </h3>
              <p className="text-sm">
                You will have access to industry mentors from a diverse set of
                backgrounds and experiences. That means you will get both
                in-person and online support with experts, who spend their day
                jobs as developers.
              </p>
            </div>
            <img src="./community.png" alt="take off" />
          </div>
        </div>
      </div>
      {/* COURSE XAYSIIS */}
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
            <a
              href="https://buff.ly/3JM2AUW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border-2 border-primary text-primary px-3 py-2 text-sm mt-3">
                Join Channel!
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* JOIN THE COMMUNITY */}

      <Footer />
    </div>
  );
}

export default Courses;
