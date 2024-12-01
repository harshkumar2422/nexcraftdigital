"use client";
import Link from "next/link";
import React from "react";

function GetInTouch() {
  return (
    <section className="img-scale mb-40">
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
          <h4 className="fz-70 fw-600">
            Take Your <span className="fw-300">Business Higher</span>
          </h4>
          <Link
            className="service-cta"
            href="/contact-us"
            style={{ textTransform: "none" }}
          >
            Get Started Now!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
