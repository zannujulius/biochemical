import Button from "../../components/Button";
import Layout from "../../components/Layout";
import "./style.css";
import Flask from "../../assets/svg/flask.svg";
import Lab from "../../assets/svg/lab.svg";
import Process from "../../assets/svg/process.svg";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { focusData } from "./data";
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
      <div className="w-[100vw] lg:h-[80vh] flex flex-row items-center justify-center relative z-[40] position-relative bg-gradient-to-r from-[#111214] to-[#072912]">
        <div className="flex align-center justify-center lg:w-[60%] sm:pt-[150px] sm:pb-[40px]  pt-[150px] pb-[50px] gap-4 lg:gap-16 px-4 ">
          <div className="sm:pt-[50px]">
            <div className="text-left font-bold md:text-center text-white text-md">
              Services
            </div>
            <div className="w-[100%] text-4xl text-left font-bold md:text-center text-white leading-[60px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
            <div className="text-1xl pt-4 font-light lg:font-extralight md:text-center text-left text-white">
              Lorem Ipsum is simply been the industry'. been the industry'.
              Lorem Ipsum is simply been the industry
            </div>
            <div className="flex flex-row items-start md:justify-center mt-8">
              <div
                className="mr-8"
                onClick={() =>
                  window.scroll({
                    top: 500,
                    left: 0,
                    behavior: "smooth",
                  })
                }
              >
                <Button
                  text={"Learn more"}
                  bg={"bg-primary"}
                  color={"text-white"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[200px] flex flex-row item-cemter justify-center pt-10">
        <div className="layout-text mt-16  lg:text-[80px] text-[50px]  font-bold text-zinc-400 lg:mt-[-10px]  text-center">
          <span className="hero-caption mt-4 text-center" ref={element} />
        </div>
      </div>

      {/* section */}
      <div className="lg:w-[80%] mx-auto mt-16 z-[40]">
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
      <div className="mt-16  z-[40]">
        <div className="text-xl text-center text-primary font-bold pt-6">
          Our Focus.
        </div>
        <div className="text-center text-md p-2 font-light text-zinc-800 pt-2 w-full md:w-[70%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
      </div>
      {/* section */}
      <div className="bg-[#f5f6ff] mt-10  z-[40] py-8" id="#services">
        <div className="lg:w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 mt-4">
          {focusData.map((i, index) => (
            <div className="" key={i.id}>
              <div
                className="p-8 flex flex-col justify-center"
                // data-aos="fade-right"
                // data-aos-duration="2000"
              >
                <div className="">
                  <div className="text-lg font-normal text-primary">
                    {i.title}
                  </div>
                  <div className="text-3xl font-bold text-zinc-800">
                    Lorem Ipsum is simply dummy.
                  </div>
                  <div className="text-md lg:text-sm font-normal lg:font-normal text-zinc-600 pt-4">
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
    </Layout>
  );
};

export default Solutions;
