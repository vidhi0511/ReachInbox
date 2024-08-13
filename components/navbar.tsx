import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="p-6 mt-1 bg-[#FAFAFA] dark:bg-[#1F1F1F] flex justify-between items-center">
      <div className="font-[700] text-base text-white pl-4">Onebox</div>

      <div className="flex items-center">
        <ModeToggle />
        <Button className="bg-transparant hover:bg-transparant text-white text-sm ml-6">
          Tim’s Workspace
          <RiArrowDropDownLine className="ml-1" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
