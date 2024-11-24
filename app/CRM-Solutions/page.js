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
    question: "What is a CRM solution?",
    answer:
      "A CRM solution (Customer Relationship Management) is a system designed to help businesses manage interactions with customers, streamline processes, and improve customer relationships. It centralizes customer data, automates tasks, and provides insights for better decision-making.",
  },
  {
    question: "Why do I need a CRM solution?",
    answer:
      "A CRM solution helps businesses improve customer satisfaction, increase sales, and enhance team collaboration. It centralizes customer data, automates tasks, and helps streamline operations for higher efficiency and growth.",
  },
  {
    question: "What are the key features of a CRM solution?",
    answer:
      "Key features of a CRM solution include centralized customer databases, lead and sales management, marketing automation, analytics, task management, customer support tools, reporting, and integrations with other software and platforms.",
  },
  {
    question: "Can a CRM solution help with sales and marketing?",
    answer:
      "Yes, a CRM solution streamlines sales processes by tracking leads, opportunities, and customer interactions. It also automates marketing campaigns, making it easier to engage with customers and drive growth through targeted efforts.",
  },
  {
    question: "Is it easy to integrate a CRM solution with existing tools?",
    answer:
      "Most CRM solutions are designed for easy integration with other tools such as email platforms, social media, accounting software, and more, ensuring a smooth workflow across your business operations.",
  },
  {
    question: "How can a CRM solution improve customer service?",
    answer:
      "A CRM solution allows businesses to track customer inquiries, manage support tickets, and ensure timely responses. By centralizing communication and providing insights, it helps improve the overall customer service experience. ",
  },
  {
    question: "Can a CRM solution be accessed on mobile devices?",
    answer:
      "Yes, many CRM solutions offer mobile apps that allow users to access customer data and perform tasks remotely, ensuring your team can stay connected and productive even while on the go.",
  },
  {
    question: "What type of businesses can benefit from a CRM solution?",
    answer:
      "Any business that interacts with customers, including small to large enterprises in industries like retail, technology, healthcare, and professional services, can benefit from a CRM solution to enhance customer relationships and streamline operations.",
  },
  {
    question: "How secure is customer data in a CRM solution?",
    answer:
      "Most CRM solutions offer robust security features like data encryption, user access controls, and secure cloud storage to ensure that customer data is protected and only accessible by authorized personnel.",
  },
  {
    question: "Can a CRM solution help with data analysis and reporting?",
    answer:
      "Yes, a CRM solution provides powerful analytics and reporting tools that help businesses understand customer behavior, track sales performance, and measure the effectiveness of marketing campaigns, enabling data-driven decision-making.",
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
              title={"CRM Solutions"}
              description={
                "A robust CRM solution can transform how businesses manage customer relationships. As a leading CRM solution provider, we design customized systems that streamline communication, improve efficiency, and deliver measurable growth, driving long-term business success."
              }
            />
            <Intro
              title={"CRM Solutions"}
              description={
                "A CRM solution is essential for businesses looking to improve customer relationship management and enhance operational efficiency. By leveraging a CRM system, businesses can centralize customer data, gain valuable insights, and enable personalized engagement. These solutions also offer automation, reducing manual tasks and boosting productivity. With the power of real-time analytics, businesses can make informed decisions to enhance customer service and build stronger relationships. A CRM solution fosters seamless cross-departmental collaboration, ensuring teams such as marketing, sales, and support work together to deliver exceptional experiences. By streamlining processes and improving customer interactions, a CRM solution drives customer retention, increases sales performance, and helps businesses develop targeted strategies for sustainable growth, giving them a competitive edge in the market. Implementing a CRM solution is a key step in staying ahead in today’s data-driven business landscape."
              }
              shortDescription={
                "A CRM solution is vital for businesses to manage customer relationships, streamline communication, and improve sales. It enhances customer satisfaction, boosts efficiency, and fosters long-term growth by centralizing data and optimizing interactions."
              }
              features={[
                "Centralized Customer Database",
                "Lead and Sales Management",
                "Task and Activity Management",
                "Customer Support and Service",
                "Integration with Other Tools",
                "Collaboration Tools",
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
