"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { menuCard } from "../../mock/index.js";
import CapCheef from "../../assets/icons/Group.png";
import FastFood from "../../assets/icons/Group (1).png";
import cupe from "../../assets/icons/Group (2).png";
import Pizza from "../../assets/icons/Group (3).png";
import star from "../../assets/icons/star-removebg-preview.png";
import gam1 from "../../assets/images/hg5-removebg-preview.png";
import gam2 from "../../assets/images/hg4-removebg-preview.png";
import "./menu.css";

const Menu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isOverflow, setIsOverflow] = useState(false);
  const handleHide = () => {
    setIsVisible(false);
    setIsOverflow(true);
  };
  return (
    <section>
      <div className="container">
        <div className="menuSection">
          <div id="top" className="">
            <div id="top2" className="">
              <div className="kard">
                <Image src={CapCheef} alt="" />
                <p>Professional Chefs</p>
                <h2>420</h2>
              </div>
              <div className="kard">
                <Image src={FastFood} alt="" />
                <p>Items Of Food</p>
                <h2>320</h2>
              </div>
              <div className="kard">
                <Image src={cupe} alt="" />
                <p>Years Of Experienced</p>
                <h2>30+</h2>
              </div>
              <div className="kard">
                <Image src={Pizza} alt="" />
                <p>Happy Customers</p>
                <h2>220</h2>
              </div>
            </div>
          </div>
          <div className="menuWrapper">
            <div className="leftMenu ms-[-50px]">
              <div className="dashed">
                <Image
                  className="w-[130px] h-[100px] ms-[350px]"
                  src={gam2}
                  alt=""
                />
                <Image
                  className="w-[130px] h-[100px] ms-[420px] mt-[250px]"
                  src={gam2}
                  alt=""
                />
                <Image
                  className="w-[770px] h-[430px] ms-[-90px]"
                  src={gam1}
                  alt=""
                />
                <div className="menuBtn">
                  ME <br />
                  NU
                </div>
              </div>
            </div>
            <div className="w-[50%]  h-[700px] relative">
              <div className="rightMenu">
                <div className={`cardLeftMenu ${isOverflow ? "overflowAuto" : ""}`}>
                  {menuCard.map((item, index) => {
                    return (
                      <div key={index} className="burgercard">
                        <Image src={item.img} alt="" />
                        <div className="text-left pt-16">
                          <h2 className="text-[18px] font-bold mb-4">
                            {item.name}
                          </h2>
                          <h3 className="text-[14px] font-semibold mb-6">
                            {item.description}
                          </h3>
                        </div>
                        <div className="flex  ms-[-150px] gap-[4px] mb-4">
                          <Image src={star} className="w-6 h-6" alt="" />
                          <p className="text-[14px]">{item.status}</p>
                        </div>
                        <div className="flex items-center justify-between gap-[120px]">
                          <h4 className="">
                            $ {item.price}.{item.centPrice}
                          </h4>
                          <div className="flex items-center justify-between bg-[#90E051] rounded-[50%] px-2 text-[#fff] text-[15px]">
                            <h1>+</h1>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                
                </div>
              </div>
              {isVisible && (
                <div className="shadow">
                  <button className="showAll" onClick={handleHide}>
                    See All
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
