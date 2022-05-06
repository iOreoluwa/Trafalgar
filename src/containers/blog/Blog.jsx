import React from "react";
import blog from "../../assets/blog.png";
import blog_1 from "../../assets/blog_1.png";
import blog_2 from "../../assets/blog_2.png";
import blog_3 from "../../assets/blog_3.png";
import arrow from "../../assets/arrow.png";
import "./blog.css";

const Blog = () => {
  return (
    <div className="container blog">
      <div className="blog_content">
        <h1 className="">
          Check out our latest article
          <hr className="horizontal-rule" />
        </h1>
      </div>
      <div className="blog_card">
        <div className="blog_background">
          <img src={blog} alt="" className="blog_background" />
        </div>
        {/* <div className="blog_element">
      <img src={blog_element} alt=""/>
      </div> */}
        <div className="blog_grid">
          <div className="card_2 card1">
            <img src={blog_1} alt="" />
            <h3>Disease detection, check up in the laboratory</h3>
            <p>
            In this case, the role of the health laboratory is very important to do
a disease detection...
            </p>
            <p>
              Read More 
              {/* <img src={arrow} className="arrow" alt="" /> */}
            </p>
          </div>
          <div className="card_2 card2">
            <img src={blog_3} alt="" />
            <h3>Herbal medicines that are safe for consumption</h3>
            <p>
            Herbal medicine is very widely used at this time because of its very good for your health...
            </p>
          </div>
          <div className="card_2 card3">
            <img src={blog_2} alt="" />
            <h3>Natural care for healthy facial skin</h3>
            <p>
            A healthy lifestyle should start from now and also for your skin health.
There are some...
            </p>
          </div>
        </div>
      </div>
      <div className="center_button">
        <button className="button">View all</button>
      </div>
    </div>
  );
};

export default Blog;
