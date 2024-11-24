"use client";
import Link from "next/link";

function Header() {
  return (
    <div
      className="header main-header bg-img main-banner-area "
      data-overlay-dark="8"
    >
      <div className="container pt-20">
        <div className="row justify-content-start">
          <div className="col-lg-10">
            <div className="text mb-100">
              <h4>Strategic Innovation for Sustainable Digital Growth</h4>

              <div>
                <span>
                  Welcome to NexaCraftDigital, where creativity and technology
                  come together to shape your digital future. We specialize in
                  creating transformative websites and apps that empower
                  businesses to thrive in a fast-paced online world. Whether
                  you&apos;re a startup with bold ideas or an established brand
                  aiming to elevate your digital presence, we bring your vision
                  to life with innovative solutions. From stunning, responsive
                  websites to intuitive mobile apps that captivate users, our
                  team is dedicated to delivering experiences that leave a
                  lasting impact. At NexaCraftDigital, we don&apos;t just build
                  digital products—we craft success stories.
                </span>
              </div>

              <Link href="/contact-us/" className="get-started">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="over-shape">
        <img
          loading="lazy"
          src="/nex/assets/imgs/animate/animate1.png"
          alt=""
        />
        <img
          loading="lazy"
          src="/nex/assets/imgs/animate/animate2.png"
          alt=""
        />
        <img
          loading="lazy"
          src="/nex/assets/imgs/animate/animate3.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Header;
