import Link from "next/link";
import React from "react";
import data from "@/l-data/blogs.json";

function Blogs() {
  return (
    <section className="blog-list-half section-padding">
      <div className="container">
        <div className="row">
          {data?.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <div className="item mb-50">
                <div className="row rest">
                  <div className="col-lg-6 col-md-5 img rest">
                    <img src={item?.image} alt="" className="img-post" />
                  </div>
                  <div className="col-lg-6 col-md-7 sub-bg cont valign">
                    <div className="full-width">
                      <h5>
                        <Link href={item?.link}>{item?.tagline}</Link>
                      </h5>
                      <span className="date fz-12 ls1 text-u opacity-7 mt-80"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
