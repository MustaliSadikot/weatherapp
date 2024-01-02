import React, { useState } from "react";
import Nav from "./Nav";
import Timecards from "./Timecards";
import Dayscards from "./Dayscards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";

function Home(props) {
  const [progress, setProgress] = useState(0);
  const [temp, updatetemp] = useState();
  const [city, setcity] = useState();
  const [view, updateview] = useState("temp");

  const handlechange = (e) => {
    setcity(e.target.value);
    // console.log(e.target.value);
  };
  const getinfo = async () => {
    if (city == null) {
      toast.error("Please Enter City Name");
      return;
    }
    console.log("hello");
    setProgress(5);
    const data1 = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=6EV3G6KSCWWV8XKWCCK34C9FB`
    );
    if (data1.status === 200) {
      const paraseData = await data1.json();
      console.log(paraseData);
      setProgress(50);
      updatetemp(paraseData);
      toast.success("Data Found");
      setProgress(100);
      updateview("temp");
    } else {
      toast.error("Invalid Input");
    }
  };

  return (
    <>
      <LoadingBar
        color={"#FFCA2C"}
        progress={progress}
        height={5}
        onLoaderFinished={() => setProgress(0)}
      /> 
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div
        className="container text-light rounded-2 py-2 my-2 mt-3"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", width: "95vw" }}
      >
        <Nav getinfo={getinfo} handlechange={handlechange}></Nav>
        {temp && (
          <>
            <div className="d-flex flex-column flex-md-row justify-content-between mt-2 px-3 rounded">
              <div>
                <h4 className="">
                  <i className="bi bi-geo-alt-fill"></i> {temp.resolvedAddress}
                </h4>
                <h5 className="">Today's Weather Forecast</h5>

                <h6 className="">
                  Last Checked : {temp.currentConditions.datetime}
                </h6>

                <h1 className="display-4">
                  <b>
                    {((temp.currentConditions.temp - 32) / 1.8)
                      .toString()
                      .slice(0, 5)}
                    <sup>°c</sup>
                  </b>
                </h1>
                <h6 className="">
                  Feels{" "}
                  {((temp.currentConditions.feelslike - 32) / 1.8)
                    .toString()
                    .slice(0, 5)}
                  <sup>°c</sup>
                </h6>
              </div>

              <div className="d-flex flex-md-row justify-content-end">
                <div className="me-3 mt-2 ">
                  <h1>
                    <img
                      src={`icons/${temp.currentConditions.icon}.png`}
                      alt=""
                    />
                  </h1>
                </div>
                <div className="me-0">
                  <h5 className="">{temp.currentConditions.conditions}</h5>
                  <h6 className="">
                    <i className="bi bi-cloud-rain"></i> Precipition :{" "}
                    {temp.currentConditions.precip
                      ? temp.currentConditions.precip
                      : "0"}
                    %
                  </h6>
                  <h6 className="">
                    <i className="bi bi-droplet-half"></i> Humidity :{" "}
                    {temp.currentConditions.humidity}%
                  </h6>
                  <h6 className="">
                    <i className="bi bi-wind"></i> Wind :{" "}
                    {temp.currentConditions.windspeed}km/h
                  </h6>
                  <h6 className="">
                    <i className="bi bi-sunrise"></i> Sunrise :{" "}
                    {temp.currentConditions.sunrise}
                  </h6>
                  <h6 className="">
                    <i className="bi bi-sunset-fill"></i> Sunset :{" "}
                    {temp.currentConditions.sunset}
                  </h6>
                </div>
              </div>
            </div>

            <div className="container rounded">
              <div className="d-flex justify-content-md-center mt-1 overflow-x-auto justify-content-start">
                <h6
                  className={`flex-shrink-0 ${
                    view === "temp" ? "border-bottom" : "border-0"
                  }  border-3 pb-1 border-bottom-light`}
                  onClick={() => {
                    updateview("temp");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-thermometer-half"></i> Temperature
                </h6>

                <h6
                  className={`flex-shrink-0 ${
                    view === "wind" ? "border-bottom" : "border-0"
                  } border-3 pb-1 border-bottom-light ms-5`}
                  onClick={() => {
                    updateview("wind");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-cloud-rain"></i> Wind
                </h6>

                <h6
                  className={`flex-shrink-0 ${
                    view === "preci" ? "border-bottom" : "border-0"
                  } border-3 pb-1 border-bottom-light ms-5`}
                  onClick={() => {
                    updateview("preci");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-cloud-rain"></i> Precipition
                </h6>

                <h6
                  className={`flex-shrink-0 ${
                    view === "humidity" ? "border-bottom" : "border-0"
                  } border-3 pb-1 border-bottom-light ms-5`}
                  onClick={() => {
                    updateview("humidity");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <i className="bi bi-droplet-half"></i> Humidity
                </h6>
              </div>

              <div className="d-flex gap-3 justify-content-xl-start overflow-x-auto mt-1 my-2 py-2 justify-content-start">
                {temp.days[0].hours.map((element) => {
                  return <Timecards data={element} view={view} />;
                })}
              </div>
            </div>

            <div className="container rounded mt-3">
              <h3 className="ms-0">Weekly Forecast :)</h3>
              <div className="d-flex gap-3 justify-content-xl-start ms-0 overflow-x-auto justify-content-start">
                {temp.days.map((element, index) => {
                  if (index > 6) {
                    return "";
                  }
                  return <Dayscards dataa={element} />;
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Home;
