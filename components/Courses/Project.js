function Project() {
  return (
    <div className="grid md:grid-cols-2 gap-4 py-5">
      <div>
        <div className="flex items-center">
          <img src="./rocket.png" />
          <h2 className="font-bold pl-1">Final Project</h2>
        </div>
        <p className="py-2 text-[14px]">
          Final task before graduating is to come up with a final project
          incorporating all the concepts you have learn the past 16 weeks!
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <img src="./growth.png" />
          <h2 className="font-bold pl-1">Soft Skills</h2>
        </div>
        <p className="py-2 text-[14px]">
          You will be taught be industry experts in communications and how to
          effectively work in a team environment. You will also be help in
          building you portfolio to attract hiring managers.
        </p>
      </div>
    </div>
  );
}

export default Project;
