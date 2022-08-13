function Bootcamp() {
  return (
    <div className="grid md:grid-cols-2 gap-4 py-5">
      <div>
        <div className="flex items-center">
          <img src="./react.png" />
          <h2 className="font-bold pl-1">React Js</h2>
        </div>
        <p className="py-2 text-[14px]">
          Design reponsive user friendly applications with React JS we will be
          covering all the basics and best practises.
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <img src="./node.png" />
          <h2 className="font-bold pl-1">Node Js</h2>
        </div>
        <p className="py-2 text-[14px]">
          Back-End development. You will be learning how to create your very
          first RESTful api using Express Js.
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <img src="./db.png" />
          <h2 className="font-bold pl-1">Database - NoSQL</h2>
        </div>
        <p className="py-2 text-[14px]">
          Learn about storing data using NoSQL databases (MongoDB). We will be
          covering relations between different models.
        </p>
      </div>
    </div>
  );
}

export default Bootcamp;
