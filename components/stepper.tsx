import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { LuMailOpen } from "react-icons/lu";

const Stepper = () => {
  return (
    <ol className=" overflow-hidden space-y-8">
      <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-[#263238] after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-5">
        <a
          href="https://pagedone.io/"
          className="flex items-center font-medium w-full  "
        >
          <span className="w-5 h-5 bg-[#23272C] border-2 border-[#41464B] rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
            <MdOutlineMailOutline size={20} className="text-[#BFBFBF]" />
          </span>
          <div className="block">
            <h4 className="text-[13px] font-semibold">Step 1: Email</h4>
            <div className="text-[10px] text-[#B9B9B9] flex items-center gap-x-1">
              <FiSend />
              Sent <span className="font-semibold">3rd, Feb</span>
            </div>
          </div>
        </a>
      </li>
      <li className="relative flex-1 after:content-['']  after:w-0.5 after:h-full  after:bg-[#263238] after:inline-block after:absolute after:-bottom-10 after:left-4 lg:after:left-5">
        <a className="flex items-center font-medium w-full  ">
          <span className="w-5 h-5 bg-[#23272C] border-2 border-[#41464B] rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
            <MdOutlineMailOutline size={20} className="text-[#BFBFBF]" />
          </span>
          <div className="block">
            <h4 className="text-[13px] font-semibold">Step 2: Email</h4>
            <div className="text-[10px] text-[#B9B9B9] flex items-center gap-x-1">
              <LuMailOpen className="text-[#ECBF21]" />
              Opened <span className="font-semibold">3rd, Feb</span>
            </div>
          </div>
        </a>
      </li>
      <li className="relative flex-1 ">
        <a className="flex items-center font-medium w-full  ">
          <span className="w-5 h-5 bg-[#23272C] border-2 border-[#41464B] rounded-full flex justify-center items-center mr-3 text-sm text-white lg:w-10 lg:h-10">
            <MdOutlineMailOutline size={20} className="text-[#BFBFBF]" />
          </span>
          <div className="block">
            <h4 className="text-[13px] font-semibold">Step 3: Email</h4>
            <div className="text-[10px] text-[#B9B9B9] flex items-center gap-x-1">
              <LuMailOpen className="text-[#ECBF21]" />
              Opened <span className="font-semibold">3rd, Feb</span>
            </div>
          </div>
        </a>
      </li>
    </ol>
  );
};

export default Stepper;
