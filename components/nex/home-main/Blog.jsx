import Link from "next/link";
import React from "react";
import data from "@/l-data/blogs.json";

function Blog() {
  return (
    <section className="blog-crev section-padding  radius-30 mt-15">
      <div className="container">
        <div className="sec-head text-center mb-80">
          <h2>Look at the articles</h2>
        </div>
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-lg-4" key={`blogs_${index}`}>
              <div className="item sub-bg2 md-mb50">
                <div className="img">
                  <img src={item?.image} alt="" />
                </div>
                <div className="cont">
                  <h5>
                    <Link href={item?.link}>{item?.tagline}</Link>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
