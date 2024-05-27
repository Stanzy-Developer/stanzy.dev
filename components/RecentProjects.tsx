import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { title } from "process";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
  return (
    <div className="py-28" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="mt-3 flex flex-wrap items-center justify-center p-4 sm:mt-10 sm:gap-x-60 sm:gap-y-8">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            className="flex h-[28rem] w-[80vw] items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem]"
            key={id}
          >
            <PinContainer containerClassName="" title={link} href={link}>
              <div className="relative mb-10 flex h-[20vh] w-[35vh] items-center justify-center overflow-hidden sm:h-[40vh] sm:w-[670px] lg:h-[30vh]">
                <div className="relative size-full overflow-hidden bg-[#13162d] lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-png" />
                </div>
                <img src={img} alt={title} className="absolute bottom-0 z-10" />
              </div>
              <h1 className="line-clamp-1 text-base font-bold md:text-xl lg:text-2xl">
                {title}
              </h1>
              <p className="line-clamp-2 text-sm font-light lg:text-xl lg:font-normal">
                {des}
              </p>
              <div className="mb-3 mt-7 flex items-center justify-between">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      className="flex size-8 items-center justify-center rounded-full border border-white/[0.2] bg-black lg:size-10"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      key={icon}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex text-sm text-purple md:text-xs lg:text-xl">
                    Check Live Side
                  </p>
                  <FaLocationArrow className="ms-3" color="#C0ACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
