import dynamic from "next/dynamic";
import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/nex/home-main/Navbar";
import Footer from "@/components/nex/home-main/Footer";
import Cursor from "@/components/nex/common/cusor";
import ProgressScroll from "@/components/nex/common/ProgressScroll";
import Lines from "@/components/nex/common/Lines";

const Slider = dynamic(() => import("@/components/nex/blog-details/Slider"), {
  ssr: false,
});
const Blog = dynamic(() => import("@/components/nex/blog-details/Blog"), {
  ssr: false,
});

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
      <div>
        <Cursor />
        <ProgressScroll />
        <Lines />
        <div id="smooth-wrapper">
          <div id="smooth-content">
            <Navbar />
            <main className="main-bg o-hidden">
              <Slider />
              <Blog />
            </main>
            <Footer />
          </div>
        </div>
        {/* Scripts */}
        <Script src="/nex/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script
          src="/nex/assets/js/ScrollSmoother.min.js"
          strategy="lazyOnload"
        />
        <Script src="/nex/assets/js/plugins.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/TweenMax.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/charming.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/countdown.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/nex/assets/js/splitting.min.js" strategy="lazyOnload" />
        <Script
          src="/nex/assets/js/isotope.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/nex/assets/js/imgReveal/imagesloaded.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script src="/nex/assets/js/scripts.js" strategy="lazyOnload" />
      </div>
    </>
  );
}
