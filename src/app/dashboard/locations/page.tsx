"use client";
import { Button } from "@/components/ui/button";
import { Edit3Icon, Filter, PlusCircle } from "lucide-react";
import React from "react";

export default function Location() {
  const locations = [
    { id: 1, province: "Limpopo", town: "Polokwane" },
    { id: 2, province: "Gauteng", town: "Pretoria" },
    { id: 3, province: "Western Cape", town: "Cape Town" },
    { id: 4, province: "KwaZulu-Natal", town: "Durban" },
  ];
  return (
    <div className="px-4  border-t-2 border-gray-200 gap-4 grid grid-cols-1  h-full lg:grid-cols-3 xl:grid-cols-5">
      <div className=" col-span-4 py-8 gap-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Location</h2>
          <div className="flex items-center gap-4">
            <Button className="rounded-full" size="sm">
              <Filter />
            </Button>

            <Button
              variant="outline"
              className="flex items-center border-2 border-gray-600"
              size="sm"
              onClick={() => alert("Add Location")}
            >
              <PlusCircle />
              Add
            </Button>
          </div>
        </div>
        <div className="border grid text-center grid-cols-3 gap-4 p-4 font-bold">
          <p className="bg-gray-400 p-2 rounded-md">Province</p>
          <p className="bg-gray-400 p-2 rounded-md">Town</p>
          <p className="bg-gray-400 p-2 rounded-md">Actions</p>
        </div>
        {locations.map((location) => (
          <div
            key={location.id}
            className="border gap-4 text-center grid grid-cols-3 p-4"
          >
            <h3 className="font-bold">{location.province}</h3>
            <p>{location.town}</p>
            <Button className="flex items-center justify-center gap-2">
              <Edit3Icon />
              Edit
            </Button>
          </div>
        ))}
      </div>
      <div className="flex justify-start py-8 gap-4 flex-col items-center border-l flex-1">
        <h2 className="font-bold w-[50%]">Overview</h2>
        <div className="grid   gap-6  grid-cols-2">
          <div>
            <p className="text-xs">Facilitators</p>
            <div className="flex py-2">
              <span className="border-l-8 mr-2 rounded-b-full border-green-500">
                {" "}
              </span>
              <p>7</p>
            </div>
          </div>
          <div>
            <p className="text-xs">Location</p>
            <div className="flex py-2">
              <span className="border-l-8 mr-2 rounded-b-full border-green-500">
                {" "}
              </span>
              <p>7</p>
            </div>
          </div>
          <div>
            <p className="text-xs">Courses</p>
            <div className="flex py-2">
              <span className="border-l-8 mr-2 rounded-b-full border-green-500">
                {" "}
              </span>
              <p>5</p>
            </div>
          </div>
          <div>
            <p className="text-xs">Tasks</p>
            <div className="flex py-2">
              <span className="border-l-8 mr-2 rounded-b-full border-green-500">
                {" "}
              </span>
              <p>20</p>
            </div>
          </div>
          <div>
            <p className="text-xs">Students</p>
            <div className="flex py-2">
              <span className="border-l-8 rounded-b-full mr-2 border-green-500">
                {" "}
              </span>
              <p>20</p>
            </div>
          </div>
        </div>
        <h2 className="font-bold w-[50%]">Activity Feed</h2>
        <div className="w-[50%] gap-2 flex flex-col items-start">
          <div>
            <h4 className="text-sm font-bold">Comment Added</h4>
            <p className="text-xs">User123 added a comment to the location.</p>
          </div>
          <div>
            <h4 className="text-sm font-bold">Comment Added</h4>
            <p className="text-xs">User123 added a comment to the location.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
