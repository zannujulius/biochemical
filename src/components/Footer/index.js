import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full p-12 lg:p-16 bg-[#eeeeeede]">
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
                <Link className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700">
                  Research
                </Link>
                <Link className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="">
              <div className="font-bold text-zinc-800 text-md pt-3">
                Solutions
              </div>
              <div>
                <Link className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700">
                  Solutions 1
                </Link>
                <Link className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700">
                  Solutions 2
                </Link>
                <Link className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700">
                  Research 3
                </Link>
                <Link className=" py-2 cursor-pointer pr-8  pr mt-4 block font-light text-sm text-zinc-700">
                  Research 3
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[2px] rounded-lg w-full bg-zinc-300 mt-10"></div>
        <div className="text-sm font-light pt-8 text-center">
          Copyright 2022 Biotech Ltd. Alright reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
