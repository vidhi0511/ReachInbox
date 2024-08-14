import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { IoReloadOutline } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { Badge } from "@/components/ui/badge";
import InboxCard from "@/components/inbox-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Stepper from "@/components/stepper";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiReplyFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="flex h-full">
      <div className="basis-1/5 h-full px-5 py-4">
        <div className="flex justify-between items-center pb-4">
          <div className="">
            <div className="text-[#4285F4] text-xl font-bold flex items-center">
              All Inbox(s)
              <RiArrowDropDownLine className="ml-1" size={30} />
            </div>
            <div className="text-[#7F7F7F] text-sm ">
              <span className="text-white font-bold">25/25</span> Inboxes
              selected
            </div>
          </div>
          <div className="w-8 h-8 cursor-pointer rounded-md flex justify-center items-center bg-[#25262B] hover:bg-[#25262B]">
            <IoReloadOutline size={14} className="text-white font-bold" />
          </div>
        </div>
        <div className="relative pb-3">
          <CiSearch className="absolute left-2.5 top-3" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <div className="flex justify-between items-center pb-4">
          <div className="flex gap-x-2 items-center">
            <div className="bg-[#222426] text-[#5C7CFA] px-2 py-[3px] rounded-2xl text-sm font-semibold">
              26
            </div>
            <div className="text-sm text-[#E6E6E6]">New Replies</div>
          </div>
          <div className="text-[#E6E6E6] text-sm flex items-center">
            Newest
            <RiArrowDropDownLine className="ml-1" size={30} />
          </div>
        </div>
        <Separator
          orientation={"horizontal"}
          className="h-[1px] bg-[#33383F]"
        />
        <ScrollArea className="h-[450px] w-full">
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
          <InboxCard />
        </ScrollArea>
      </div>
      <Separator orientation={"vertical"} className="w-[2px] bg-[#33383F]" />
      <div className="basis-3/5">
        <div className="py-4 px-5 flex justify-between items-center">
          <div>
            <div className="text-sm font-semibold">Orlando</div>
            <div className="text-xs text-[#FAFAFA66]">orladom@gmail.com</div>
          </div>
          <div className="flex items-center gap-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none px-2 py-[6px] bg-[#1F1F1F] rounded-md text-xs font-semibold flex items-center">
                <div className="w-2 h-2 bg-[#E6D162] rounded-full mr-2"></div>
                Meeting Completed{" "}
                <RiArrowDropDownLine className="ml-1" size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                <DropdownMenuItem>Edit lead</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none px-2 py-[6px] bg-[#1F1F1F] rounded-md text-xs font-semibold flex items-center">
                Move <RiArrowDropDownLine className="ml-1" size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Mark as unread</DropdownMenuItem>
                <DropdownMenuItem>Edit lead</DropdownMenuItem>
                <DropdownMenuItem>Remove lead</DropdownMenuItem>
                <DropdownMenuItem>Set reminder</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="outline-none px-2 py-[6px] bg-[#1F1F1F] rounded-md text-xs font-semibold flex items-center">
                <HiOutlineDotsHorizontal size={20} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <Separator
          orientation={"horizontal"}
          className="h-[1px] bg-[#33383F]"
        />
        <div className="relative px-5 pb-5">
          <ScrollArea className="h-[500px]  w-full">
            <Separator
              orientation={"horizontal"}
              className="h-[1px] bg-[#33383F] my-5 relative"
            >
              <div className="absolute py-1 px-2.5 bg-[#171819] text-[10px] -bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                Yesterday
              </div>
            </Separator>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-semibold">
                      New Product Launch
                    </div>
                    <CardDescription className="font-[400]">
                      20 june 2022 : 9:16AM
                    </CardDescription>
                  </div>
                </CardTitle>
                <CardDescription className="font-[400] pt-2">
                  from : jeanne@icloud.com cc : lennon.j@mail.com
                </CardDescription>
                <CardDescription className="font-[400] pt-1">
                  to : lennon.j@mail.com
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#E1E0E0] w-2/3">
                  I would like to introduce you to SaaSgrow, a productized
                  design service specifically tailored for saas startups. Our
                  aim is to help you enhance the user experience and boost the
                  visual appeal of your software products.
                </p>
              </CardContent>
            </Card>
            <Separator
              orientation={"horizontal"}
              className="h-[1px] bg-[#33383F] my-5 relative"
            >
              <div className="absolute py-1 px-2.5 bg-[#171819] text-[10px] -bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2">
                Today
              </div>
            </Separator>
            <Card>
              <CardHeader>
                <CardTitle>
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-semibold">
                      New Product Launch
                    </div>
                    <CardDescription className="font-[400]">
                      20 june 2022 : 9:16AM
                    </CardDescription>
                  </div>
                </CardTitle>
                <CardDescription className="font-[400] pt-2">
                  from : jeanne@icloud.com cc : lennon.j@mail.com
                </CardDescription>
                <CardDescription className="font-[400] pt-1">
                  to : lennon.j@mail.com
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#E1E0E0] w-2/3">
                  I would like to introduce you to SaaSgrow, a productized
                  design service specifically tailored for saas startups. Our
                  aim is to help you enhance the user experience and boost the
                  visual appeal of your software products.
                </p>
              </CardContent>
            </Card>
          </ScrollArea>
          <Button
            className="absolute -bottom-16 rounded-sm px-[25px] py-[13px] mb-[24px]"
            style={{
              background:
                "linear-gradient(92deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
            }}
          >
            <RiReplyFill className="mr-1" size={20} />
            Reply
          </Button>
        </div>
      </div>
      <Separator orientation={"vertical"} className="w-[2px] bg-[#33383F]" />
      <div className="basis-1/5 py-4 px-1">
        <div className="w-full px-3 py-2 rounded-lg bg-[#23272C] text-sm font-semibold mb-4">
          Lead Details
        </div>
        <div className="flex flex-col gap-5 px-5">
          <div className="flex justify-between items-center">
            <div className="text-sm">Name </div>
            <div className="text-sm text-[#B9B9B9]">Orlando</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">Contact No</div>
            <div className="text-sm text-[#B9B9B9]">+54-9062827869</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">Email ID </div>
            <div className="text-sm text-[#B9B9B9]">orlando@gmail.com</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">Linkedin </div>
            <div className="text-sm text-[#B9B9B9]">/timvadde</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">Company Name </div>
            <div className="text-sm text-[#B9B9B9]">Reachinbox</div>
          </div>
        </div>
        <div className="w-full px-3 py-2 rounded-lg bg-[#23272C] text-sm font-semibold mb-4 mt-8">
          Activities
        </div>
        <div className="px-5">
          <div className="font-semibold">Campaign Name</div>
          <div className="text-xs py-5 flex gap-x-2.5">
            <div>3 Steps</div>
            <Separator
              orientation={"vertical"}
              className="w-[1px] h-[16px] bg-[#403F3F]"
            />
            <div>5 Days in Sequence</div>
          </div>
          <div>
            <Stepper />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
