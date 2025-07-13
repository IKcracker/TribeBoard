"use client";

import { PerformanceChart } from "@/components/custom/barChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Settings } from "lucide-react";

import React from "react";
export default function Page() {
  const [selectedRegion, setSelectedRegion] = React.useState("Limpopo");
  return (
    <div className="px-4 gap-4 w-full flex-1">
      <Card>
        <CardHeader className="flex items-center justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="text-3xl font-bold">Welcome back, Sizwe</h1>
            <p>
              This is your dashboard where you can find all the important
              information at a glance.
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {selectedRegion} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSelectedRegion("Limpopo")}>
                <span>Ga-Rankuwa</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedRegion("Gauteng")}>
                <span>Pretoria</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedRegion("KZN")}>
                <span>KZN</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedRegion("Other")}>
                <span>Other</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <p className="text-lg font-medium">
            Projects for Region: {selectedRegion}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            <Card>
              <CardContent>
                <Settings className="h-4 w-4" />
                <div>
                  <h4>Project 1</h4>
                  <p>Description of project 1 in {selectedRegion}.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Settings className="h-4 w-4" />
                <div>
                  <h4>Project 1</h4>
                  <p>Description of project 1 in {selectedRegion}.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Settings className="h-4 w-4" />
                <div>
                  <h4>Project 1</h4>
                  <p>Description of project 1 in {selectedRegion}.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <Settings className="h-4 w-4" />
                <div>
                  <h4>Project 1</h4>
                  <p>Description of project 1 in {selectedRegion}.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
      <PerformanceChart />
    </div>
  );
}
