import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Modal from "../Modal";

const Navbar = () => {
  let location = useLocation();
  const [showNav, setshowNav] = useState(false);
  const [modal, setmodal] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 830) {
        setshowNav(true);
      } else {
        setshowNav(false);
      }
    });
    return () => {};
  }, []);
  return (
    <div
      className={
        showNav || location.pathname == "/about"
          ? "w-full px-3 py-4 fixed navbar z-50 bg-white drop-shadow-md"
          : `w-full p-2 fixed navbar z-50`
      }
    >
      {modal && <Modal closeModal={setmodal} />}
      <div className="w-[95%] mx-auto pt-3 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-start">
          <div className="w-[50px] hidden h-[50px] rounded-full drop-shadow-md border-2 border-white"></div>
          <Link
            to="/"
            className="brand text-2xl font-normal mx-2 text-zinc-800"
          >
            BioChemical
          </Link>
        </div>
        <div className="flex flex-row items-center ">
          <div className="hidden md:flex items-center">
            <Link
              className="cursor-pointer mr-16 text-[15px] font-light text-zinc-800 hover:border-b-2 hover:border-primary hover:text-primary transition-all p-2"
              to="/"
            >
              Home
            </Link>
            <Link
              className="cursor-pointer mr-16 text-[15px] font-light text-zinc-800 hover:border-b-2 hover:border-primary hover:text-primary transition-all p-2"
              to="/solutions"
            >
              Solutions
            </Link>
            <Link
              className="cursor-pointer mr-16 text-[15px] font-light text-zinc-800 hover:border-b-2 hover:border-primary hover:text-primary transition-all p-2"
              to="/about"
            >
              About
            </Link>
            <Link
              className=" hidden cursor-pointer mr-16 text-[15px] font-light text-zinc-800 hover:border-b-2 hover:border-primary hover:text-primary transition-all p-2"
              to="/"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden md:hidden" onClick={() => setmodal(true)}>
            <AiOutlineMenu size={30} color={""} />
          </div>
          <div className="flex flex-row items-center hidden">
            <div className="text-zinc-800 font-extralight text-1xl px-1 cursor-pointer">
              EN
            </div>
            <div className="text-zinc-800 font-extralight text-1xl px-1">|</div>
            <div className="text-zinc-800 font-extralight text-1xl px-1 cursor-pointer">
              GR 🇩🇪
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
