"use client";
import React from "react";

function WhyUs() {
  return (
    <section className="services-tab section-padding  our-story">
      <div className="container">
        <div className="row lg-marg" id="tabs">
          <div className="col-lg-4 valign">
            <div className="serv-tab-cont md-mb80">
              <div className="tab-content current" id="tabs-1">
                <div className="item">
                  <div className="img">
                    <img src="/nex/assets/imgs/intro/03.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 valign" style={{ alignItems: "flex-start" }}>
            <div className="serv-tab-link tab-links full-width">
              <div className="sec-head mb-30">
                <h6 className="sub-title mb-15 main-color">
                  Your Partner in Growth and Innovation
                </h6>
                <h2>Why Choose Us?</h2>
              </div>
              <div className="row justify-content-start">
                <div className="col-lg-11">
                  <div className="text mb-50">
                    <p>
                      When you choose us, you&apos;re not just selecting a service —
                      you&apos;re beginning a journey with a dedicated team that
                      genuinely cares about your success. Imagine having a
                      partner who understands your unique vision, your goals,
                      and your challenges. From the very first conversation, we
                      dive deep into understanding your needs and tailor our
                      approach to ensure the best possible outcome.
                    </p>
                    <p>
                      With years of experience in web development, app
                      development, and software solutions, we bring the
                      expertise and passion needed to create something
                      extraordinary. We believe in using the latest technologies
                      and following industry best practices, ensuring your
                      project is not only functional but scalable and
                      future-proof.
                    </p>
                    <p>
                      Our commitment to customer satisfaction means we’re with
                      you every step of the way — from planning to launch and
                      beyond. We don&apos;t just deliver a product; we deliver a
                      lasting partnership that drives growth and success for
                      your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
