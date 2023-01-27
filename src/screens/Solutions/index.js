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
import { consultData, projectData, financingData } from "../Home/data";
import { BsArrowRightShort } from "react-icons/bs";
const Solutions = () => {
  // useEffect(() => {
  //   window.scroll({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  //   return () => {};
  // }, []);

  const element = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Consulting.",
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
          <div
            className="text-3xl pt-4 lg:w-[70%] lg:text-center md:text-center mx-auto text-left font-bold leading-[60px] "
            style={{}}
          >
            <div className="text-2xl text-white">Services</div>
            <div className="">
              <div className="h-[150px] flex items-center lg:justify-center ">
                <div
                  className="text-5xl pt-[60px] lg:pt-[70px] text-white text-left font-bold leading-[60px] "
                  ref={element}
                />
              </div>

              <div className="text-2xl mt-2 lg:text-2xl text-white text-left pt-4 font-extralight ">
                Whichever shapes or forms the{" "}
                <span className="font-semibold text-green-600">
                  {" "}
                  Green Economy
                </span>{" "}
                comes to you, we help you crystallize your strategy and engineer
                it to reality. Your clients and end customers are looking
                forward to a greener world. We help you create it not just
                faster but also{" "}
                <span className="font-semibold uppercase text-green-600">
                  GREENER.
                </span>
              </div>
              <div className="flex flex-row w-full mt-8 items-center lg:justify-center ">
                <div
                  className=""
                  onClick={() =>
                    window.scroll({
                      top: 800,
                      left: 0,
                      behavior: "smooth",
                    })
                  }
                >
                  <Button
                    text={"Learn more"}
                    bg={"bg-green-600"}
                    color={"text-white"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" h-[200px] flex flex-row item-cemter justify-center pt-10">
        <div className="layout-text mt-16  lg:text-[80px] text-[50px]  font-bold text-zinc-400 lg:mt-[-10px]  text-center">
          <span className="hero-caption mt-4 text-center" ref={element} />
        </div>
      </div> */}
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
      <div className="mt-16 z-[40] hidden">
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
      <div className="hidden  z-[40] pb-8" id="#services">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg md:w-[80%] mx-auto lg:gap-10 mt-8 lg:mt-12 p-3 ">
        <div
          className="h-full p-4 flex flex-col items-start justify-center "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="text-lg text-primary">Consulting</div>
          <div className="text-3xl font-bold text-zinc-800 leading-[40px]">
            The Green Economy has provided us with the possibilities of green
            fuels and products
          </div>
          <div className="text-1xl pt-4 font-normal text-zinc-800 md:w-[90%] py-3 leading-8 ">
            {/* <span className="text-[50px] font-bold italic">“</span> */}
            The Green Economy has provided us with the possibilities of green
            fuels and products. However, it has also presented some challenges
            that are usually specific if not unprecedented. Each renewable and
            low carbon biofuels project is unique and requires tailor made
            solutions. And this is where we come in to provide our clients with
            tested solutions to navigate the less travelled path of green fuels
            and products.
          </div>
          <div className="w-[170px] flex flex-row p-3 rounded-md bg-green-400 items-center justify-center hidden">
            <a
              href="/services#services"
              className="text-sm font-light text-white d-block"
            >
              Our services
            </a>
            <div className="flex flex-row bg-green-400 items-center justify-center ml-4">
              <BsArrowRightShort color="#fff" size={25} />
            </div>
          </div>
        </div>
        <div
          className="p-4 flex items-start shadow-sm rounded-lg bg-white overflow-hidden"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <div className="lg:pt-4">
            <div className="text-zinc-800 text-2xl font-semibold">
              Our clients enjoy the following consulting services amongst
              others:
            </div>
            <div className="">
              {consultData.map((i) => (
                <div className="flex my-4" key={i.id}>
                  <div className="mr-4  flex items-center justify-center ">
                    <GiCheckMark color={"green"} />
                  </div>
                  <div className="text-zinc-700">{i.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* <img
            src={
              "https://images.unsplash.com/photo-1580411402629-e0cdf76f3d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80"
            }
            alt={""}
            className="w-full h-full object-center"
          /> */}
        </div>
      </div>

      {/* section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg md:w-[80%] mx-auto lg:gap-4 mt-8 lg:mt-12 p-3 ">
        <div
          className="h-full p-4 flex flex-col items-start justify-center "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="text-lg text-primary">Project Development</div>
          <div className="text-3xl font-bold text-zinc-800 leading-[40px]">
            We help move your projects from mere ideas to Final Investment
            Decision (FID).
          </div>
          <div className="text-1xl pt-4 font-normal text-zinc-800 md:w-[90%] py-3  leading-8 ">
            {/* <span className="text-[50px] font-bold italic">“</span> */}
            For your renewable and low carbon fuels production plants,
            trustworthy feasibility studies, and a technically sound site
            development process is of utmost importance. We help move your
            projects from mere ideas to Final Investment Decision (FID). The
            availability of the right volume of raw materials, possible
            application areas for biofuels products (biomethane/bio-LNG,
            bioethanol, biodiesel or SAF), the suitability of an area of land
            for the biofuel plant and the issue of reliable offtake points are
            all part of the feasibility analysis. We develop a suitable plant
            concept, covering the issues of energy optimization and by-products
            treatment or valorization. For projects of this level of economic
            and environmental impact, it goes without saying that we help
            coordinate the necessary approval processes with the relevant
            authorities. You can therefore then trust our project timeline and
            cost estimates. Your lenders and investors can trust on our
            projections for decision making.
          </div>
          <div className="w-[170px] hidden  flex-row p-3 rounded-md bg-green-400 items-center justify-center">
            <a
              href="/services#services"
              className="text-sm font-light text-white d-block"
            >
              Our services
            </a>
            <div className="flex flex-row bg-green-400 items-center justify-center ml-4">
              <BsArrowRightShort color="#fff" size={25} />
            </div>
          </div>
        </div>
        <div
          className="p-4 flex items-start shadow-sm rounded-lg bg-white overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="">
            <div className="text-lg text-primary">Project Management</div>
            <div className="text-zinc-800 text-2xl font-semibold">
              Together with our clients, we define the scope of the project at
              the outset and lay out a feasible work plan that is geared towards
              achieving the project objectives.
            </div>
            <div className="text-1xl pt-4 font-normal text-zinc-800 md:w-[90%] py-3  leading-8 ">
              To manage your renewable and low carbon fuels projects, we cover
              the whole spectrum from initiation, planning, control and
              monitoring of such projects in a structured and efficient manner.
            </div>
            <div className="">
              {projectData.map((i) => (
                <div className="flex my-4" key={i.id}>
                  <div className="mr-4 flex items-center justify-center ">
                    <GiCheckMark color={"green"} />
                  </div>
                  <div className="text-zinc-700">{i.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* <img
            src={
              "https://images.unsplash.com/photo-1580411402629-e0cdf76f3d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80"
            }
            alt={""}
            className="w-full h-full object-center"
          /> */}
        </div>
      </div>

      {/* section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg md:w-[80%] mx-auto lg:gap-4 mt-8 lg:mt-12 p-3 ">
        <div
          className="h-full p-4 flex flex-col items-start justify-center "
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="text-lg text-primary">Project Financing</div>
          <div className="text-3xl font-bold text-zinc-800 leading-[40px]">
            We support our clients in ensuring their business meets technical,
            economical, environmental and regulatory requirements to stand a
            good chance of getting funded.
          </div>
          <div className="text-1xl pt-4 font-normal text-zinc-800 md:w-[90%] py-3  leading-8 ">
            {/* <span className="text-[50px] font-bold italic">“</span> */}
            Renewable and Low Carbon Biofuels provide solutions to combat the
            pollution of our planet with unwanted greenhouse gases. They also
            offer great business opportunities for investors and organizations
            in this space. Due diligence activities help validate business
            proposals and proffer risk mitigation measures to ensure successful
            project execution and operation over the project lifecycle.
          </div>
          <div className="w-[170px] hidden  flex-row p-3 rounded-md bg-green-400 items-center justify-center">
            <a
              href="/services#services"
              className="text-sm font-light text-white d-block"
            >
              Our services
            </a>
            <div className="flex flex-row bg-green-400 items-center justify-center ml-4">
              <BsArrowRightShort color="#fff" size={25} />
            </div>
          </div>
        </div>
        <div
          className="p-4 flex items-start shadow-sm rounded-lg bg-white overflow-hidden lg:mt-6"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="">
            {/* <div className="text-lg text-primary">Project Management</div> */}
            <div className="text-zinc-800 text-2xl font-semibold ">
              We therefore provided the following services to our clients to
              help them stand a higher than average chance of Project Financing
              regardless of the size and scope of the project:
            </div>
            <div className="text-1xl pt-4 font-normal text-zinc-800 md:w-[90%] py-3  leading-8 hidden">
              To manage your renewable and low carbon fuels projects, we cover
              the whole spectrum from initiation, planning, control and
              monitoring of such projects in a structured and efficient manner.
            </div>
            <div className="">
              {financingData.map((i) => (
                <div className="flex my-4" key={i.id}>
                  <div className="mr-4 flex items-center justify-center ">
                    <GiCheckMark color={"green"} />
                  </div>
                  <div className="text-zinc-700">{i.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* <img
            src={
              "https://images.unsplash.com/photo-1580411402629-e0cdf76f3d3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80"
            }
            alt={""}
            className="w-full h-full object-center"
          /> */}
        </div>
      </div>

      {/* sectors */}
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
    </Layout>
  );
};

export default Solutions;
