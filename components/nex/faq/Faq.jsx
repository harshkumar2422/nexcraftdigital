"use client";
import React, { useEffect } from "react";
import data from "@/l-data/faq.json";

function Faq() {
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
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <section className="faqs section-padding pt-40">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-12 valign">
            <div className="full-width">
              <div className="list-serv">
                <div className="accordion bord">
                  {data?.map((item, index) => (
                    <div
                      className="item active mb-15 wow fadeInUp"
                      data-wow-delay=".1s"
                      key={`faq${index}`}
                    >
                      <div onClick={openAccordion} className="title">
                        <h6> {item?.question} </h6>
                        <span className="ico ti-plus"></span>
                      </div>
                      <div className="accordion-info">
                        <p className="">{item?.answer}</p>
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

export default Faq;
