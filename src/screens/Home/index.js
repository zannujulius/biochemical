import Button from "../../components/Button";
import Layout from "../../components/Layout";
import "./style.css";
import { BsArrowRightShort } from "react-icons/bs";
import Brand from "../../assets/images/brand.jpg";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Carousel } from "react-responsive-carousel";
import { consultData, financingData, projectData, sectorsData } from "./data";
import { GiCheckMark } from "react-icons/gi";
import Typed from "typed.js";

const Home = () => {
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
        "Circular economy.",
        "Net Zero goal.",
        "Energy Transition.",
        "Sustainability.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(element.current, options);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  const DropDown = () => {
    return Array.from(Array(3)).map((item, index) => (
      <AccordionItem key={index}>
        <AccordionItemHeading>
          <AccordionItemButton>
            {" "}
            Where is the line between art and not art?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          Id aute tempor ad sunt et exercitation nulla duis dolore irure elit
          consectetur laborum reprehenderit veniam nostrud in duis ut duis
          ullamco dolore do adipisicing sed proident nostrud aute ut ea
          cupidatat exercitation sit elit
        </AccordionItemPanel>
      </AccordionItem>
    ));
  };

  const Slider = () => {
    return (
      <Carousel
        showThumbs={false}
        dynamicHeight={true}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showArrows={false}
        swipeable={false}
        transitionTime={2}
      >
        <div className="w-full lg:h-[100vh]" style={{}}>
          <div className="grid grid-col-1 lg:w-[90%] gap-4 mx-auto md:grid-cols-2 lg:gap-32 lg:grid-cols-2 px-4 pt-12 ">
            <div className="lg:pt-20">
              <div className="h-[150px] flex items-center ">
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
              <div className="flex flex-row w-full mt-8 items-center ">
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
                <div className="ml-8 hidden">
                  <Button
                    text={"Learn more"}
                    color={"text-zinc-800"}
                    border={"border-sky-800"}
                  />
                </div>
              </div>
            </div>
            <div
              className="h-[400px] rounded-md shadow-sm sm:mt-[20px] md:mt-[80px] lg:mt-[120px]"
              style={{
                background: `url("https://wallpaperaccess.com/full/4736716.jpg")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
        </div>

        {/* <div>
          <img src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kdXN0cnl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1582489853490-cd3a53eb4530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGluZHVzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    );
  };

  return (
    <Layout>
      <div className="w-screen flex flex-row pt-[90px] items-center justify-between relative">
        <div className="w-full bg-gradient-to-r from-[#111214] to-[#072912] pb-10">
          <Slider />
        </div>
        <div className="grid-col-1 lg:w-[90%] gap-4 mx-auto md:grid-cols-2 lg:gap-16 lg:grid-cols-2 px-4 pt-12 border border-teal-12 hidden">
          <div className="">
            <div
              className="text-5xl pt-[70px] lg:pt-[70px] text-white text-left font-bold leading-[60px]"
              style={{}}
            >
              Lorem Ipsum is simply dummy text of the printing and
            </div>
            <div className="text-2xl text-white text-left pt-4 font-extralight ">
              Lorem Ipsum is simply been the industry'. been the industry'.
              Lorem Ipsum is simply been the industry
            </div>
            <div className="flex flex-row w-full mt-12 items-center ">
              <div
                className=""
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
              <div className="ml-8 hidden">
                <Button
                  text={"Learn more"}
                  color={"text-zinc-800"}
                  border={"border-sky-800"}
                />
              </div>
            </div>
          </div>
          <div className="h-[400px] bg-white rounded-md shadow-sm"></div>
        </div>
      </div>

      {/* section */}
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

      {/* badges */}
      <div className="md:w-[80%] mx-auto gap-8 mt-8 lg:mt-12 p-3">
        <div className="w-full flex flex-row items-center">
          <div className="lg:w-[150px] text-zinc-800">Our Services.</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800 hidden">
          Lorem Ipsum is simply dummy text of the printi dummy text of the
          printing and typesetting industry. Lorem
        </div>
        <div className="grid my-8 grid-cols-1 lg:grid-cols-4 bg-white rounded-lg gap-10">
          {sectorsData.map((i) => (
            <div
              className="lg:h-[100px] bg-gray-100 my-6 p-4 flex align-center justify-center flex-col"
              key={i.id}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="flex align-center justify-center mt-[-60px]">
                <div className="bg-primary w-[70px] h-[70px] pt-5 flex align-center justify-center rounded-full">
                  <div className="h-[30px]">{i.icon}</div>
                </div>
              </div>
              <div className="pt-4">
                <div className="font-bold text-center uppercase">{i.title}</div>
                <div className="pt-2 text-center font-light hidden">
                  {i.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="breaker hidden lg:p-8 p-4 w-full  flex-col items-center justify-center">
        <div className="lg:w-[90%] mx-auto">
          <div>
            <div className="text-white text-sm ">Lorem Ipsum is simply</div>
            <div className="text-2xl font-bold text-white ">
              Lorem Ipsum is simply
            </div>
            <div className="text-md text-zinc-100 font-light lg:w-[50%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the orem Ipsum has been Lorem Ipsum
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the orem Ipsum has been.
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
            {Array.from(Array(4)).map((_, i) => (
              <div
                className="bg-white drop-shadow-lg my-1 lg:my-0 p-4 rounded-lg"
                key={i}
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="flex flex-row items-center">
                  <div className="h-[40px] border-2 border-zinc-300 w-[40px] bg-white ceo-profile rounded-full"></div>
                  <div className="ml-2">
                    <div className="font-bold text-zinc-800 text-sm">
                      Nate Clark
                    </div>
                    <div className="font-light text-zinc-500 text-sm">
                      Lab Scientist
                    </div>
                  </div>
                </div>
                <div className="text-sm text-zinc-800 lg:text-sm font-light pt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem ...
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section */}
      <div className="w-[80%] mx-auto mt-16 mb-16 hidden">
        <div className="w-full flex flex-row items-center">
          <div className="lg:w-[150px] text-zinc-800">Our Business.</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Lorem Ipsum is simply dummy text of the printi dummy text of the
          printing and typesetting industry. Lorem
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-12">
          {Array.from(Array(3)).map((_, i) => (
            <Link
              to={"/project/we"}
              className="h-[auto] md:h-[250px] lg:h-[250px] project-cover w-full shadow-md border-b-4 border-primary"
              key={i}
              // data-aos="fade-up"
              // data-aos-duration="1000"
            >
              <div className="h-[250px] project overflow-hidden hidden ">
                <img
                  src={
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                  }
                  className="w-full h-full transition-all ease-in duration-200 hover:scale-[1.2]"
                />
              </div>
              <div className="p-4">
                <div className="w-full">
                  <div className="text-right font-light pb-2">
                    {moment(Date()).format("ll")}
                  </div>
                </div>
                <div className="text-xl font-bold underline ">
                  Lorem ipsum Lorem Ipsum is simp
                </div>
                <div className="text-md pt-2 font-normal text-zinc-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the orem Ipsum has
                  been.
                </div>
              </div>
            </Link>
          ))}
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

      {/* Team */}
      <div className="w-[80%] mx-auto mt-16 mb-16 hidden">
        <div className="w-full flex flex-row items-center">
          <div className="w-[150px] text-zinc-800">Our Team</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Lorem Ipsum is simply dummy text of the printi dummy text of the
          printing and typesetting industry. Lorem
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 mt-8 gap-8 ">
          {Array.from(Array(4)).map((_, i) => (
            <div
              className="w-full rounded-lg"
              key={i}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="h-[100px] w-[100px] team bg-no-repeat rounded-full drop-shadow-md "></div>
              <div className="font-bold text-sm text-zinc-800 pt-4">
                Nate Clark
              </div>
              <div className="font-light text-zinc-500 text-sm ">
                Lab Scientist
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
