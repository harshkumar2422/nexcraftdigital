"use client";
import React, { useEffect } from "react";
import Link from "next/link";

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (bodyScroll > 300) navbar.classList.add("nav-scroll");
    else navbar.classList.remove("nav-scroll");
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="main navbar navbar-expand-lg bord blur">
        <div className="container">
          <Link className="logo icon-img-200" href="/">
            <img src="/nex/assets/imgs/logo-light.png" alt="logo" />
          </Link>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/">
                  <span className="rolling-text">Home</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/about-us/">
                  <span className="rolling-text">About</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/services">
                  <span className="rolling-text">Service</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/portfolio/">
                  <span className="rolling-text">Portfolio</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/blogs/">
                  <span className="rolling-text">Blogs</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" href="/contact-us/">
                  <span className="rolling-text">Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <a
            className="support"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=919266518440&text=Information"
          >
            SUPPORT
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
