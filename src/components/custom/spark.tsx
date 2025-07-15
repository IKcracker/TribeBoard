// components/SparklesVariants.tsx
"use client";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreviewDark() {
  return (
    <div className="h-[40rem] relative w-full bg-slate-950 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        Build faster
      </h1>
    </div>
  );
}

export function SparklesPreviewColorful() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00ff00"
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          The Future
        </h1>
        <p className="text-neutral-300 cursor-default text-center">
          is brighter than you think
        </p>
      </div>
    </div>
  );
}
