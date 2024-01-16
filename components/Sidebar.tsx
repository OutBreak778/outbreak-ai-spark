"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "../public/circle.svg";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import {
  CodeIcon,
  ImageIcon,
  LayoutDashboardIcon,
  MessageSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const mont = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboardIcon,
    href: "/dashboard",
    color: "text-sky-600",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-600",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-pink-600",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-600",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    href: "/music",
    color: "text-emerald-500",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    href: "/code",
    color: "text-green-600",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-white/50",
  },
];

const Sidebar = () => {

  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="#" className="flex items-center pl-3 mb-14">
          <Link href="/" className="relative h-8 w-8 mr-4">
            <Image alt="Logo" src={image} width={500} height={500} className="invert" />
          </Link>
          <h1 className={cn("text-2xl font-bold",mont.className)}>OUTBREAK</h1>
        </Link>
        <div className="space-y-2">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-6 w-6 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
