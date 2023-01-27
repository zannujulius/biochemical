import Button from "../../components/Button";
import Layout from "../../components/Layout";
import "./style.css";
import Flask from "../../assets/svg/flask.svg";
import Lab from "../../assets/svg/lab.svg";
import Process from "../../assets/svg/process.svg";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { extraData, focusData, foodData, renewData } from "./data";
import { GiCheckMark } from "react-icons/gi";

const Solutions = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);

  const element = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Engineering Services.",
        "Project Development.",
        "Project Management.",
        "Project Financing.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
    };
    typed.current = new Typed(element.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);
  return (
    <Layout>
      <div className="w-[100vw] h-[100vh] lg:h-[80vh] pt-16 lg:pt-0 md:pt-0 flex flex-row items-center justify-center bg-gradient-to-r from-[#111214] to-[#072912]">
        <div className="px-4 animate__animated animate__fadeInUp">
          <div className="text-white md:text-center lg:text-center text-left font-bold text-lg pt-10 md:pt-0 lg:pt-0 ">
            Services
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
      <div className=" h-[200px] flex flex-row item-cemter justify-center pt-10">
        <div className="layout-text mt-16  lg:text-[80px] text-[50px]  font-bold text-zinc-400 lg:mt-[-10px]  text-center">
          <span className="hero-caption mt-4 text-center" ref={element} />
        </div>
      </div>

      {/* section */}
      <div className="lg:w-[80%] mx-auto mt-16 z-[40] hidden">
        <div className="p-4">
          <div className="w-full flex flex-row items-center ">
            <div className="w-[150px] text-zinc-800">Our Process.</div>
            <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
          </div>
          <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
            Lorem Ipsum is simply dummy text of the printi dummy text of the
            printing and typesetting industry. Lorem
          </div>
        </div>

        <div className="mt-6 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 p-4">
          <div className="p-4 mt-10 lg:mt-0" style={{}}>
            <div className="w-[60px] h-[60px]">
              <img
                className=""
                src={Flask}
                alt="flask"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="text-md pt-2 font-bold text-zinc-800">
              Lorem Ipsum is simply dummy.
            </div>
            <div className="text-md lg:text-sm font-normal lg:font-light text-zinc-600 pt-2">
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="p-4 mt-10 lg:mt-0">
            <div className="w-[55px] h-[55px]">
              <img
                className=""
                src={Lab}
                alt="lab"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="text-lg pt-2 font-bold text-zinc-800">
              Lorem Ipsum is simply dummy.
            </div>
            <div className="text-md lg:text-sm font-normal lg:font-light text-zinc-600 pt-2">
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="p-4 mt-10 lg:mt-0">
            <div className="w-[55px] h-[55px]">
              <img
                className=""
                src={Process}
                alt="process"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className="text-lg pt-2 font-bold text-zinc-800">
              Lorem Ipsum is simply dummy.
            </div>
            <div className="text-md lg:text-sm font-normal lg:font-light text-zinc-600 pt-2">
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 z-[40]">
        <div className="text-xl text-center text-green-600 font-bold pt-6">
          Our Focus.
        </div>
        <div className=" hidden text-center text-md p-2 font-light text-zinc-800 pt-2 w-full md:w-[70%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>

      {/* section */}
      {/* bg-[#f5f6ff] */}
      <div className="  z-[40] pb-8" id="#services">
        <div className="lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 mt-4">
          {focusData.map((i, index) => (
            <div className="" key={i.id}>
              <div
                className="p-8 flex flex-col justify-center"
                // data-aos="fade-right"
                // data-aos-duration="2000"
              >
                <div className="">
                  <div className="pb-3">
                    <div className="">{i.icon}</div>
                  </div>
                  <div className="text-lg font-normal text-primary hidden"></div>
                  <div className="text-3xl font-bold text-zinc-800 ">
                    {i.title}
                  </div>
                  <div className="text-md lg:text-sm font-normal lg:font-normal hidden text-zinc-600 pt-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
                </div>
              </div>
              {/* <div className=" p-8 h-[400px] solution"></div> */}
            </div>
          ))}
        </div>
        {/* NEW */}
        <div className="lg:w-[90%] grid grid-cols-1 lg:grid-cols-2 mx-auto mt-10 gap-20 px-4">
          <div className="">
            <div className="text-2xl text-green-600 font-semibold">
              Renewable and Low Carbon Biofuels
            </div>
            <div className="">
              Hydrogen is primarily used to produce chemical products, such as
              plastics and fertilisers. Well over 90% of this hydrogen
              production is through natural gas, which results in significant
              amounts of CO2 emissions.
            </div>
            <div className="">
              Renewable hydrogen (or Green Hydrogen) can be obtained via
              electrolysis using renewable electricity to split water into
              hydrogen and oxygen. It will play a key role in decarbonising
              sectors where other alternatives might be unfeasible or more
              expensive. It can be used to replace fossil-based hydrogen for
              transport and industrial processes, and to start new industrial
              products, such as green fertilisers and steel. <br />
              We work with our clients operating within the Hydrogen space or of
              any of its derivatives:
            </div>

            {renewData.map((i, index) => (
              <div className="flex my-4" key={index}>
                <div className="mr-4  flex items-center justify-center ">
                  <GiCheckMark color={"green"} />
                </div>
                <div className="text-zinc-700">{i}</div>
              </div>
            ))}
            <div className="">
              Together with our technology partners, we therefore serve clients
              across the globe producing or working along the value chain of the
              following renewable and low carbon biofuels:
            </div>

            {extraData.map((i, index) => (
              <div className="flex my-4" key={index}>
                <div className="mr-4  flex items-center justify-center ">
                  <GiCheckMark color={"green"} />
                </div>
                <div className="text-zinc-700">{i}</div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="text-2xl text-green-600 font-semibold">
              Hydrogen and Derivatives
            </div>
            <div className="">
              Renewable and low carbon biofuels such as bioethanol, biodiesel,
              renewable natural gas (RNG) and sustainable aviation fuel (SAF),
              help lower carbon emissions from transportation particularly
              hard-to-abate sectors such as long-distance flight and long-haul
              heavy-duty trucking.
            </div>

            {renewData.map((i, index) => (
              <div className="flex my-4" key={index}>
                <div className="mr-4  flex items-center justify-center ">
                  <GiCheckMark color={"green"} />
                </div>
                <div className="text-zinc-700">{i}</div>
              </div>
            ))}
            <div className="">
              Together with our technology partners, we therefore serve clients
              across the globe producing or working along the value chain of the
              following renewable and low carbon biofuels:
            </div>

            {extraData.map((i, index) => (
              <div className="flex my-4" key={index}>
                <div className="mr-4  flex items-center justify-center ">
                  <GiCheckMark color={"green"} />
                </div>
                <div className="text-zinc-700">{i}</div>
              </div>
            ))}
          </div>
          <div className="">
            <div className="text-2xl text-green-600 font-semibold">
              Food and Pharma
            </div>
            <div className="">
              There is a growing demand for environmentally friendly food and
              drugs – with focus throughout the value chain. In these two
              different but related industries, process development tends to be
              not only lengthy, complex due to regulatory requirements, but also
              expensive. Combined with the need to ensure lower carbon is
              emitted during the whole process, the incentives for a greener
              food and pharma industry are even higher. For clients in this
              sector, we provide services that help them meet the Quality
              Requirements of the authorized regulatory bodies and also
            </div>

            {foodData.map((i, index) => (
              <div className="flex my-4" key={index}>
                <div className="mr-4  flex items-center justify-center ">
                  <GiCheckMark color={"green"} />
                </div>
                <div className="text-zinc-700">{i}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 mt-4 hidden ">
          <div className=" p-8 h-[400px] flex flex-col justify-center">
            <div className="">
              <div className="text-lg font-normal text-primary">
                Food and Pharmaceuticals
              </div>
              <div className="text-3xl font-bold text-zinc-800">
                Lorem Ipsum is simply dummy.
              </div>
              <div className="text-md lg:text-sm font-normal lg:font-light text-zinc-600 pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          {/* <div className=" p-8 h-[400px] solution1"></div> */}
        </div>
        <div className="lg:w-[80%] mx-auto grid grid-cols-1  lg:grid-cols-2 mt-4 hidden">
          <div className=" p-8 h-[400px] flex flex-col justify-center">
            <div className="">
              <div className="text-lg font-normal text-primary">
                Solar and Wind
              </div>
              <div className="text-3xl font-bold text-zinc-800">
                Lorem Ipsum is simply dummy.
              </div>
              <div className="text-md lg:text-sm font-normal lg:font-light text-zinc-600 pt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </div>
            </div>
          </div>
          {/* <div className=" p-8 h-[400px] solution2"></div> */}
        </div>
      </div>

      <div className="solution-bg w-full my-20 p-8 z-[40] hidden">
        <div className="lg:w-[90%] h-full mx-auto flex flex-wrap flex-row items-center justify-between ">
          <div className="">
            <div className="text-3xl font-bold text-white  underline ">
              Need a solution ?
            </div>
            <div className="text-lg font-light text-white lg:w-[400px] pt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when
            </div>
          </div>

          <div className=" w-[200px] mt-10 lg:mt-0">
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

export default Solutions;
