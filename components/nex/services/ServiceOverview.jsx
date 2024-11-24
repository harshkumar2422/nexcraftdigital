import React from "react";
import data from "@/l-data/services.json";
import Link from "next/link";

function ServiceOverview() {
  return (
    <section className="services section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="bord pt-25 bord-thin-top d-flex align-items-center">
            <h2 className="fw-600  ls1">
              Your Growth
              <span className="fw-200 " style={{ marginLeft: "10px" }}>
                {" "}
                Catalysts
              </span>
            </h2>
          </div>
        </div>
        <div className="row">
          {data.map((item, i) => (
            <div key={i} className="col-md-6">
              <div className="item-box2 mb-30">
                <div className="icon mb-40">
                  <img src={item.img} alt="" />
                </div>
                <h5 className="mb-15">{item.title}</h5>
                <p>{item.desc}</p>
                <Link href={item.link} className="rmore">
                  <div className="arrow">
                    <img
                      src="/nex/assets/imgs/arrow-right.png"
                      alt=""
                      className="icon-img-20"
                    />
                  </div>
                  <div className="shap-left-top">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1a1a1a"
                      ></path>
                    </svg>
                  </div>
                  <div className="shap-right-bottom">
                    <svg
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-11 h-11"
                    >
                      <path
                        d="M11 1.54972e-06L0 0L2.38419e-07 11C1.65973e-07 4.92487 4.92487 1.62217e-06 11 1.54972e-06Z"
                        fill="#1a1a1a"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceOverview;
