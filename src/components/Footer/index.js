import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full p-8 lg:p-16 bg-[#eeeeeede]">
      <div className="w-90% mx-auto ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <div className="">
              <div className=""></div>
              <div className="font-bold text-zinc-800 text-2xl">
                Greencrystal Engineering.
              </div>
            </div>
            <div className="font-light text-zinc-700 text-sm pt-2">
              lore mips uemlo remip suemloremipsuemlor
            </div>
            <div className="font-normal text-zinc-700 text-sm pt-2">
              Address of your company in germany. POB 102. Mark Street
            </div>
            <div className=""></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div className="">
              <div className="font-bold text-zinc-800 text-md pt-3">
                Quick link
              </div>
              <div>
                <Link
                  to="/"
                  className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700"
                >
                  Home
                </Link>
                <Link
                  to="/solutions"
                  className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700"
                >
                  Solutions
                </Link>
                <Link
                  to="/about"
                  className=" py-2 hidden cursor-pointer pr-8  pr mt-4  font-light text-sm text-zinc-700"
                >
                  About
                </Link>
                <Link className=" hidden py-2 cursor-pointer pr-8  pr mt-4  font-light text-sm text-zinc-700">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="">
              <div className="font-bold text-zinc-800 text-md pt-3">
                Contact Us
              </div>
              <div>
                <div className=" flex flex-row py-2 cursor-pointer pr-8  pr mt-4  font-light text-sm text-zinc-700">
                  <AiFillPhone size={20} />
                  <div> +2340919484903</div>
                </div>
                <div className="flex flex-row py-2 cursor-pointer pr-8  pr mt-4  font-light text-sm text-zinc-700">
                  <AiFillMail size={20} />
                  <div className="ml-2">enquiry@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] rounded-lg w-full bg-zinc-300 mt-4"></div>
        <div className="text-sm font-light text-center pt-4">
          Copyright 2022{" "}
          <span className="font-bold">Greencrystal Engineering</span> Ltd.
          Alright reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
