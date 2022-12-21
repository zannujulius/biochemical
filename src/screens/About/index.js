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
      <div className="w-[100vw] h-[90vh] bg-indigo-700 about-cover flex flex-row items-center justify-center">
        <div>
          <div className="text-white text-center font-bold text-lg">
            About Us.
          </div>
          <div
            className="w-[100%] text-5xl text-center font-bold text-white leading-[60px]"
            style={{}}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </div>
          <div className="text-1xl pt-4 font-light lg:font-extralight text-center text-white w-[80%] mx-auto">
            Lorem Ipsum is simply been the industry'. been the industry'. Lorem
            Ipsum is simply been the industry
          </div>
        </div>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto grid gap-10 grid-cols-1 lg:grid-cols-3 relative top-[-80px]">
        {Array.from(Array(3)).map((_, i) => (
          <div
            className="bg-white drop-shadow-md h-[250px] rounded-sm p-5"
            key={i}
          >
            <div className="h-[60px] w-[60px] ">
              <img src={Research} alt="image" className="" />
            </div>
            <div className="pt-6 font-bold">Lorem Ipsum is simply dummy </div>
            <div className="text-sm text-zinc-800 font-light pt-1">
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
        <div className="w-full text-xl pt-3 font-bold text-zinc-800 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="">
            <div className="w-[200px] h-[200px] ceo-profile "></div>
            <div className="font-bold text-zinc-800 text-lg pt-2">
              Nate Clark
            </div>
            <div className="font-light text-zinc-500 text-sm ">
              Cheif Lab Scientist ( BioChemical)
            </div>
          </div>
          <div className="">
            <div className="font-bold text-lg">Lorem Ipsum is simply</div>
            <div className="font-extralight text-md text-zinc-700 pt-3 italic">
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
            <div className="text-3xl font-bold text-white  underline ">
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
          <div className="lg:w-[150px] text-zinc-800">Our Sectors</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Some of the economic sector.
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-rows-3 lg:grid-cols-3  h-[500px] pt-6">
          <div className="row-span-2 area relative">
            <div className="absolute bottom-5 left-10 text-white font-bold text-lg ">
              Agriculture
            </div>
          </div>
          <div className="row-span-2 area relative">
            <div className="absolute bottom-5 left-10 text-white font-bold text-lg ">
              Medicine
            </div>
          </div>
          <div className="row-span-2 area relative">
            <div className="absolute bottom-5 left-10 text-white font-bold text-lg ">
              Research
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
