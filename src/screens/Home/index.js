import Button from "../../components/Button";
import Layout from "../../components/Layout";
import "./style.css";
import { BsArrowRightShort } from "react-icons/bs";
import Brand from "../../assets/images/brand.jpg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);

  return (
    <Layout>
      <div className=" w-screen flex flex-row py-[90px]  items-center justify-between relative  hero-cover">
        {/* <div className="hero-cover h-full absolute bg-teal-800 w-full"></div> */}
        <div className="w-full flex flex-row items-center justify-between px-4 pt-12">
          <div className="w-[100%] lg:w-[60%] mx-auto">
            <div
              className=" text-5xl pt-[70px] lg:pt-[100px] text-white  text-center font-bold  leading-[60px] animate__animated animate__fadeInUp"
              style={{}}
            >
              Lorem Ipsum is simply dummy text of the printing and
            </div>
            <div className="text-2xl text-white text-center pt-4 font-extralight lg:w-[70%] mx-auto animate__animated animate__fadeInUp">
              Lorem Ipsum is simply been the industry'. been the industry'.
              Lorem Ipsum is simply been the industry
            </div>
            <div className="flex flex-row w-full mt-12 items-center justify-center">
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
        </div>
      </div>
      {/* Parnter */}

      {/* section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg md:w-[80%] mx-auto gap-16 mt-8 lg:mt-12 p-3 ">
        <div className="" data-aos="fade-right" data-aos-duration="1000">
          <div className="h-[70px]"></div>
          <img
            src="https://img.freepik.com/free-photo/workplace-results-professional-report-accounting-during_1418-61.jpg?w=2000"
            alt=""
          />
        </div>
        <div
          className="h-full p-4 flex flex-col items-start justify-center "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="text-lg text-primary">Consulting</div>
          <div className="text-4xl font-bold text-zinc-800 leading-[40px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </div>
          <div className="text-1xl pt-4 font-extralight text-zinc-800 md:w-[90%] py-3  leading-8 ">
            {/* <span className="text-[50px] font-bold italic">“</span> */}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </div>
          <div className="w-[170px] flex flex-row p-3 rounded-md bg-primary items-center justify-center">
            <div className="text-sm font-light text-white">Our services</div>
            <div className="flex flex-row bg-primary items-center justify-center ml-4">
              <BsArrowRightShort color="#fff" size={25} />
            </div>
          </div>
        </div>
      </div>
      {/* section */}

      <div className="bg-black p-2">
        <div className="w-[80%] mx-auto mt-16  ">
          <div className="w-full flex flex-row items-center">
            <div className="lg:w-[150px] text-white">Our Approach.</div>
            <div className="h-[2px] rounded-lg w-full bg-white "></div>
          </div>
          <div className="lg:w-[500px] text-xl pt-3 font-bold text-white">
            Lorem Ipsum is simply dummy text of the printi dummy text of the
            printing and typesetting industry. Lorem
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-8">
            {Array.from(Array(3)).map((_, i) => (
              <div
                className="h-[400px] border-[#f2f4fd] border-[1px] w-full rounded-lg"
                key={i}
              >
                <div className="w-full h-[250px] approach"></div>
                <div className="p-4 text-md font-light text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the orem Ipsum has
                  been t
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Aproach process */}
      <div className="w-full process mb-16  p-8 overflow-hidden">
        <div className="lg:w-[90%] w-full mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2">
          <div className=" mx-auto lg:w-[80%]">
            {["Plan", "Design", "Build"].map((i, index) => (
              <div className="w-full mt-10" key={index}>
                <div className={` drop-shadow-sm rounded-lg p-4 bg-white`}>
                  <div className="text-zinc-700 font-bold text-2xl">{i}</div>
                  <div className="flex flex-row align-items-center mt-6 justify-between">
                    <div className=" text-sm uppercase text-gray-400 font-light">
                      step 01
                    </div>
                    <div className="text-sm uppercase text-gray-400 text-end font-light">
                      Lorem Ipsum is simply dummy text
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full">
            <div
              className="text-3xl font-bold text-zinc-700"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Get to know <br /> how we work
            </div>
            <div
              className="mt-2 text-zinc-400 font-light"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {" "}
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div
              className="rounded-lg drop-shadow-sm p-4 lg:w-[60%] mt-16 relative bg-white h-[250px] process-card"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div className="text-white text-bold text-2xl">
                Satisfied clients
              </div>
              <div className="text-white text-extrabold text-5xl mt-4">80%</div>
              <div className="text-white text-bold text-md mt-4 ">
                More than 1,702 users are Satisfied with our financial services
              </div>
              <div className="absolute bottom-3 right-6">
                <Button text={"Learn more"} height={"33px"} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="breaker lg:p-8 p-4 w-full flex flex-col items-center justify-center">
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
                data-aos-duration="1000"
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
      <div className="w-[80%] mx-auto mt-16 mb-16 ">
        <div className="w-full flex flex-row items-center">
          <div className="lg:w-[150px] text-zinc-800">Our Project.</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Lorem Ipsum is simply dummy text of the printi dummy text of the
          printing and typesetting industry. Lorem
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-8">
          {Array.from(Array(3)).map((_, i) => (
            <Link
              to={"/project/we"}
              className="h-[400px] project-cover border-[#ededed] border-2 w-full rounded-lg"
              key={i}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="h-[250px] project overflow-hidden ">
                <img
                  src={
                    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
                  }
                  className="w-full h-full transition-all ease-in duration-200 hover:scale-[1.2]"
                />
              </div>
              <div className="p-4">
                <div className="text-xl pt-3 font-bold text-zinc-800">
                  Lorem ipsum
                </div>
                <div className="text-sm pt-2 font-light text-zinc-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the orem Ipsum has
                  been.
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="w-[80%] mx-auto mt-16 mb-16">
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
