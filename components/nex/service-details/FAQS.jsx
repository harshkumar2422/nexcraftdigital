"use client";
import React, { useEffect } from "react";

function FAQS({ data }) {
  useEffect(() => {
    // Ensure only the first item is open on initial render
    const accordionItems = document.querySelectorAll(".accordion-info");
    accordionItems.forEach((element, index) => {
      if (index === 0) {
        element.style.maxHeight = "300px";
        element.classList.add("active");
        element.parentElement.classList.add("active");
      } else {
        element.style.maxHeight = "0";
        element.classList.remove("active");
        element.parentElement.classList.remove("active");
      }
    });
  }, []);

  function openAccordion(event) {
    const target = event.currentTarget;
    const isActive = target.nextElementSibling.classList.contains("active");

    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.style.maxHeight = "0";
      element.classList.remove("active");
      element.parentElement.classList.remove("active");
    });

    if (!isActive) {
      target.parentElement.classList.add("active");
      target.nextElementSibling.style.maxHeight = "300px";
      target.nextElementSibling.classList.add("active");
    }
  }

  return (
    <section className="faqs section-padding pt-0">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h3>Frequently asked questions</h3>
              </div>
              <div className="list-serv">
                <div className="accordion bord">
                  {data?.map((item, index) => (
                    <div
                      className={`item ${index === 0 ? "active" : ""} mb-15 wow fadeInUp`}
                      data-wow-delay=".1s"
                      key={`faq${index}`}
                    >
                      <div onClick={openAccordion} className="title">
                        <h6>{item?.question}</h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p>{item?.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQS;
