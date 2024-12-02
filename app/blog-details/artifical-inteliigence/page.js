import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Navbar from "@/components/nex/home-main/Navbar";
import Script from "next/script";
import Footer from "@/components/nex/home-main/Footer";
import Cursor from "@/components/nex/common/cusor";
import ProgressScroll from "@/components/nex/common/ProgressScroll";
import Lines from "@/components/nex/common/Lines";

export const metadata = {
  title: "NexCraft Digital",
  icons: {
    icon: "/nex/assets/imgs/favicon.ico",
    shortcut: "/nex/assets/imgs/favicon.ico",
    other: generateStylesheetObject([
      "/nex/assets/css/plugins.css",
      "/nex/assets/css/satoshi.css",
      "/nex/assets/css/style.css",
      "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap",
    ]),
  },
};

export default function Services() {
  return (
    <body>
      <Cursor />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <main className="main-bg o-hidden">
            <div className="header blog-header section-padding pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="caption">
                      <h1 className="fz-55 mt-10">
                        The Impact of Artificial Intelligence on Modern
                        Technology
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="background bg-img mt-80"
                style={{
                  backgroundImage: "url(/nex/assets/imgs/blog/ai/2.jpeg)",
                }}
              ></div>
            </div>
            <section className="blog section-padding">
              <div className="container">
                <div className="row xlg-marg">
                  <div className="col-lg-12">
                    <div className="main-post">
                      <div className="item pb-60">
                        <article>
                          <div className="title mt-30">
                            <h4>
                              Embracing the Power of Artificial Intelligence
                            </h4>
                          </div>
                          <div className="text mt-20">
                            <p>
                              Artificial Intelligence is no longer a futuristic
                              concept—it's a transformative force reshaping
                              industries today. From intelligent automation to
                              machine learning and natural language processing,
                              AI is revolutionizing the way we work, live, and
                              solve problems. This blog explores the impact of
                              AI on various sectors, highlighting its benefits,
                              applications, and future potential.
                            </p>
                          </div>
                        </article>

                        <div className="post-qoute mt-50">
                          <h6 className="fz-20">
                            <span className="l-block">
                              Artificial Intelligence is not just about machines
                              learning; it's about creating a future where
                              technology enhances human potential and transforms
                              the world.
                            </span>
                          </h6>
                        </div>

                        <div className="mb-50 mt-50">
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="iner-img sm-mb30">
                                <img
                                  src="/nex/assets/imgs/blog/ai/1.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="iner-img sm-mb30">
                                <img
                                  src="/nex/assets/imgs/blog/ai/3.jpeg"
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="col-sm-4">
                              <div className="iner-img">
                                <img
                                  src="/nex/assets/imgs/blog/ai/4.jpg"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="title mb-10">
                          <h4>What is Artificial Intelligence?</h4>{" "}
                        </div>

                        <div className="text mb-20">
                          <p>
                            Artificial Intelligence refers to the simulation of
                            human intelligence processes by machines, especially
                            computer systems. These processes include learning,
                            reasoning, problem-solving, perception, and language
                            understanding. AI systems use data-driven algorithms
                            to improve their accuracy and performance over time.
                            The core branches of AI include machine learning,
                            natural language processing (NLP), computer vision,
                            and robotics.
                          </p>
                        </div>

                        <div className="unorder-list mb-30">
                          <h6 className="mb-15">
                            Key Benefits of Artificial Intelligence
                          </h6>
                          <ul className="rest">
                            <li>
                              {" "}
                              <strong>
                                Improved Efficiency and Automation
                              </strong>{" "}
                              AI enables automation, allowing businesses to
                              streamline repetitive tasks, reduce human error,
                              and increase overall efficiency. From chatbots
                              answering customer queries to machine learning
                              models predicting business trends, AI enhances
                              productivity in almost every industry.
                            </li>
                            <li>
                              <strong>Data-Driven Decision Making</strong> AI
                              analyzes vast amounts of data and extracts
                              actionable insights, helping businesses make
                              informed decisions. By identifying patterns and
                              trends, AI aids in strategic planning and
                              forecasting.
                            </li>
                            <li>
                              <strong>Personalized User Experience</strong> AI
                              powers recommendation systems seen in platforms
                              like Netflix, Amazon, and YouTube. These systems
                              analyze user behavior to provide personalized
                              content and product suggestions, improving the
                              overall user experience.
                            </li>
                            <li>
                              <strong>Enhanced Healthcare Solutions </strong>AI
                              plays a pivotal role in healthcare, from diagnosis
                              assistance to drug discovery. AI models can
                              analyze medical data faster and more accurately,
                              helping doctors provide better care to patients.
                            </li>
                            <li>
                              {" "}
                              <strong>
                                Smarter Manufacturing and Logistics
                              </strong>{" "}
                              With AI, industries like manufacturing and
                              logistics have witnessed significant advancements
                              in predictive maintenance, supply chain
                              optimization, and smart robotics. AI-driven
                              systems ensure smoother operations and cost
                              savings.
                            </li>
                          </ul>
                        </div>

                        <div className="text">
                          <h6 className="mb-15">
                            The Future of Artificial Intelligence
                          </h6>
                          <p>
                            The future of AI is boundless. As technology
                            evolves, AI is expected to continue its integration
                            into everyday life, with advancements in deep
                            learning and neural networks paving the way for
                            smarter, more capable systems. The future will
                            likely see AI-powered innovations in areas such as
                            robotics, virtual assistants, and personalized
                            healthcare.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>

      <Script
        src="/nex/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/nex/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />
      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/plugins.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/nex/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>
      <Script src="/nex/assets/js/scripts.js"></Script>
    </body>
  );
}
