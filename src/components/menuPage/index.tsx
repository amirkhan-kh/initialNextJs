"use client";
import React from "react";
import Image from "next/image";
import star from "../../assets/icons/star-removebg-preview.png";
import big from "../../assets/images/hg5-removebg-preview.png";
import CapCheef from "../../assets/icons/Group.png";
import FastFood from "../../assets/icons/Group (1).png";
import cupe from "../../assets/icons/Group (2).png";
import Pizza from "../../assets/icons/Group (3).png";
import { menuCard } from "../../mock/index.js";
import "./page.css";

const index: React.FC = () => {
  return (
    <section>
      <div className="container">
      <div className="flex items-center justify-center py-[70px]">
            <div className="flex gap-8">
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
        <div className="tab">
          <Image src={big} className="bigImgg" alt="big-image" />
          <div className="greenMenu bg-[#90E051] p-8 rounded-[30px]">
            <div className="flex">
              <form className="bg-white rounded-2xl px-4">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Search" className="border border-[#fff]" />
              </form>
              <span></span>
            </div>
            <div className="rightMenud">
              <div className="cardLeftMenud">
                {menuCard.map((item, index) => {
                  return (
                    <div key={index} className="burgercardd">
                      <Image src={item.img} alt={item.name} />
                      <div className="text-left pt-20">
                        <h2 className="text-[18px] font-bold mb-1">
                          {item.name}
                        </h2>
                        <h3 className="text-[12px] font-semibold mb-1">
                          {item.description}
                        </h3>
                      </div>
                      <div className="flex gap-[4px] mb-1 justify-between w-[100%]">
                        <div className="flex gap-[4px] mb-1">
                          <Image src={star} className="w-4 h-4" alt="star" />
                          <p className="text-[14px]">{item.status}</p>
                        </div>
                        <span></span>
                      </div>
                      <div className="flex items-center justify-between gap-[70px]">
                        <h4>
                          {item.price}.{item.centPrice}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
