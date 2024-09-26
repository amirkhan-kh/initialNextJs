import React from 'react'
import Image from 'next/image';
import sal from '../../assets/images/image 2 (1).png';
import circle from '../../assets/images/Group 1000002255.png';
import rotate from '../../assets/images/pngfind 1.png'
import './about.css'
const index:React.FC = () => {
  return (
    <section>
        <div className="container">
            <div className="about">
                <div className="about1 ">
                </div>
                <div className="about1">
                    <Image src={sal} className="sal" alt="" />
                    <Image src={circle} className="circle" alt="" />
                </div>
                <div className="infoCard">
                    <h2>About Us</h2>
                    <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                </div>
                <Image src={rotate} className="rotateImg" alt="" />
            </div>
        </div>
    </section>
  )
}

export default index