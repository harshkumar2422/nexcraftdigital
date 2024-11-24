"use client";
import Link from "next/link";

function Footer() {
  return (
    <footer className="clean-footer crev bg-img" data-overlay-dark="10">
      <div className="pb-10 container section-padding ontop">
        <div className="row">
          <div className="col-lg-3">
            <div className="logo icon-img-200">
              <Link href="/">
                <img src="/nex/assets/imgs/logo-light.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column">
              <div className="mb-40">
                <h6 className="sub-title mb-30">Address</h6>
                <h5 className="opacity-8">
                  5919 Trussville <br /> Crossings Pkwy, Birmingham
                </h5>
              </div>

              <a href="tel:+919266518440" className="underline">
                <span className="fz-22 contact-number">+91 92665 18440</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1">
            <div className="column">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <Link href="/about-us">About</Link>
                </li>
                <li className="mb-15">
                  <Link href="/services">Services</Link>
                </li>
                <li className="mb-15">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="mb-15">
                  <Link href="/blogs">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column">
              <h6 className="sub-title mb-30">Support</h6>
              <ul className="rest fz-14">
                <li className="mb-15">
                  <Link href="/contact-us">Contact</Link>
                </li>
                <li className="mb-15">
                  <Link href="/FAQS">FAQS</Link>
                </li>
                <li className="mb-15">
                  <Link href="/terms&condition">Term & Conditions</Link>
                </li>
                <li className="mb-15">
                  <Link href="/privacy-policy">Privacy policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center pt-30 pb-30 mt-80 bord-thin-top">
          <div>
            <ul className="rest d-flex align-items-center">
              <li className="hover-this cursor-pointer">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              {/* <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-dribbble"></i>
                </a>
              </li> */}
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="hover-this cursor-pointer ml-30">
                <a href="#0" className="hover-anim">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="ml-auto">
            <p className="fz-14">
              Copyright © 2024 NexCraft Digital. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
