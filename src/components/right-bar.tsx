import { cn } from "@/lib/utils";
import React from "react";
import { SingleChart } from "./custom/barChart";
const info = [
  { name: "Ga-rankua", students: 9 },
  { name: "Pretoria", students: 9 },
  { name: "Limpopo", students: 20 },
  { name: "KZN", students: 5 },
  { name: "Others", students: 20 },
];
export default function RightBar({ className }: { className: string }) {
  return (
    <div
      className={cn(
        "flex justify-start h-[93vh]  gap-4 flex-col items-center border-l  flex-1",
        className
      )}
    >
      <SingleChart data={info} className="rounded-none shadow-none" />
    </div>
  );
}
