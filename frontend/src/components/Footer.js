import React, { useState } from "react";

import paymentIcon from "../assest/payment.png";
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-[#F5F5F3] p-8">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6  gap-10 ml-20 mr-20 ">
        <div className="col-span-2">
          <h3 className="text-xl font-bodyFont font-semibold mb-6">PT Shop</h3>
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2">
              <a href="" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-white cursor-pointer text-lg rounded-full flex justify-center items-center bg-black duration-300">
                  <FaYoutube />
                </li>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-white cursor-pointer text-lg rounded-full flex justify-center items-center bg-black duration-300">
                  <FaGithub />
                </li>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-white cursor-pointer text-lg rounded-full flex justify-center items-center bg-black duration-300">
                  <FaFacebook />
                </li>
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <li className="w-7 h-7 bg-primeColor text-white cursor-pointer text-lg rounded-full flex justify-center items-center bg-black duration-300">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bodyFont font-semibold mb-6">Support</h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Mindx Quang Trung, Gò Vấp, Tp. HCM
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              phananhtu506@gmail.com
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              0862.708.510
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              FB: Phan Anh Tú
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              @pat_0181
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bodyFont font-semibold mb-6">Account</h3>
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              My Account
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Login / Register
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Cart
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Whishlist
            </li>
            <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
              Shop
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <h3 className="text-xl font-bodyFont font-semibold mb-6">
            Subscribe
          </h3>
          <div className="w-full">
            <p className="text-center mb-4">Get 20% off your fist order</p>
            <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
              <div className="flex flex-col w-full">
                <input
                  className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                  type="text"
                  placeholder="Insert your email ...*"
                />
              </div>
              <button className="bg-white text-lightText w-[50%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide">
                Subscribe
              </button>
            </div>

            <img className="w-[80%] lg:w-[60%] mx-auto " src={paymentIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
