"use client";
import { useTypewriter } from 'react-simple-typewriter';
import React from 'react';
import Carousel from './corusel';
import './intro.css';

const Index: React.FC = () => {
  const [text] = useTypewriter({
    words: ["22.53", "15.20", "30.10", "45.75", "16.5", "19.60"],
    loop: true, 
    typeSpeed: 150,
    deleteSpeed: 80,
  });

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <h1>
            Tasty Food <span className="text-[#90E051]">Collections</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
          </p>
          <div id="btnn" className="flex gap-4">
            <button className="btn">See All</button>
            <button className="btn2">Menu</button>
          </div>
        </div>
        <div className="right">
          <div className="big"></div>
          <div className="card">
            <Carousel />
          </div>
          <div className="small">
            <h4 className="text-[30px]">${text || ''}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
