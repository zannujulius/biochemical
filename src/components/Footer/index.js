import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full px-8 py-6 lg:p-16 bg-zinc-800">
      <div className="lg:w-80% mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <div className="">
              <div className=""></div>
              <div className="font-bold text-zinc-100 text-2xl">
                Greencrystal Engineering.
              </div>
            </div>
            <div className="font-light text-zinc-100 text-sm pt-2">
              lore mips uemlo remip suemloremipsuemlor
            </div>
            <div className="font-normal text-zinc-100 text-sm pt-2">
              Address of your company in germany. POB 102. Mark Street
            </div>
            <div className="hidden">
              <div className="flex mt-4">
                <Link
                  to={{
                    pathname: "/",
                    target: "_blank",
                  }}
                  className="px-2 m-2 d-inline"
                >
                  <BsFacebook color="dodgerblue" />
                </Link>
                <Link className="px-2 m-2 d-inline">
                  <BsTwitter color="dodgerblue" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-2">
            <div className="">
              <div className="font-bold text-zinc-100 text-md pt-2">
                Quick link
              </div>
              <div>
                <Link
                  to="/"
                  className="py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className=" py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="  py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
                >
                  About
                </Link>
                <Link className=" hidden py-1 cursor-pointer pr-8  pr mt-2  font-light text-sm text-zinc-100">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="">
              <div className="font-bold text-zinc-100 text-md pt-2">
                Contact Us
              </div>
              <div>
                <div className=" flex flex-row py-1 cursor-pointer pr-8  pr mt-2  font-light text-sm text-zinc-100">
                  <AiFillPhone size={20} />
                  <div> +2340919484903</div>
                </div>
                <div className="flex flex-row py-1 cursor-pointer pr-8  pr mt-2  font-light text-sm text-zinc-100">
                  <AiFillMail size={20} />
                  <div className="ml-2">enquiry@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] rounded-lg w-full bg-zinc-300 mt-2"></div>
        <div className="text-sm text-zinc-100 font-light text-center pt-4">
          Copyright 2022{" "}
          <span className="font-bold text-zinc-100">
            Greencrystal Engineering
          </span>{" "}
          Ltd. Alright reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
