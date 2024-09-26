import React from 'react'
import Image from 'next/image';
import avatar from '../../assets/images/Ellipse 2552.png';
import img from '../../assets/images/image 1 (1).png'
import './customer.css'
const index:React.FC = () => {
  return (
    <section>
        <div className="container">
            <div className="customerWrapper">
                <div className="leftCustomer pt-[120px]">
                    <h2 className="text-[40px] font-bold mb-7">
                        Customer Review
                    </h2>
                    <p className="text-[14px] text-[#828282] font-normal mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>
                    <div className="avatarCard">
                        <div className="flex items-center gap-4">
                            <Image src={avatar}  className="w-[50px] h-[50px]" alt="" />
                            <div>
                              <h3 className="text-[20px] text-[#90E051] font-semibold">
                                Abdur Rahman</h3>
                              <p className="text-[16px]">
                                Customer
                              </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <i className="bi bi-arrow-left"></i>
                            <i className="bi bi-arrow-right"></i>
                        </div>
                    </div>
                </div>
                <div className="rightCustomer">
                    <span></span>
                    <Image src={img} alt="" />
                </div>
                <div className="cardOrder">
                    <div className="flex items-center justify-between mb-4"><h2>Order now</h2><h2>10.00$</h2></div>
                    <div className="flex items-center justify-between">
                        <Image src="" alt="" />
                        <Image src="" alt="" />
                        <Image src="" alt="" />
                        <Image src="" alt="" />
                        <Image src="" alt="" />
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum fringilla bibendum. Urna, elit augue urna,
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default index