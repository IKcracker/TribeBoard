import React from "react";
import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenuButton,
} from "../ui/sidebar";
import { Plus } from "lucide-react";

export default function Tasks() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Tasks</SidebarGroupLabel>
      <SidebarGroupAction>
        <Plus /> <span className="sr-only">Add Project</span>
      </SidebarGroupAction>
      <SidebarGroupContent>
        <SidebarContent>
          <SidebarMenuButton>View all</SidebarMenuButton>
        </SidebarContent>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
