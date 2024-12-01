"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        overlayRef.current &&
        !overlayRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="main navbar navbar-expand-lg bord blur">
        <div className="container main-content">
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

          <div
            className="hamburger-icon"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            <HiBars3 size={"20px"} style={{ color: "white" }} />
          </div>
        </div>
      </nav>

      <div
        ref={sidebarRef}
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="sidebar-content">
          <button
            className="close-sidebar"
            onClick={() => setSidebarOpen(false)}
          >
            &times;
          </button>

          <ul className="sidebar-nav">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us/">About</Link>
            </li>
            <li>
              <Link href="/services">Service</Link>
            </li>
            <li>
              <Link href="/portfolio/">Portfolio</Link>
            </li>
            <li>
              <Link href="/blogs/">Blogs</Link>
            </li>
            <li>
              <Link href="/contact-us/">Contact Us</Link>
            </li>

            <a
              className="support-sidebar-nav"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=919354241447&text=Information"
            >
              SUPPORT
            </a>
          </ul>
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`overlay ${isSidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;
