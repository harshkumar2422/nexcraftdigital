"use client";
import loadBackgroudImages from "@/common/loadBackgroudImages";
import React, { useEffect } from "react";

function Intro() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);
  return (
    <>
      <section className="page-intro-cerv section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  rest">
              <div className="row justify-content-end rest">
                <div className="col-md-4 rest">
                  <div className="cont">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">1.</h2>
                    </div>
                    <h4>Our Mission</h4>
                    <div className="text mt-30">
                      <p>
                      Our mission is to transform ideas into impactful digital experiences, empowering businesses with cutting-edge technology and tailored solutions that drive growth, innovation, and long-term success in an ever-evolving digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 rest bord-thin-right ">
                  <div className="img fit-img bord-thin-left">
                    <img src="/nex/assets/imgs/works/3/3.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 rest">
                  <div className="cont">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">3.</h2>
                    </div>
                    <h4>Why Us?</h4>
                    <div className="text mt-30">
                      <p>
                      Because we don’t just build solutions; we craft digital experiences that resonate. With a passion for innovation and a focus on your goals, we transform challenges into opportunities, driving lasting success and growth for your business
                      </p>
                    </div>

                  </div>
                </div>
              </div>

              <div className="row justify-content-end bord-thin-top rest">
                <div className="col-md-4 rest">
                  <div className="img fit-img">
                    <img src="/nex/assets/imgs/serv-img/1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-md-4 rest">
                  <div className="cont bord-thin-left bord-thin-right ">
                    <div className="mb-40">
                      <h2 className="fz-100 numb-font">2.</h2>
                    </div>
                    <h4>Our Vision</h4>
                    <div className="text mt-30">
                      <p>  Our vision is to redefine the future of digital experiences by empowering businesses with innovative solutions that inspire growth and transformation. We strive to lead the way in shaping a connected, impactful digital world.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 rest">
                  <div className="img fit-img">
                    <img src="/nex/assets/imgs/works/3/2.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;
