"use client";
import { Kanban } from "@/components/kanban";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Circle } from "lucide-react";
import React from "react";

export default function KanbanBoard() {
  const locations = [
    { value: "ga-rankua", label: "Ga-rankua" },
    { value: "pretoria", label: "Pretoria" },
    { value: "limpopo", label: "Limpopo" },
    { value: "kzn", label: "KZN" },
  ];
  const [selectedLocation, setSelectedLocation] = React.useState("");
  return (
    <div className=" h-[93vh]  w-full flex-1 flex flex-col">
      <div className="flex px-4  border-y-2 justify-between border-gray-200 py-4">
        <h1 className="text-3xl font-bold">Kanban Board</h1>
        <Select
          onValueChange={(value) => {
            console.log("Selected location:", value);
            setSelectedLocation(value);
          }}
        >
          <SelectTrigger>
            {selectedLocation || "Choose Location"}{" "}
          </SelectTrigger>
          <SelectContent>
            {locations.map((location) => (
              <SelectItem key={location.value} value={location.value}>
                <span>{location.label}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Kanban />
    </div>
  );
}
