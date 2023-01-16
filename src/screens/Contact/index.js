import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import "./styles.css";

const Contact = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <div className="w-[100vw] h-[90vh] contactus flex flex-row items-center justify-center">
        <div className="bg-white backdrop-blur-lg bg-transparent px-4 animate__animated animate__fadeInUp">
          <div className="text-white text-center font-bold text-5xl mb-4 ">
            Get in Touch with us.
          </div>
          <div
            className="w-[100%] lg:w-[70%] mx-auto text-lg text-center font-bold text-white "
            style={{}}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </div>
          {/* <div className="text-1xl pt-4 font-light lg:font-extralight text-center text-white w-[80%] mx-auto">
            Lorem Ipsum is simply been the industry'. been the industry'. Lorem
            Ipsum is simply been the industry
          </div> */}
        </div>
      </div>
      <div className="w-full h-fit pb-20 ">
        <div className="w-full md:w-[70%] mx-auto border-2 flex flex-col mt-20 rounded-lg shadow-sm  bg-[#eee] py-10">
          <h1 className="text-lg text-center font-bold p-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className="flex flex-col items-center  px-2 text-sm">
            <div className="flex flex-col md:flex-row items-center md:px-5 justify-between w-full">
              <div className=" flex flex-col w-full px-2 pb-2 ">
                <label className="font-semi-bold pb-2  text-primary">FirstName</label>
                <input
                  onChange={(e) => setFirst(e.target.value)}
                  value={first}
                  type="text"
                  placeholder=" Firstname"
                  className="border-[1px] h-[40px] rounded-lg p-2 placeholder:text-[#eee] outline-none"
                />
              </div>
              <div className="flex flex-col w-full px-2 ">
                <label className="font-semi-bold pb-2  text-primary">Lastname</label>
                <input
                  onChange={(e) => setLast(e.target.value)}
                  value={last}
                  type="text"
                  placeholder=" Lastname"
                  className="border-[1px] h-[40px] rounded-lg p-2 placeholder:text-[#eee] placeholder:text-sm outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col w-full px-2 md:px-8 py-2">
              <label className="font-semi-bold pb-2  text-primary">Email</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="border-[1px] h-[40px] rounded-lg p-2 placeholder:text-[#eee] placeholder:text-sm outline-none"
              />
            </div>
            <span className="flex flex-col w-full px-2 md:px-8 py-2">
              <label className="font-semi-bold pb-2  text-primary">Message</label>
              <textarea
                placeholder="type your Message here"
                className=" resize-none h-44 w-full p-2 outline-1 placeholder:text-[#eee] placeholder:text-sm mb-2 outline-none rounded-lg"
              ></textarea>
            </span>
            <Button text={"Send"} bg={"bg-white"} color={'text-primary'} width={"w-[90%] md:w-fit "}  />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
