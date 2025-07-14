"use client";
import { PerformanceChart } from "@/components/custom/barChart";
import { DisplayCardsDemo } from "@/components/custom/Cards";
import { StudentsPie } from "@/components/custom/pieChart";
import ProjectCard from "@/components/custom/project-card";
import ChartBarMultiple from "@/components/custom/study";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const projects = [
  {
    title: "Project Alpha",
    description: "A groundbreaking project that will change the world.",
    date: "2025-10-01",
  },
  {
    title: "Project Beta",
    description: "An innovative approach to solving modern problems.",
    date: "2025-09-15",
  },
  {
    title: "Project Gamma",
    description: "A collaborative effort to enhance community engagement.",
    date: "2025-08-20",
  },
  {
    title: "Project Delta",
    description: "A collaborative effort to enhance community engagement.",
    date: "2025-08-1",
  },
];

import React from "react";
export default function Page() {
  return (
    <div className="px-4 gap-4 h-80  overflow-hidden w-full flex-1">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Welcome back, Sizwe</h1>
            <p>
              This is your dashboard where you can find all the important
              information at a glance.
            </p>
          </div>
          <DisplayCardsDemo />
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium">Recent Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                date={project.date}
              />
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="mt-4 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="col-span-2">
            <StudentsPie />
          </div>
          <div className="col-span-1">
            <PerformanceChart />
          </div>
          <div className="col-span-1">
            <ChartBarMultiple />
          </div>
        </div>
      </div>
    </div>
  );
}
