"use client"

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar"
import Image from "next/image"

export function AppSidebar() {
  return (
    <SidebarProvider>
      <Sidebar className="bg-white/4 w-[157px] ml-[24px] ">
        <div className="invisible bg-red-400">
          <SidebarHeader>
            <Image src="/logo-white.svg" alt="logo" width={64} height={15} />
          </SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>Home</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Discover</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Bounties</SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>Leaderboard</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </Sidebar>
    </SidebarProvider>
  )
}
