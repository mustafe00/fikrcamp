import Header from "./Partials/Header";
import { useState, useEffect } from "react";
import { Webinar } from "../components/Webinar";
import PageHead from "./Partials/PageHead";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
export default function Webinars() {
  const [loading, setLoading] = useState(true);
  const [webinars, setWebinars] = useState([]);
  useEffect(() => {
    // console.log("hi");
    fetch("api/webinars")
      .then((res) => res.json())
      .then((data) => {
        setWebinars(data.data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <PageHead title={"FikrCamp - Webinars"} />
      <Header />
      {/* HEADER */}
      <div className="bg-gradient-to-b from-background py-10">
        <div className=" py-5 container text-center">
          <h2 className="text-[35px] font-black leading-tight">
            Join our free <span className="text-primary">webinars</span>
          </h2>
          <p>Learn and get insights from experts with us!</p>
        </div>
      </div>
      {/* HEADER */}
      {/* WEBINARS */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <>
            {webinars.map((data, index) => (
              <Webinar key={index} data={data.fields} />
            ))}
          </>
          {loading === true && (
            <>
              <div className="bg-white p-5 rounded shadow-sm ">
                <Skeleton count={7} />
              </div>
              <div className="bg-white p-5 rounded shadow-sm ">
                <Skeleton count={7} />
              </div>
            </>
          )}
        </div>
      </div>
      {/* WEBINARS */}
      {loading === false && webinars.length == 0 && (
        <div className="text-center ">
          <h1>Sorry there are no webinars happening soon😔</h1>
        </div>
      )}
    </div>
  );
}
