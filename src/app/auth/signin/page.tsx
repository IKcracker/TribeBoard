import { SignInForm } from "@/components/custom/SignInForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-wrap h-screen overflow-hidden">
      <div className="w-3/5 relative">
        <h2 className="absolute z-10 text-white right-12 top-12 text-2xl">
          <span className="text-green-500">m</span>lab
        </h2>

        <div className="absolute  left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 text-white ">
          <h1 className="text-6xl font-bold">Sign In</h1>
          <p className="text-base mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/auth" className="text-green-500">
              Sign Up
            </Link>
          </p>
        </div>

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
        <SignInForm />
      </div>
    </div>
  );
}
