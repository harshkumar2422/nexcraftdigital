"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [requirement, setRequirement] = useState("");
  const [subject, setSubject] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://nexcraftbackend.vercel.app/api/v1/createsales",
        {
          name,
          email,
          requirement,
          contact,
          subject,
        }
      );
      router.push("/thankyou");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section className="contact section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 valign">
              <div className="sec-head info-box full-width md-mb80">
                <div className="phone fz-30 fw-600 underline main-color">
                  <a href="tel:+919266518440">+91 92665 18440</a>
                </div>
                <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                  <h6 className="mb-15">Address</h6>
                  <p>
                    NexCraft Digital, 123 Business Lane, City, State, Zip Code,
                    India
                  </p>
                </div>
                <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                  <h6 className="mb-15">Email</h6>
                  <p>info@nexcraftdigital.com</p>
                </div>

                <div className="social-icon-circle mt-50">
                  <a href="#0">
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  <a href="#0">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#0">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 valign">
              <div className="full-width">
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">
                    Let&apos;s Chat
                  </h6>
                  <h3 className="text-u ls1">
                    Send a <span className="fw-200">message</span>
                  </h3>
                </div>
                <form
                  id="contact-form"
                  className="form2"
                  onSubmit={submitHandler}
                >
                  <div className="messages"></div>

                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                          onChange={(e) => setName(e.target.value)}
                          value={name}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-30">
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Phone Number"
                          onChange={(e) => setContact(e.target.value)}
                          value={contact}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-30">
                        <input
                          id="form_subject"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                          onChange={(e) => setSubject(e.target.value)}
                          value={subject}
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                          onChange={(e) => setRequirement(e.target.value)}
                          value={requirement}
                        ></textarea>
                      </div>
                      <div className="mt-30">
                        <button
                          type="submit"
                          className="butn butn-full butn-bord radius-30"
                        >
                          <span className="text">Let&apos;s Talk</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
