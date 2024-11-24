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
    question: "What is software development?",
    answer: "Software development refers to the process of designing, coding, testing, and maintaining software applications or systems to solve specific problems or fulfill user needs. It includes everything from creating custom software solutions to enhancing existing systems.",
  },
  {
    question: "Why should I invest in custom software development?",
    answer: "Investing in custom software development allows businesses to create solutions tailored to their specific needs, improving efficiency, streamlining operations, and enhancing overall productivity, which off-the-shelf software may not achieve.",
  },
  {
    question: "What are the different types of software development?",
    answer: "There are various types of software development, including web development, mobile app development, desktop software development, enterprise software development, and cloud software development, each focusing on different platforms and requirements.",
  },
  {
    question: "How long does software development take?",
    answer: "The timeline for software development depends on the complexity of the project. Small applications can take a few weeks, while larger, more complex systems might take months to a year or more.",
  },
  {
    question: "What technologies are used in software development?",
    answer: "The choice of technologies depends on the type of software being developed. Common tools include programming languages like Java, Python, C++, and JavaScript, as well as frameworks and platforms like .NET, React, and Angular.",
  },
  {
    question: "How do I ensure the software meets my needs?",
    answer: "Clear communication and a detailed requirements gathering process are essential. Regular feedback and testing throughout the development process help ensure the software aligns with your business needs and goals.",
  },
  {
    question: "What is the cost of custom software development?",
    answer: "The cost varies depending on the project's complexity, size, and technology used. It is important to discuss your requirements with the development team to get an accurate estimate.",
  },
  {
    question: "Can software development improve business operations?",
    answer: "Yes, custom software development can help automate processes, improve workflow, enhance communication, and increase efficiency, leading to reduced costs and improved overall business operations.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, ongoing support and maintenance are crucial to ensuring the software remains up-to-date, secure, and efficient. Post-launch services include bug fixes, updates, and enhancements based on user feedback.",
  },
  {
    question: "How do I choose the right software development company?",
    answer: "Look for a company with a strong portfolio, experience in your industry, positive client reviews, and a proven track record of delivering projects on time and within budget.",
  }
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
              title={"Software Development"}
              description={
                "Picture a software solution that simplifies complex tasks and accelerates your business growth. As a trusted software development Company, we design custom software that aligns with your goals, delivering efficiency, innovation, and lasting impact."
              }
            />
            <Intro
              title={"Software Development"}
              description={
                "In today’s fast-paced business environment, operational efficiency and agility are key to success. Companies often face challenges in managing complex processes, data, and customer relationships. This is where software solutions come into play. By leveraging custom software solutions, businesses can streamline operations, automate tasks, and ensure seamless collaboration across teams. These software solutions are designed to adapt to the unique needs of each business, providing flexibility and scalability for long-term growth. With real-time data analysis, improved decision-making, and enhanced productivity, businesses can stay ahead of the competition and drive innovation. Investing in the right software solutions not only reduces operational costs but also enables companies to unlock new opportunities and achieve sustained success in an ever-evolving digital landscape."
              }
              shortDescription={
                "Software development is crucial for businesses to streamline operations, enhance efficiency, and improve customer experiences. Custom solutions ensure scalability, innovation, and competitive advantage, driving growth and long-term success in the digital world."
              }
              features={[
                "Scalability",
                "User-Centric Design",
                "Cross-Platform Compatibility",
                "Agile Development",
                "Security",
                "System Integration",
                "Performance Optimization",
                "Customizability",
              ]}
            />
            <FAQS data={faqData}/>
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
