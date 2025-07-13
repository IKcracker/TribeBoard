import { RegisterForm } from "@/components/custom/RegisterForm";

import Image from "next/image";
import Link from "next/link";

export default function Register() {
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
        <div className="absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-white ">
          <h1 className="text-6xl font-bold">Sign Up</h1>
          <p className="text-base mt-4">
            Already have an account?{" "}
            <Link href="/" className="text-green-500">
              Sign In
            </Link>
          </p>
        </div>

        <Image
          src="/images/welcome.png"
          alt="Welcome"
          fill
          sizes="100vw"
          className="w-fit h-full"
        />
      </div>
      <div className=" relative sm:px-2 md:px-6 lg:px-24 p-12 flex justify-center items-end flex-col w-2/5">
        <RegisterForm />
      </div>
    </div>
  );
}
