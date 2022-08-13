function Introductory() {
  return (
    <div className="grid md:grid-cols-2 gap-4 py-5">
      <div>
        <div className="flex items-center">
          <img src="./git.png" />
          <h2 className="font-bold pl-1">Git</h2>
        </div>
        <p className="py-2 text-[14px]">
          Get a feel of what tools developers use on a day to day basis. You
          will learn about terminal commands and most importantly git. Learn how
          to commit and push your code to github.
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <img src="./intro.png" />
          <h2 className="font-bold pl-1">Intro to web development</h2>
        </div>
        <p className="py-2 text-[14px]">
          Cover the very basics of web development.Learn about topics such as
          HTTP requests what APIs are and how they work, and the general
          workflow of web applications.
        </p>
      </div>
    </div>
  );
}

export default Introductory;
