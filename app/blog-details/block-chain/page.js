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
    <>
      {/* Cursor and Scroll Progress */}
      <Cursor />
      <ProgressScroll />
      <Lines />

      {/* Page Content */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Navbar />
          <main className="main-bg o-hidden">
            {/* Blog Header */}
            <div className="header blog-header section-padding pb-0">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="caption">
                      <h1 className="fz-55 mt-10">
                        Blockchain: The Technology Revolutionizing the Digital World
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="background bg-img mt-80"
                style={{
                  backgroundImage: "url(/nex/assets/imgs/blog/blockchain/4.jpg)",
                }}
              ></div>
            </div>

            {/* Blog Content */}
            <section className="blog section-padding blog-detail-section">
              <div className="container">
                <div className="row xlg-marg">
                  <div className="col-lg-12">
                    <div className="main-post">
                      <article className="pb-60">
                        <header className="title mt-30">
                          <h4>What is Blockchain?</h4>
                        </header>
                        <p className="text mt-20">
                          Blockchain is a distributed ledger technology (DLT)...
                        </p>
                      </article>

                      {/* Quote Section */}
                      <blockquote className="post-qoute mt-50 fz-20">
                        Blockchain is more than just a technology; it’s a paradigm shift...
                      </blockquote>

                      {/* Images Section */}
                      <div className="mb-50 mt-50 row">
                        {["1.jpg", "2.jpg", "3.jpg"].map((img, index) => (
                          <div className="col-sm-4 sm-mb30" key={index}>
                            <img
                              className="iner-img"
                              src={`/nex/assets/imgs/blog/blockchain/${img}`}
                              alt={`Blockchain ${index + 1}`}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Features Section */}
                      {[
                        {
                          title: "Key Features of Blockchain",
                          items: [
                            { label: "Decentralization", description: "Unlike traditional centralized systems..." },
                            { label: "Immutability", description: "Once a block is added..." },
                            { label: "Transparency", description: "All transactions on the blockchain..." },
                            { label: "Security", description: "Blockchain uses cryptographic techniques..." },
                            { label: "Smart Contracts", description: "Self-executing contracts..." },
                          ],
                        },
                        {
                          title: "Benefits of Blockchain Technology",
                          items: [
                            { label: "Enhanced Security", description: "Blockchain's encryption and decentralized nature..." },
                            { label: "Improved Transparency", description: "Every participant in the blockchain network..." },
                            { label: "Faster Transactions", description: "Blockchain allows for peer-to-peer transactions..." },
                            { label: "Lower Costs", description: "By removing intermediaries, blockchain reduces..." },
                            { label: "Traceability", description: "Blockchain enables better tracking of assets..." },
                          ],
                        },
                        {
                          title: "Best Practices for Enhancing Cybersecurity",
                          items: [
                            { label: "Regular Software Updates", description: "Keeping your operating systems, applications..." },
                            { label: "Strong Password Policies", description: "Use complex passwords and enable two-factor..." },
                            { label: "Employee Training", description: "One of the weakest links in cybersecurity..." },
                            { label: "Backups and Encryption", description: "Regularly back up important data..." },
                            { label: "Firewalls and Antivirus Protection", description: "Ensure that your systems are equipped..." },
                          ],
                        },
                      ].map((section, idx) => (
                        <div className="unorder-list mb-30" key={idx}>
                          <h6 className="mb-15">{section.title}</h6>
                          <ul className="rest">
                            {section.items.map((item, i) => (
                              <li key={i}>
                                <strong>{item.label}:</strong> {item.description}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}

                      {/* Conclusion */}
                      <section className="text">
                        <h6 className="mb-15">The Future of Blockchain</h6>
                        <p>
                          Blockchain is still in its early stages, but its potential is vast...
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </div>

      {/* Scripts */}
      {[
        "ScrollTrigger.min.js",
        "ScrollSmoother.min.js",
        "plugins.js",
        "TweenMax.min.js",
        "charming.min.js",
        "countdown.js",
        "gsap.min.js",
        "splitting.min.js",
        "isotope.pkgd.min.js",
        "imgReveal/imagesloaded.pkgd.min.js",
        "scripts.js",
      ].map((script, index) => (
        <Script
          key={index}
          src={`/nex/assets/js/${script}`}
          strategy="beforeInteractive"
        />
      ))}
    </>
  );
}
