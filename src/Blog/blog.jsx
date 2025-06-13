import React from "react";
import "./blog.css";

const blogData = [
  {
    image: "/src/assets/image 21 (1).png",
    date: "Nov 9, 2023",
    title: "How UX works in web",
    tags: ["UI", "UX"],
  },
  {
    image: "/src/assets/image 21 (2).png",
    date: "Aug 18, 2023",
    title: "Case study - Analysis Application.",
    tags: ["DESIGN", "PRINT"],
  },
  {
    image: "/src/assets/image 21.png",
    date: "Feb 16, 2023",
    title: "3 ways to develop your skill",
    tags: ["FIGMA", "WEB"],
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>✺ Blog</h2>
        <a href="#" className="view-all">view all</a>
      </div>

      {blogData.map((post, index) => (
        <div className="blog-card" key={index}>
          <img src={post.image} alt={post.title} />
          <div className="blog-info">
            <p className="date">{post.date}</p>
            <h3>{post.title}</h3>
            <div className="tags">
              {post.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
          <button className="read-btn">Read</button>
        </div>
      ))}
    </section>
  );
};

export default BlogSection;
