import React from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { TbHomeFilled } from "react-icons/tb";
import { MdPersonSearch } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { MdBarChart } from "react-icons/md";
import { BsInboxFill } from "react-icons/bs";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
const Sidebar = () => {
  return (
    <div className="px-1 bg-[#FAFAFA] dark:bg-[#101113] relative border-e-2 border-[#33383F]">
      <div className="py-6 px-3">
        <Image src={"/logo-dark-theme.png"} alt={""} width={32} height={32} />
      </div>
      <div className="py-14 w-full flex flex-col justify-center items-center gap-y-8">
        <Link href={"#"}>
          <TbHomeFilled size={26} className="text-[#AEAEAE] hover:text-white" />
        </Link>
        <Link href={"#"}>
          <MdPersonSearch
            size={26}
            className="text-[#AEAEAE] hover:text-white"
          />
        </Link>
        <Link href={"#"}>
          <MdEmail size={26} className="text-[#AEAEAE] hover:text-white" />
        </Link>
        <Link href={"#"}>
          <IoIosSend size={26} className="text-[#AEAEAE] hover:text-white" />
        </Link>
        <Link href={"#"} className="relative">
          <BsInboxFill
            size={32}
            className="text-white bg-[#2F3030] px-1 rounded-sm"
          />
          <div className="absolute -top-2 -right-3 w-5 h-5 rounded-full bg-[#FA5252] text-white text-[8px] flex justify-center items-center">
            12+
          </div>
        </Link>
        <Link href={"#"}>
          <MdBarChart size={26} className="text-[#AEAEAE] hover:text-white" />
        </Link>
      </div>
      <div className="absolute bottom-3 w-full px-3">
        <div className="w-8 h-8 flex justify-center items-center bg-[#054F31] text-white rounded-full text-[15px]">
          AS
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
