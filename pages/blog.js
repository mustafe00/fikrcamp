import Header from "./Partials/Header";
function Blog() {
  return (
    <div>
      <Header />
      <div className="bg-primary">
        <div className="container py-10 ">
          <h2 className="text-[30px] font-black leading-tight">Blog posts</h2>
          <p>
            Here we go this is the section where you get inspired and learn
            about new stuff
          </p>
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="container">
        <div className="flex space-x-3">
          <button className="bg-background p-3 rounded-full text-sm font-semibold border-primary">
            Stories
          </button>
          <button>Blog</button>
          <button>Tips</button>
        </div>
      </div>
      {/* BLOG SECTION */}
    </div>
  );
}

export default Blog;
