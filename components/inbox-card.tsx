import React from "react";
import { Badge } from "./ui/badge";
import { IoIosSend } from "react-icons/io";
import { Separator } from "./ui/separator";

const InboxCard = () => {
  return (
    <>
      <div className="px-2 py-3">
        <div className="relative">
          <div className="flex justify-between items-center">
            <div className="absolute -left-2 w-2 h-2 bg-[#5C7CFA] rounded-full"></div>
            <div className="text-sm font-medium pl-2">Beata@gmail.com</div>
            <div className="text-xs text-[#fcfcfc66]">Mar 7</div>
          </div>
          <div className="text-xs text-[#E1E0E0] pb-3 pt-1">
            I've tried a lot and .
          </div>
          <div className="flex gap-x-1 pb-4">
            <Badge variant="secondary">
              <div className=" w-2 h-2 bg-[#57E0A6] rounded-full mr-1"></div>
              <p className="text-[#57E0A6]">Interested</p>
            </Badge>
            <Badge variant="secondary">
              <IoIosSend
                size={15}
                className="text-[#AEAEAE] hover:text-white mr-1"
              />
              <p className="">Campaign Name</p>
            </Badge>
          </div>
        </div>
      </div>
      <Separator orientation={"horizontal"} className="h-[1px] bg-[#33383F]" />
    </>
  );
};

export default InboxCard;
