import Button from "../../components/Button";
import Layout from "../../components/Layout";
import "./style.css";
import { BsArrowRightShort } from "react-icons/bs";
import Brand from "../../assets/images/brand.jpg";
import React, { useEffect } from "react";

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
      <div className="h-[80vh] w-screen flex flex-row items-center justify-between relative">
        <div className="hero-cover h-full absolute bg-teal-800 w-full"></div>
        <div className="grid w-full absolute grid-cols-1 gap-6 md:grid-cols-2 items-center justify-between px-4 lg:px-10 pt-12">
          <div className="px-2 pt-[450px] lg:pt-[40px]">
            <div
              className="w-[100%] text-5xl font-bold text-zinc-800 leading-[60px]"
              style={{}}
            >
              Lorem Ipsum is simply dummy text of the printing and
            </div>
            <div className="text-1xl pt-4 font-extralight text-zinc-800 w-[80%]">
              Lorem Ipsum is simply been the industry'. been the industry'.
              Lorem Ipsum is simply been the industry
            </div>
            <div className="grid grid-cols-2 md:w-[400px] mt-12">
              <div className="">
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
          <div className="border-2 border-white w-full h-full">
            <div className="w-[100%] h-[400px]"></div>
          </div>
        </div>
      </div>
      {/* Parnter */}
      <div className="flex flex-col items-center justify-center pb-10 ">
        <div className="text-xl text-primary">Our Partners.</div>
        <div className="text-center text-lg font-light text-zinc-800 pt-4 w-full md:w-[70%] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </div>
        <div className="pt-5 md:w-[80%] hidden lg:grid  grid-col-2 md:grid-cols-6">
          {Array.from(Array(6)).map((_, i) => (
            <div
              key={i}
              className="flex mx-4 w-300px flex-row items-center overflow-hidden "
            >
              <div className="w-[100px] hidden">
                <img
                  src={Brand}
                  className="rounded-full"
                  width={"100%"}
                  alt={""}
                />
              </div>

              <div className="italic text-4xl text-zinc-600 font-extrabold">
                FIRMAN
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-lg md:w-[80%] mx-auto gap-16 mt-8 lg:mt-12 p-3 ">
        <div className="h-[600px] bg-[url('https://images.unsplash.com/photo-1582719366768-de4481b828ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNoZW1pY2FsJTIwbGFifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60')]"></div>
        <div className="h-full  p-4 flex flex-col items-start justify-center">
          <div className="text-lg text-primary">lorem ipsume</div>
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
          <div className="w-[200px] flex flex-row p-3 rounded-md bg-primary items-center justify-center">
            <div className="text-md font-light text-white">Our Solutions</div>
            <div className="flex flex-row bg-primary items-center justify-center ml-4">
              <BsArrowRightShort color="#fff" size={25} />
            </div>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="w-[80%] mx-auto mt-32 mb-32 ">
        <div className="w-full flex flex-row items-center">
          <div className="lg:w-[150px] text-zinc-800">Our Approach.</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Lorem Ipsum is simply dummy text of the printi dummy text of the
          printing and typesetting industry. Lorem
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-16 gap-8">
          {Array.from(Array(3)).map((_, i) => (
            <div
              className="h-[400px] border-[#f2f4fd] border-2 w-full rounded-lg"
              key={i}
            >
              <div className="w-full h-[250px] approach"></div>
              <div className="p-4 text-md font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the orem Ipsum has been t
              </div>
            </div>
          ))}
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
              Lorem Ipsum has been the orem Ipsum has been
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
            {Array.from(Array(4)).map((_, i) => (
              <div
                className="bg-white drop-shadow-lg my-1 lg:my-0 p-4 rounded-lg"
                key={i}
              >
                <div className="flex flex-row items-center">
                  <div className="h-[50px] border-2 border-zinc-300 w-[50px] bg-white ceo-profile rounded-full"></div>
                  <div className="ml-2">
                    <div className="font-bold text-zinc-800 text-sm">
                      Nate Clark
                    </div>
                    <div className="font-light  text-zinc-500 text-sm">
                      Lab Scientist
                    </div>
                  </div>
                </div>
                <div className="text-md text-zinc-800 lg:text-sm font-light pt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the orem Ipsum has
                  been ...
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section */}
      <div className="w-[80%] mx-auto mt-32 mb-32 ">
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
            <div
              className="h-[450px] border-[#f2f4fd] border-2 w-full rounded-lg"
              key={i}
            >
              <div className="h-[250px] project"></div>
              <div className="p-4">
                <div className="text-xl pt-3 font-bold text-zinc-800">
                  Lorem ipsum
                </div>
                <div className="text-md pt-3 font-light text-zinc-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the orem Ipsum has
                  been t
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="w-[80%] mx-auto mt-32 mb-32">
        <div className="w-full flex flex-row items-center">
          <div className="w-[150px] text-zinc-800">Our Team</div>
          <div className="h-[2px] rounded-lg w-full bg-zinc-300 "></div>
        </div>
        <div className="lg:w-[500px] text-xl pt-3 font-bold text-zinc-800">
          Lorem Ipsum is simply dummy text of the printi dummy text of the
          printing and typesetting industry. Lorem
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 mt-8 gap-8">
          {Array.from(Array(4)).map((_, i) => (
            <div className="w-full rounded-lg" key={i}>
              <div className="h-[100px] w-[100px] team bg-no-repeat rounded-full drop-shadow-md "></div>
              <div className="font-bold text-zinc-800 text-lg pt-4">
                Nate Clark
              </div>
              <div className="font-light text-zinc-500 text-md ">
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
