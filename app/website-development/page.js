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
    question: "What is website development?",
    answer:
      "Website development is the process of designing, building, and maintaining websites. It includes coding, creating layouts, ensuring responsiveness, and implementing features for an optimal user experience.",
  },
  {
    question: "Why is having a website important for my business?",
    answer:
      "A website establishes an online presence, builds credibility, reaches a wider audience, and serves as a platform to showcase your products or services, ultimately driving growth and customer engagement.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline varies based on complexity, features, and requirements. A simple website may take 2–4 weeks, while complex projects can take several months.",
  },
  {
    question: "What’s the cost of website development?",
    answer:
      "Costs depend on factors like design, functionality, integrations, and the developer's expertise. Customized solutions typically cost more than template-based websites.",
  },
  {
    question: "Do I need a mobile-friendly website?",
    answer:
      "Yes, responsive websites are essential as they ensure seamless performance across devices, improve user experience, and boost search engine rankings.",
  },
  {
    question: "What is the difference between web design and web development?",
    answer:
      "Web design focuses on the visual aspects (layout, colors, UI), while web development handles the functionality and technical implementation (coding, databases, servers).",
  },
  {
    question: "Can I update my website after it’s built?",
    answer:
      "Yes, most websites are built with Content Management Systems (CMS) like WordPress, allowing you to edit or update content without technical expertise.",
  },
  {
    question: "What is included in website maintenance?",
    answer:
      "Maintenance includes updating software, fixing bugs, adding new features, monitoring security, and ensuring the website runs smoothly and efficiently.",
  },
  {
    question: "Can you help with SEO for my website?",
    answer:
      "Yes, websites can be optimized for search engines to improve visibility, drive traffic, and enhance online presence.",
  },
  {
    question: "What types of websites can you build?",
    answer:
      "Websites can range from informational and portfolio sites to e-commerce platforms, custom web applications, and enterprise-level solutions.",
  },
  {
    question: "Will my websifaqDatate be secure?",
    answer:
      "Yes, incorporating security measures like SSL certificates, firewalls, and regular updates ensures your website is protected from threats.",
  },
  {
    question: "What if I already have a website but want to redesign it?",
    answer:
      "Redesign services are available to update the aesthetics, improve performance, and add new features while retaining or enhancing your brand identity.",
  },
  {
    question: "What is the difference between a static and dynamic website?",
    answer:
      "Static websites are simple and display fixed content, while dynamic websites are interactive and fetch content from a database for real-time updates.",
  },
  {
    question: "Do you offer hosting and domain services?",
    answer:
      "Yes, hosting and domain registration services are available to ensure your website is live and accessible.",
  },
  {
    question: "Will my website work on all browsers?",
    answer:
      "Yes, websites are developed with cross-browser compatibility to ensure a seamless experience on browsers like Chrome, Firefox, Safari, and Edge.",
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
              title={"Web Development"}
              description={
                "Envision a website that reflects your brand and drives growth. As a leading website development company, we create custom websites that enhance user experience, boost success, and deliver measurable results to elevate your online presence."
              }
            />
            <Intro
              title={"Web Development"}
              description={
                "A website is a powerful asset that can significantly impact business growth and strengthen your brand’s identity. As a leading website development company, we specialize in creating custom websites that provide exceptional functionality and user experience. Our expert team focuses on delivering tailored web development services that not only meet your business needs but also enhance your online presence. Whether you’re launching a new venture or upgrading an existing site, we ensure your website stands out with cutting-edge design and optimized performance. As a trusted web development agency, we prioritize delivering measurable results and long-term success. Our solutions are designed to support your goals, drive success, and provide a seamless experience across all devices. With a commitment to excellence and innovation, we help businesses thrive in the ever-evolving digital world."
              }
              shortDescription={
                "A well-designed website is essential for establishing a strong digital presence, enhancing brand credibility, engaging customers, and driving business growth. It serves as a critical tool for success in today’s competitive online environment."
              }
              features={[
                "Custom Design",
                "Responsive Development",
                "SEO Optimization",
                "Fast Loading Speed",
                "Ongoing Support",
                "Latest Technology",
                "Secure Architecture",
                "Scalable Designs",
                "Cross-Browser Compatibility",
                "Integration Capabilities",
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
