import Layout from "../../components/Layout";
import "./styles.css";
import Research from "../../assets/svg/research.svg";
import Button from "../../components/Button";
import React, { useEffect } from "react";
const About = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);
  return (
    <Layout>
      <div className="w-[100vw] h-[100vh] lg:h-[80vh] pt-16 lg:pt-0 md:pt-0 flex flex-row items-center justify-center bg-gradient-to-r from-[#111214] to-[#072912]">
        <div className="px-4 animate__animated animate__fadeInUp">
          <div className="text-white md:text-center lg:text-center text-left font-bold text-lg ">
            About Us.
          </div>
          <div
            className="text-3xl first-letter:text-3xl pt-4 lg:w-[70%] lg:text-center md:text-center mx-auto text-white text-left font-bold leading-[60px] "
            style={{}}
          >
            Some call it Circular Economy, while others see it as the{" "}
            <span className="text-white bg-green-600 px-2 py-1" style={{}}>
              {" "}
              Net Zero goal
            </span>{" "}
            . To many more, it is the{" "}
            <span className="text-white bg-green-600 px-2 py-1" style={{}}>
              Energy Transition
            </span>{" "}
            and to even many others,{" "}
            <span className="text-white bg-green-600 px-2 py-1" style={{}}>
              Sustainability
            </span>{" "}
            captures it best.
          </div>
          <div className="text-1xl pt-4 font-light lg:w-[70%] mx-auto lg:font-extralight md:text-center lg:text-center text-left text-white ">
            Whichever shapes or forms the{" "}
            <span className="font-semibold"> Green Economy</span> comes to you,
            we help you crystallize your strategy and engineer it to reality.
            Your clients and end customers are looking forward to a greener
            world. We help you create it not just faster but also
            <span className="font-semibold uppercase"> GREENER</span>.
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto grid gap-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:mt-[-30px] md:mt-[-30px]">
        {Array.from(Array(3)).map((_, i) => (
          <div
            className="bg-white drop-shadow-md lg:[250px] rounded-sm p-5 "
            key={i}
          >
            <div className="h-[50px] w-[50px] ">
              <img src={Research} alt="image" className="" />
            </div>
            <div className="pt-6 font-bold">Lorem Ipsum is simply dummy </div>
            <div className="text-MD text-zinc-800 font-normal pt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </div>
          </div>
        ))}
      </div>
      <div className="w-[80%] mx-auto mt-16 lg:mb-32">
        <div className="w-full flex flex-row items-center">
          <div className="w-[150px] text-zinc-800">Our Journey.</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="w-full text-xl pt-3 font-bold text-zinc-800 grid grid-cols-1 lg:grid-cols-2">
          <div className="">
            <div className="w-[200px] h-[200px] ceo-profile "></div>
            <div className="font-bold text-zinc-800 text-lg pt-2">
              Nate Clark
            </div>
            <div className="font-light text-zinc-500 text-sm ">COO</div>
          </div>
          <div className="">
            <div className="font-bold text-lg">Lorem Ipsum is simply</div>
            <div className="font-normal text-md text-zinc-700 pt-3 italic">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining{" "}
              <span className="text-primary font-bold text-2xl">
                essentially
              </span>{" "}
              unchanged. It was{" "}
              <span className="text-primary font-bold text-2xl">
                essentially
              </span>{" "}
              popularised in the 1960s with{" "}
              <span className="text-primary font-bold text-2xl">
                essentially
              </span>{" "}
              the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum
            </div>
          </div>
        </div>
      </div>
      <div className="solution-bg w-full my-20 p-8  z-[40] ">
        <div className="lg:w-[90%] h-full mx-auto flex flex-wrap flex-row items-center justify-between">
          <div className="">
            <div className="text-2xl font-bold text-white  underline ">
              Need a solution ?
            </div>
            <div className="text-lg font-light text-white lg:w-[400px] pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </div>
          </div>

          <div className="w-[200px] mt-4 lg:mt-0">
            <a href="mailto:zannujulius14@gmail.com?subject=Have a project for biotech">
              <Button
                text={"Send a mail"}
                border={"border-white"}
                color={"text-white"}
                bg={"bg-transparent"}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-[90%] lgw-[80%] mx-auto mt-32 mb-32 ">
        <div className="w-full flex flex-row items-center">
          <div className="lg:w-[150px] text-zinc-800">Services .</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Some of the service we offer.
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-rows-4 lg:grid-cols-3  h-[500px] pt-6">
          <div className="row-span-2 area relative">
            <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
              Consulting
            </div>
          </div>
          <div className="row-span-2 area relative">
            <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
              Project Development
            </div>
          </div>
          <div className="row-span-2 area relative">
            <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
              Project Financing
            </div>
          </div>
          <div className="row-span-2 area relative">
            <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
              Project Management
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] lgw-[80%] mx-auto mt-32 mb-16">
        <div className="w-full flex flex-row items-center">
          <div className="lg:w-[150px] text-zinc-800">Our Sectors</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Some of the economic sector.
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-rows-4 lg:grid-cols-3 h-[500px] ">
          <div className="row-span-2 sector relative">
            <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
              Low Carbon Fuels
            </div>
          </div>
          <div className="row-span-2 sector relative">
            <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
              Solar and Wind
            </div>
          </div>
          <div className="row-span-2 sector relative">
            <div className="absolute bottom-5 left-2 text-white font-normal text-lg ">
              Food and Pharmaceuticals
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
