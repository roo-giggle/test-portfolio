
import "./footer.css";

const Footer = () => {
  return (
    <div className="custom-footer">
      <div className="marquee">
        <div className="marquee-content">
          <span>FLOW</span>
          <span className="star">✺</span>
          <span>FIGMA</span>
          <span className="star">✺</span>
          <span>DESIGNER</span>
          <span className="star">✺</span>
          <span>DEVELOPER</span>
          <span className="star">✺</span>
        </div>
      </div>

      <div className="center-message">
        <h1>LET’S TALK!</h1>
        <p>
          <a href="mailto=rehanurraihan@gmail.com">
            rehanurraihan@gmail.com ↗
          </a>
        </p>
      </div>

      <div className="footer-bottom">
        <p className="copyright">© Rehan Raihan - 2023</p>
        <div className="socials">
          <a href="#">Dribbble</a>
          <a href="#">Behance</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
