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
    question: "What is SEO and why is it important?",
    answer:
      "SEO (Search Engine Optimization) is the practice of improving your website's visibility on search engines like Google. It is crucial because higher rankings lead to increased organic traffic, credibility, and ultimately, more conversions.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer:
      "SEO results typically take 3-6 months to become noticeable, as search engines need time to index and rank your content. However, ongoing efforts can lead to sustained long-term results.",
  },
  {
    question: "What is the difference between SEO and PPC?",
    answer:
      "SEO focuses on improving organic search rankings over time through optimization, while PPC (Pay-Per-Click) involves paid ads to drive immediate traffic. SEO is more cost-effective long-term, while PPC offers quicker results.",
  },
  {
    question: "Do I need SEO if I already have a PPC campaign?",
    answer:
      "Yes, combining SEO and PPC is beneficial. While PPC drives immediate traffic, SEO helps you build long-term, sustainable traffic. Both strategies complement each other for optimal results.",
  },
  {
    question: "How do you conduct keyword research?",
    answer:
      "Keyword research involves identifying terms your target audience is searching for. We use tools like Google Keyword Planner and SEMrush to find relevant, high-volume keywords to optimize your content for better rankings.",
  },
  {
    question: "What is Content Marketing, and how does it impact SEO?",
    answer:
      "Content marketing involves creating valuable, relevant content that engages users. Quality content is key to SEO because it increases dwell time, reduces bounce rates, and helps build backlinks—all factors that improve rankings.",
  },
  {
    question: "What is the role of Social Media in SEO?",
    answer:
      "Social media plays a supportive role in SEO by driving traffic to your website and increasing brand visibility. Social signals, such as shares and likes, can indirectly impact SEO rankings.",
  },
  {
    question: "What is local SEO and why is it important?",
    answer:
      "Local SEO optimizes your website for location-based searches. It's crucial for businesses with a physical location as it helps attract local customers and improves visibility in local search results.",
  },
  {
    question:
      "What are the key performance indicators (KPIs) for SEO and Digital Marketing?",
    answer:
      "Some key KPIs include organic traffic, keyword rankings, conversion rates, bounce rates, click-through rates (CTR), and ROI. These metrics help evaluate the effectiveness of your digital marketing efforts.",
  },
  {
    question: "How do you measure the success of a digital marketing campaign?",
    answer:
      "Success is measured through analytics tools like Google Analytics. Key metrics include traffic growth, leads generated, sales, engagement, and overall ROI. Regular reporting helps optimize campaigns for better performance.",
  },
  {
    question: "Can SEO help improve my website’s user experience (UX)?",
    answer:
      "Yes, SEO and UX are interconnected. Improving website navigation, load times, mobile-friendliness, and content quality enhances user experience, which in turn helps SEO rankings.",
  },
  {
    question: "How can I improve my website’s SEO for mobile users?",
    answer:
      "By optimizing website design for mobile responsiveness, improving page load speed, and ensuring content is easy to read on smaller screens, you can improve mobile SEO and enhance the user experience.",
  },
  {
    question: "Do I need to update my website content regularly?",
    answer:
      "Yes, regular updates to website content help maintain relevancy, improve user engagement, and signal to search engines that your site is active, boosting SEO rankings.",
  },
  {
    question: "What’s the role of backlinks in SEO?",
    answer:
      "Backlinks are links from other reputable websites to your content. They help establish authority and trustworthiness, which can improve your search engine ranking and overall SEO performance.",
  },
  {
    question:
      "What is conversion rate optimization (CRO) and how does it relate to SEO?",
    answer:
      "CRO involves optimizing your website to increase the percentage of visitors who take a desired action (like filling out a form or making a purchase). While SEO brings traffic, CRO maximizes conversions from that traffic.",
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
              title={"SEO & Digital Marketing"}
              description={
                "In today’s competitive digital world, strong online visibility is key to success. As a top SEO services company and digital marketing agency, we offer comprehensive solutions that boost your search rankings, enhance brand awareness, and drive measurable results."
              }
            />
            <Intro
              shortDescription={
                "SEO & Digital Marketing are crucial for increasing online visibility, driving targeted traffic, and improving brand awareness. They help businesses reach a larger audience, enhance engagement, and boost sales in the digital marketplace."
              }
              title={"SEO & Digital Marketing"}
              description={
                "SEO & Digital Marketing play a pivotal role in today’s digital-first world by helping businesses achieve higher visibility online. Effective SEO strategies ensure that your website ranks higher on search engines, increasing organic traffic and attracting potential customers. Digital Marketing strategies, including social media marketing, email campaigns, and paid ads, help in reaching a broader audience, fostering better engagement, and driving conversions. The combined efforts of SEO and Digital Marketing enable businesses to stay competitive, build strong customer relationships, and enhance brand recognition. Whether you are a startup or an established brand, leveraging these strategies can improve online presence, drive sales, and ensure long-term success in an ever-evolving digital landscape. By investing in SEO and Digital Marketing, businesses can stay ahead of the curve and achieve measurable growth."
              }
              features={[
                "Search Engine Optimization",
                "Keyword Research & Strategy",
                "Content Marketing",
                "Social Media Marketing",
                "Pay-Per-Click",
                "Email Marketing",
                "Local SEO",
                "Conversion Rate Optimization",
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
