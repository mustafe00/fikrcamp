function Pre() {
  return (
    <div className="grid md:grid-cols-2 gap-4 py-5">
      <div>
        <div className="flex items-center">
          <img src="./design.png" />
          <h2 className="font-bold pl-1">Web design</h2>
        </div>
        <p className="py-2 text-[14px]">
          Style web pages making it very user friendly. You will covering HTML
          and CSS while learning about responsive designs using media queries.
        </p>
      </div>
      <div>
        <div className="flex items-center">
          <img src="./js.png" />
          <h2 className="font-bold pl-1">JavaScript</h2>
        </div>
        <p className="py-2 text-[14px]">
          Understand JavaScript fundamental concepts and learn all the necessary
          JS concepts.
        </p>
      </div>
    </div>
  );
}

export default Pre;
