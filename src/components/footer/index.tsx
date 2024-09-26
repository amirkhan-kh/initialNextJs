import React from "react";
import Image from "next/image";
import icons from '../../assets/images/Social icon.png'
import footer from "../../assets/images/image 1 (2).png";
import "./footer.css";

const index:React.FC = () => {
  return (
    <footer>
      <Image src={footer} className="footer" alt="" layout="responsive" width={500} height={300} />

      <div className="containerr mx-auto">
        <div className="footerCard mx-auto">
          <div className="footerCard2 ">
            <h2 >Subscribe <br />
            To Our Newsletter</h2>
            <form>
              <input type="text" placeholder="Enter your mail"/>
              <button>Subscrib now</button>
            </form>
            <Image src={icons} alt="" />
          </div>
        </div>
        <div className="container">
        <div className="footerNav">
          <div className="flex gap-20">
            <ul className="ul">
              <li className="textLi"></li>
            </ul>
            <ul className="ul">
              <li className="textLi">
                <h3>Explore</h3>
              </li>
              <li className="textLi">
                <i className="bi bi-chevron-right"></i>Home
              </li>
              <li className="textLi">
                <i className="bi bi-chevron-right"></i>About us
              </li>
              <li className="textLi">
                <i className="bi bi-chevron-right"></i>Contact us
              </li>
            </ul>
            <ul className="ul">
              <li className="textLi">
                <h3>About</h3>
              </li>
              <li className="textLi">
                <i className="bi bi-chevron-right"></i>Blog
              </li>
              <li className="textLi">
                <i className="bi bi-chevron-right"></i>Team
              </li>
              <li className="textLi">
                <i className="bi bi-chevron-right"></i>Our Menu
              </li>
            </ul>
          </div>
          <ul className="ul">
            <li className="textLi">
              <h3>3rd Floor, Office 45</h3>
            </li>
            <li className="textLi">
              <i className="bi bi-geo-alt"></i>3rd Floor, Office 45
            </li>
            <li className="textLi">
              <i className="bi bi-telephone"></i>00965 - 96659986
            </li>
            <li className="textLi">
              <i className="bi bi-chat-dots"></i>M.Alyaqout@4house.Co
            </li>
            <li className="textLi">
              <i className="bi bi-clock"></i>Sun - Sat / 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
