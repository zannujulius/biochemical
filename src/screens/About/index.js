import Layout from "../../components/Layout";
import "./styles.css";
import Research from "../../assets/svg/research.svg";
import Button from "../../components/Button";
import React, { useEffect } from "react";
import { financingData, projectData } from "../Home/data";
import { GiCheckMark } from "react-icons/gi";
import { BsArrowRightShort } from "react-icons/bs";
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
          <div className="text-white md:text-center lg:text-center text-left font-bold text-lg pt-10 md:pt-0 lg:pt-0 ">
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

      <div className="w-[80%] mx-auto mt-16 lg:mb-32 hidden">
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
            <div className="font-normal text-zinc-700 pt-3 ">
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
      <div className="solution-bg lg:w-[80%] rounded-sm mx-auto my-20 p-8  z-[40] hidden">
        <div className=" h-full mx-auto flex flex-wrap flex-row items-center justify-between">
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
      <div className="w-[90%] lgw-[80%] mx-auto mt-32 mb-32 hidden">
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
      <div className="w-[90%] lgw-[80%] mx-auto mt-32 mb-16 hidden">
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
              Low Carbon Biofuels
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
