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
    question: "What is chat software?",
    answer:
      "Chat software enables real-time communication between businesses and their customers. It allows businesses to provide instant support, engage with visitors, and streamline customer service through text-based messaging platforms.",
  },
  {
    question: "How does chat software improve customer service?",
    answer:
      "Chat software offers quick, real-time communication, reducing wait times and improving response rates. It enhances customer satisfaction by providing immediate assistance and personalized support, ensuring a better overall experience.",
  },
  {
    question: "Is chat software secure for customer interactions?",
    answer:
      "Yes, most chat software platforms use end-to-end encryption, secure data transmission, and compliance with privacy regulations to ensure that customer interactions are safe and confidential.",
  },
  {
    question: "Can chat software integrate with my CRM system?",
    answer:
      "Yes, many chat software solutions integrate seamlessly with CRM systems, allowing businesses to track customer interactions, access customer history, and deliver more personalized support.",
  },
  {
    question: "Can I use chat software for mobile apps?",
    answer:
      "Yes, chat software can be integrated into mobile apps, enabling businesses to provide support and engage with customers directly from their apps, enhancing user experience and customer engagement.",
  },
  {
    question: "Do chatbots work with chat software?",
    answer:
      "Yes, AI-powered chatbots can be integrated into chat software to handle common inquiries and provide automated responses. They can help reduce workload for customer service agents and ensure 24/7 availability.",
  },
  {
    question: "What kind of analytics can I track with chat software?",
    answer:
      "Chat software provides analytics like response times, customer satisfaction ratings, chat volumes, agent performance, and customer behavior, helping businesses improve their support processes and service quality.",
  },
  {
    question: "Can chat software support multiple languages?",
    answer:
      "Many chat software solutions offer multilingual support, enabling businesses to assist customers from different regions and cater to global audiences effectively.",
  },
  {
    question: "What features should I look for in chat software?",
    answer:
      "Look for features such as real-time messaging, automated chatbots, file sharing, integration with CRM systems, analytics and reporting, multi-channel support, and secure encryption for a complete customer service experience.",
  },
  {
    question: "Can chat software be used on websites and social media?",
    answer:
      "Yes, chat software can be integrated with websites, social media platforms, and messaging apps to engage customers wherever they are, offering flexibility in communication channels.",
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
              title={"Chat Software"}
              description={
                "Businesses facing communication challenges rely on our custom chat software. As a leading software development company, we create tailored solutions that enhance collaboration, improve customer interactions, and drive efficiency and productivity."
              }
            />
            <Intro
              shortDescription={
                "Chat software plays a crucial role in facilitating instant communication, enabling efficient customer support, and fostering meaningful interactions. It enhances user engagement, drives satisfaction, and contributes to overall business success and growth."
              }
              description={
                "Chat software is an essential tool for businesses seeking to enhance customer interactions and streamline communication. By incorporating real-time messaging into your platform, you offer immediate assistance, reducing response times and improving customer satisfaction. With chat software, users can easily connect with support teams, ensuring they get the help they need when they need it. This direct communication fosters stronger customer relationships and boosts engagement, leading to increased conversion rates. Additionally, chat software enables businesses to collect valuable insights from customer conversations, optimizing service and improving operational efficiency. As the demand for faster, more efficient support grows, businesses must leverage chat software to maintain a competitive edge, provide personalized experiences, and ensure that every interaction contributes to long-term success."
              }
              title={"Chat Software"}
              features={[
                "Real-time Messaging",
                "Multichannel Support",
                "Customer Insights",
                "File Sharing",
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
