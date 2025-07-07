"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  GalleryVerticalEnd,
  Map,
  MapPin,
  PieChart,
  Settings2,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "mlab",
    email: "mlab@mlab.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Codetribe",
      logo: GalleryVerticalEnd,
      plan: "mlab",
    },
  ],
  navMain: [
    {
      title: "Locations",
      url: "#",
      icon: MapPin,
      isActive: true,
      items: [
        {
          title: "Limpopo",
          url: "#",
        },
        {
          title: "Ga-Rankuwa",
          url: "#",
        },
        {
          title: "Pretoria",
          url: "#",
        },
      ],
    },
    {
      title: "Facilitators",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Sizwe",
          url: "#",
        },
        {
          title: "Kabelo",
          url: "#",
        },
        {
          title: "Vukona",
          url: "#",
        },
      ],
    },
    {
      title: "Resources",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Tasks",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "View all",
          url: "#",
        },
        {
          title: "Create a task",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "To-Do",
      url: "#",
      icon: Frame,
    },
    {
      name: "Shopping list",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Weather app",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
