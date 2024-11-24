import generateStylesheetObject from "@/common/generateStylesheetsObject";
import Navbar from "@/components/nex/home-main/Navbar";
import Script from "next/script";
import Footer from "@/components/nex/home-main/Footer";
import Cursor from "@/components/nex/common/cusor";
import ProgressScroll from "@/components/nex/common/ProgressScroll";
import Lines from "@/components/nex/common/Lines";
import Header from "@/components/nex/service-details/Header";
import Intro from "@/components/nex/service-details/Intro";
import FAQS from "@/components/nex/service-details/FAQS";
import CTA from "@/components/nex/service-details/CTA";

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

const faqData = [
  {
    question: "What is the process of app development?",
    answer:
      "App development typically involves idea brainstorming, planning, designing, coding, testing, deployment, and ongoing maintenance to ensure seamless functionality and user satisfaction.",
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer:
      "The timeline depends on the complexity of the app, features, and platform requirements. On average, development can take 2-6 months for standard apps and longer for complex ones.",
  },
  {
    question: "What platforms can apps be developed for?",
    answer:
      "Apps can be developed for iOS, Android, or both using native development or cross-platform frameworks like React Native or Flutter.",
  },
  {
    question: "How much does app development cost?",
    answer:
      "Costs vary based on app complexity, features, and development platforms. It's best to consult for a tailored estimate matching specific requirements.",
  },
  {
    question: "Can the app be updated after launch?",
    answer:
      "Yes, apps can be updated to add features, improve performance, and address user feedback or new platform requirements.",
  },
  {
    question: "What is the importance of app testing?",
    answer:
      "Testing ensures the app is free from bugs, delivers a smooth user experience, and performs efficiently across different devices and operating systems.",
  },
];

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
            <Header
              title={"App Development"}
              description={
                "Imagine an app that enhances user experience and drives business growth. As a leading app development company, we specialize in creating custom mobile apps that provide exceptional performance, innovation, and measurable results."
              }
            />
            <Intro
              title={"App Development"}
              description={
                "In today’s mobile-first world, app development has become an essential tool for businesses to connect with their users and enhance their operations. A well-designed mobile app offers more than just functionality; it creates a seamless user experience that helps businesses engage with customers in real-time. Whether it's through personalized notifications, faster service, or easy access to products and services, apps are a gateway to improved customer satisfaction. By providing a direct, accessible channel, businesses can build stronger relationships, drive user engagement, and retain customers for the long term. App development also helps streamline business operations, making it easier to manage processes, track performance, and optimize efficiency. As a result, businesses not only grow their customer base but also foster loyalty and trust, paving the way for long-term success in the competitive digital landscape."
              }
              shortDescription={
                "In today's mobile-driven world, apps act as vital tools for connecting with users, enhancing customer experiences, streamlining business processes, and driving growth, offering innovative solutions that ensure long-term success and build lasting engagement."
              }
              features={[
                "Custom App Design",
                "Cross-Platform Compatibility",
                "User-Centric Interface (UI/UX)",
                "Robust Security",
                "Scalable Architecture",
                "Performance Optimization",
                "Real-Time Updates",
                "Ongoing Support and Maintenance",
              ]}
            />
            <FAQS data={faqData} />
            <CTA />
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
