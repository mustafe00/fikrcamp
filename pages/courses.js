import Header from "./Partials/Header";
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
          <img src="./coding.jpg" className="w-full bg-white p-3 rounded" />
        </div>
      </div>
      {/* HERO SECTION */}
      {/* COURSE DETAILS */}
      <div className="py-5 bg-background">
        <div className="container">one</div>
      </div>
      {/* COURSE DETAILS */}
    </div>
  );
}

export default Courses;
