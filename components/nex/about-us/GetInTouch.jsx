"use client";
import Link from "next/link";
import React from "react";

function GetInTouch() {
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
          <h2 className="fz-70 fw-600 headline" >Discover Our Journey</h2>
          <Link
            className="service-cta"
            href="/contact-us"
            style={{ textTransform: "none" }}
          >
            Get to Know Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
