import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Record from "./Record";
import { ToastContainer, toast } from "react-toastify";

function Review(props) {
  const [user, getuser] = useState();
  const [email, getemail] = useState();
  const [review, getreview] = useState();
  const [reviewrecord, getreviewrecord] = useState([]);
  const [reload, getreload] = useState();

  const handlesubmit = async () => {
    if (user == null || email == null || review == null) {
      toast.error("Review Box Is Empty!");
      return;
    }
    const data = await fetch("http://localhost:5000/sendreview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: user,
        email: email,
        review: review,
      }),
    });

    const paraseData = await data.json();
    if (paraseData.success) {
      toast.success("Review Submitted!");
      getreload(true);
    } else {
      toast.error("Error");
      console.log(paraseData);
    }
  };

  const getreviews = async () => {
    const data = await fetch("http://localhost:5000/fetchreviews");
    const paraseData = await data.json();
    // console.log(paraseData);
    getreviewrecord(paraseData.reviews);
    console.log(getreviewrecord);
  };

  useEffect(() => {
    getreviews();
  }, [reload]);

  return (
    <>
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
        className="container py-4 my-5 rounded-2 px-4"
        style={{ backgroundColor: "rgba(0,0,0,0.5)", width: "95vw" }}
      >
        <Link type="button" className="btn btn-warning ms-2" to="/">
          <i className="bi bi-arrow-left"></i> Back
        </Link>

        <h1 className={`text-center mt-3 mb-3 text-light text-decoration-underline`}>Reviews</h1>
        <div className={`row row-cols-1 row-cols-md-3 pb-4`}>
          {reviewrecord.map((element, index) => {
            return <Record data={element} key={index} />;
          })}
        </div>
        <h1 className={`text-center mt-5 text-light text-decoration-underline`}>
          Share Your Experience
        </h1>
        <div className={`row `}>
          <div className="col-md-6">
            <div className="text-light mt-5">
              <div className={`mb-4 mt-3`}>
                <label htmlFor="nameFormControlInput1" className={`form-label`}>
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder=""
                  onChange={(e) => {
                    getuser(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                  onChange={(e) => {
                    getemail(e.target.value);
                  }}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Review :
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                  onChange={(e) => {
                    getreview(e.target.value);
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-warning float-end mb-1"
                onClick={handlesubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img
              src="review.svg"
              className="img-fluid d-block mx-auto my-3 ps-4 me-5"
              style={{ maxHeight: "400px" }}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
