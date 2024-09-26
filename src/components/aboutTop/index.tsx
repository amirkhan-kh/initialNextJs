import React from 'react'
import Image from 'next/image';
import double from '../../assets/images/hg4-removebg-preview.png';
import double2 from '../../assets/images/hg3-removebg-preview.png';
import iPhone from '../../assets/images/iPhone 12 Pro (Wooden Hands).png'
import './abouttop.css'
const index:React.FC = () => {
  return (
    <section>
        <div className="container">
            <div className="aboutTop">
                <div className="aboutLeft">
                    <div className="green">
                        <Image src={double} className="absolute mt-[-67px] w-[100px] ms-[88px] " id="shadowImg" alt="" />
                        <Image src={double} className="absolute mt-[-90px] w-[140px] " id="shadowImg" alt="" />
                        <Image src={iPhone} className=" w-[190px] h-[370px] ms-[290px] translate-y-[-50px]" alt="" />
                        <Image src={iPhone} className="absolute w-[250px] h-[480px] ms-[140px] mt-[-500px]" alt="" />
                    </div>
                </div>
                <div className="aboutRight">
                    <div className="greenSmall">
                        <h3>Now With Your Favotite <br />Mobile Applivation In <br /> Your Pocket</h3>
                        <div className="flex items-center justify-between gap-[79%]">
                            <span></span>
                            <Image src={double2} className="w-[230px] translate-y-[-140px]" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index;