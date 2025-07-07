"use client"

import * as React from "react"
import {
	Landmark,
	LayoutList,
	ChartNoAxesCombined,
	ListPlus,
	List
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
	navMain: [
		{
			title: "Bets",
			url: "/dash/bets",
			icon: List
		},
		{
			title: "Players",
			url: "/dash/players",
			icon: LayoutList,
		},
		{
			title: "Stats",
			url: "/dash/stats",
			icon: ChartNoAxesCombined,
		},
	],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter>
				<NavUser />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	)
}
