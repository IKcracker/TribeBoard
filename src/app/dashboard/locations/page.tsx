"use client";
import { Button } from "@/components/ui/button";
import { Earth, Edit3Icon, Filter, PlusCircle } from "lucide-react";
import React from "react";

export default function Location() {
  const locations = [
    { id: 1, province: "Limpopo", town: "Polokwane" },
    { id: 2, province: "Gauteng", town: "Pretoria" },
    { id: 3, province: "Western Cape", town: "Cape Town" },
    { id: 4, province: "KwaZulu-Natal", town: "Durban" },
  ];
  return (
    <div className="px-4 py-8 border-t-2 border-gray-200">
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
      <div className=" gap-4">
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
    </div>
  );
}
