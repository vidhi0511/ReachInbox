import React from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const redirect_url = process.env.GOOGLE_LOGIN_REDIRECT;
  const google_login_url =
    "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://reach-inbox-4sdm9swb1-vidhis-projects-4c6a9889.vercel.app/dashboard" 
  return (
    <div className="bg-black h-screen">
      <div className="w-full py-5 flex justify-center items-center">
        <Image src={"/logo.png"} alt={""} width={200} height={200} />
      </div>
      <Separator className="bg-[#25262B] h-[2px]" />
      <div className="w-full flex justify-center items-center py-32">
        <Card className="w-[460px] bg-[#111214] border-[#343A40]">
          <CardHeader>
            <CardTitle className="text-white text-center text-xl">
              Create a new account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Link href={google_login_url}>
              <Button className="w-full rounded-sm bg-transparent hover:bg-transparent border border-[#343A40] mb-8">
                <Image src={"/google.png"} alt={""} width={15} height={15} />
                <span className="pl-2" style={{color:"white"}}>Sign Up with Google</span>
              </Button>
            </Link>
          </CardContent>
          <CardFooter className="w-full flex flex-col justify-center items-center">
            <Button
              className="rounded-sm px-[35px] py-[13px] mb-[24px]"
              style={{
                background:
                  "linear-gradient(92deg, #4B63DD -2.99%, rgba(5, 36, 191, 0.99) 95.8%)",
              }}
            >
              Create an Account
            </Button>
            <p className="text-[#909296]">
              Already have an account?{" "}
              <Link href={""} className="text-white">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center items-center py-5 bg-[#121212]">
        <p className="text-[#909296] text-xs">
          © 2023 Reachinbox. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default page;
