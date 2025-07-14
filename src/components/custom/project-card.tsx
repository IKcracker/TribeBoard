import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import React from "react";

type ProjectCardProps = {
  title: string;
  description: string;
  date: string;
};

export default function ProjectCard({
  title,
  description,
  date,
}: ProjectCardProps) {
  return (
    <div className="relative flex h-36 select-none flex-col justify-between rounded-xl border-2 px-4 py-3 ">
      <div className="flex items-center gap-2">
        <span className="relative inline-block rounded-full bg-black p-1">
          <Sparkles className="size-4 text-blue-300" />
        </span>
        <p className={cn("text-lg font-medium text-blue-500")}>{title}</p>
      </div>
      <p className="whitespace-nowrap text-lg max-w-[90%] overflow-hidden text-ellipsis">
        {description}
      </p>

      <p className="text-muted-foreground">{date}</p>
    </div>
  );
}
