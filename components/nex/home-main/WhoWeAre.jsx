"use client";
import Link from "next/link";
import React from "react";

function WhoWeAre() {
  const openTab = (event) => {
    document
      .querySelectorAll(".tab-content")
      .forEach((element) => (element.style.display = "none"));
    const tabid = event.currentTarget.getAttribute("data-tab");
    document.querySelector(`.tab-content#${tabid}`).style.display = "block";
  };
  return (
    <section className="services-tab section-padding mb-80">
      <div className="container">
        <div className="row lg-marg" id="tabs">
          <div className="col-lg-6 valign">
            <div className="serv-tab-cont md-mb80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src="/nex/assets/imgs/works/3/3.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img
                        src="/nex/assets/imgs/serv-icons/01-dark.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <p>
                        Founded with a vision to empower businesses, we
                        specialize in providing innovative web and app
                        development solutions. Our team's expertise and
                        commitment to excellence drive measurable success,
                        ensuring our clients' growth in the digital landscape.
                      </p>
                    </div>
                    <Link href="/about-us" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-2">
                <div className="item">
                  <div className="img">
                    <img src="/nex/assets/imgs/works/3/2.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img
                        src="/nex/assets/imgs/serv-icons/02-dark.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <p>
                      Our mission is to transform ideas into impactful digital experiences, empowering businesses with cutting-edge technology and tailored solutions that drive growth, innovation, and long-term success in an ever-evolving digital landscape.
                      </p>
                    </div>
                    <Link href="/about-us" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-3">
                <div className="item">
                  <div className="img">
                    <img src="/nex/assets/imgs/serv-img/1.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img
                        src="/nex/assets/imgs/serv-icons/03-dark.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <p>
                      Our vision is to redefine the future of digital experiences by empowering businesses with innovative solutions that inspire growth and transformation. We strive to lead the way in shaping a connected, impactful digital world.
                      </p>
                    </div>
                    <Link href="/about-us" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="tab-content" id="tabs-4">
                <div className="item">
                  <div className="img">
                    <img src="/nex/assets/imgs/works/1/v2.jpg" alt="" />
                  </div>
                  <div className="cont sub-bg">
                    <div className="icon-img-60 mb-40">
                      <img
                        src="/nex/assets/imgs/serv-icons/04-dark.svg"
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <p>
                      Our achievements showcase our dedication to pushing boundaries and delivering exceptional results. Through innovative solutions and strategic partnerships, we've empowered businesses to reach new heights, consistently exceeding expectations and making a lasting impact in the digital landscape.
                      </p>
                    </div>
                    <Link href="/about-us" className="mt-30">
                      <span className="mr-15">Read More</span>
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="serv-tab-link tab-links full-width pt-40">
              <div className="sec-head mb-30">
                <h6 className="sub-title mb-15 main-color">Who we are?</h6>
                <h2>The ultmiate guide to marketing success.</h2>
              </div>
              <div className="row justify-content-end">
                <div className="col-lg-11">
                  <div className="text mb-50">
                    <p>
                      Driving Digital Transformation with Innovation,
                      Excellence, and Results – Empowering Your Business for
                      Success
                    </p>
                  </div>
                  <ul className="rest">
                    <li
                      onClick={openTab}
                      className="item-link current mb-15"
                      data-tab="tabs-1"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">01</span> About
                        Us
                      </h3>
                    </li>
                    <li
                      onClick={openTab}
                      className="item-link mb-15"
                      data-tab="tabs-2"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">02</span> Our
                        Mission
                      </h3>
                    </li>
                    <li
                      onClick={openTab}
                      className="item-link mb-15"
                      data-tab="tabs-3"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">03</span> Our
                        Vision
                      </h3>
                    </li>
                    <li
                      onClick={openTab}
                      className="item-link"
                      data-tab="tabs-4"
                    >
                      <h3>
                        <span className="fz-18 opacity-7 mr-15">04</span>{" "}
                        Achievements
                      </h3>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
