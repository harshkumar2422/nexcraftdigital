"use client";
import React from "react";

function CTA() {
  return (
    <section className="img-scale cta_banner">
      <div className="image" data-overlay-dark="4">
        <div className="img">
          <img
            id="grow"
            src="/nex/assets/imgs/background/10.jpg"
            data-speed="0.2"
            data-lag="0"
            alt=""
          />
        </div>
        <div className="text-u text-center ontop">
          <h4 className="fz-40 fw-600">
            Ready to enhance your online presence?
          </h4>
          <a className="service-cta" style={{ textTransform: "none" }} href="#">
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
