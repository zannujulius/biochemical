import moment from "moment";
import { useEffect } from "react";
import Layout from "../../components/Layout";
import "./style.css";
const Project = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);
  return (
    <Layout>
      <div className=" w-full ">
        <div className="text-center flex flex-row align-center justify-center  pt-32 py-32 project-details_cover w-full ">
          <div className=" text-white font-bold text-2xl"> Project Name </div>
        </div>
      </div>
      <div className="lg:w-[80%] mx-auto w-full grid grid-cols-1 lg:grid-cols-3 my-16">
        <div className="cols-span-1">
          <div className="">
            <div className="italic font-bold text-3xl text-zinc-800 ">
              loremMagna culpa qui exercitation
            </div>
            <div className="font-light text-zinc-500 mt-4 mb-4">
              Qui amet officia fugiat consequat do culpa dolor commodo ea culpa
              incididunt eiusmod.
            </div>
            <div>
              <div className="h-[40px] w-[40px] rounded-full overflow-hidden ">
                <img
                  src="https://images.unsplash.com/profile-1627836587305-3c8121a86850image?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                  className=""
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="text-sm text-zinc-500 mt-1">Jame cameroon</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 px-4">
          <div className="font-bold text-3xl text-zinc-800 ">
            loremMagna culpa qui exercitation
          </div>
          <div className="tetx-sm font-light text-zinc-600 pt-4 leading-8">
            In minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa. In
            minim Lorem nisi cupidatat voluptate enim minim fugiat culpa.
          </div>
          <div className="mt-6 text-zinc-700 text-md">
            {moment(Date.now()).format("LLL")}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Project;
