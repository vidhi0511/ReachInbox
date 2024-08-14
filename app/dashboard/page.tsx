import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className=" w-full h-full bg-black flex justify-center items-center">
      <div className="flex flex-col items-center">
        <Image
          src={"/no-message-illustration.png"}
          alt={""}
          width={280}
          height={229}
          className="mb-12"
        />
        <div className="text-white text-2xl font-bold pb-6">
          {`It’s the beginning of a legendary sales pipeline`}
        </div>
        <div className="text-center font-medium text-[18px]">
          {`When you have inbound E-mails`} <br /> {`you’ll see them here`}
        </div>
      </div>
    </div>
  );
};

export default page;
