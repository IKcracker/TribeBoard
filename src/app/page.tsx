import InputComponent from "@/components/custom/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BadgeInfo } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap h-screen overflow-hidden">
      <div className="w-3/5 relative">
        <h2 className="absolute z-10 text-white right-12 top-12 text-2xl">
          <span className="text-green-500">m</span>lab
        </h2>

        <div className="absolute left-12 bottom-6 z-10 text-white">
          <h2 className="  text-2xl">TribeBoard</h2>
          <p className="text-gray-300">From Backlog to Breakthroughs</p>
        </div>

        <Image
          src="/images/welcome.png"
          objectFit="cover"
          alt="Welcome"
          fill
          sizes="100vw"
          className="w-fit h-full"
        />
      </div>
      <div className=" relative p-24 flex justify-center items-end flex-col w-2/5">
        <a className="absolute top-12 right-24  text-base mb-4" href="#">
          Don&apos;t have an account?{" "}
          <span className="text-green-500 ">Sign up</span>
        </a>
        <Card className=" min-w-[340px] w-full max-w-2/3  bg-white shadow-none border-0">
          <CardHeader className="p-0 m-0">
            <CardTitle className="text2xl">Login In Now!</CardTitle>
          </CardHeader>
          <CardContent className="p-0 w-full m-0">
            <div className="grid w-full gap-4">
              <InputComponent
                label="Email"
                name="email"
                placeholder="Enter your email"
              />
              <InputComponent
                label="Password"
                name="password"
                isPassword
                placeholder="Enter your password"
              />
              <div className="flex items-center">
                <Checkbox className="border-2 border-gray-300" id="remember" />
                <Label className="ml-2 text-sm" htmlFor="remember">
                  Remember me
                  <Tooltip>
                    <TooltipTrigger>
                      <BadgeInfo size={14} />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-sm text-gray-500">
                        This will remember your login information for future
                        visits.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </Label>
              </div>
            </div>

            <CardAction className="w-full mt-4 ">
              <Button className="w-full bg-green-500 hover:bg-green-300">
                Sign In
              </Button>
            </CardAction>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
