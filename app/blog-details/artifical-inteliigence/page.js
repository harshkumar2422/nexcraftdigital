import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/nex/home-main/Navbar";
import Footer from "@/components/nex/home-main/Footer";
import Cursor from "@/components/nex/common/cusor";
import ProgressScroll from "@/components/nex/common/ProgressScroll";
import Lines from "@/components/nex/common/Lines";

export default function Services() {
  return (
    <>
      <Head>
        <title>NexCraft Digital</title>
        <link rel="icon" href="/nex/assets/imgs/favicon.ico" />
        <link rel="stylesheet" href="/nex/assets/css/plugins.css" />
        <link rel="stylesheet" href="/nex/assets/css/satoshi.css" />
        <link rel="stylesheet" href="/nex/assets/css/style.css" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Navbar />
            <main className="main-bg o-hidden">
              <header className="header blog-header section-padding pb-0">
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
                  role="img"
                  aria-label="Blog header background"
                ></div>
              </header>
              <section className="blog section-padding">
                <div className="container">
                  <div className="row xlg-marg">
                    <div className="col-lg-12">
                      <article className="main-post">
                        <div className="item pb-60">
                          <div className="title mt-30">
                            <h4>Embracing the Power of Artificial Intelligence</h4>
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

                          <blockquote className="post-qoute mt-50">
                            <h6 className="fz-20">
                              Artificial Intelligence is not just about machines
                              learning; it's about creating a future where
                              technology enhances human potential and transforms
                              the world.
                            </h6>
                          </blockquote>

                          <div className="mb-50 mt-50">
                            <div className="row">
                              <div className="col-sm-4">
                                <figure className="iner-img sm-mb30">
                                  <img
                                    src="/nex/assets/imgs/blog/ai/1.jpg"
                                    alt="AI example 1"
                                  />
                                </figure>
                              </div>
                              <div className="col-sm-4">
                                <figure className="iner-img sm-mb30">
                                  <img
                                    src="/nex/assets/imgs/blog/ai/3.jpeg"
                                    alt="AI example 2"
                                  />
                                </figure>
                              </div>
                              <div className="col-sm-4">
                                <figure className="iner-img">
                                  <img
                                    src="/nex/assets/imgs/blog/ai/4.jpg"
                                    alt="AI example 3"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>

                          <h4 className="title mb-10">What is Artificial Intelligence?</h4>
                          <div className="text mb-20">
                            <p>
                              Artificial Intelligence refers to the simulation of
                              human intelligence processes by machines, especially
                              computer systems. These processes include learning,
                              reasoning, problem-solving, perception, and language
                              understanding.
                            </p>
                          </div>

                          <div className="unorder-list mb-30">
                            <h6 className="mb-15">
                              Key Benefits of Artificial Intelligence
                            </h6>
                            <ul className="rest">
                              <li>
                                <strong>Improved Efficiency and Automation:</strong> 
                                Streamlines repetitive tasks and enhances productivity.
                              </li>
                              <li>
                                <strong>Data-Driven Decision Making:</strong> Extracts insights
                                for strategic planning.
                              </li>
                              <li>
                                <strong>Personalized User Experience:</strong> Powers
                                recommendation systems.
                              </li>
                              <li>
                                <strong>Enhanced Healthcare Solutions:</strong> Supports
                                diagnostics and drug discovery.
                              </li>
                              <li>
                                <strong>Smarter Manufacturing and Logistics:</strong> Optimizes
                                operations and reduces costs.
                              </li>
                            </ul>
                          </div>

                          <div className="text">
                            <h6 className="mb-15">The Future of Artificial Intelligence</h6>
                            <p>
                              The future of AI is boundless. Advancements in deep
                              learning and neural networks will continue to pave the way for
                              smarter, more capable systems.
                            </p>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        </div>

        <Script src="/nex/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/ScrollSmoother.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/plugins.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/TweenMax.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/charming.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/countdown.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/splitting.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/isotope.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/imgReveal/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/scripts.js" strategy="lazyOnload" />
      </body>
    </>
  );
}
