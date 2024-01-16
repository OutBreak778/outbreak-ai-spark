"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CodeIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { Roboto, Roboto_Mono } from "next/font/google";
import { useRouter } from "next/navigation";

const tools = [
  {
    label: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: MusicIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: CodeIcon,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
    href: "/code",
  },
];

const robot = Roboto({
  weight: "500",
  subsets: ["latin"],
});

const robotMono = Roboto_Mono({
  weight: "500",
  subsets: ["latin"],
});

export default function DashboardPage() {
  const router = useRouter();

  return (
    <>
      <div className="mb-8 space-y-5">
        <h2 className="text-2xl block flex-row justify-center lg:text-4xl md:flex font-bold text-center">
          Explore the power of &nbsp;{" "}
          <p
            className={cn(
              "text-violet-600 font-semibold underline underline-offset-[6px]",
              robot.className
            )}
          >
            Artificial Intelligence
          </p>
        </h2>
        <div className=" flex justify-center text-muted-foreground text-center font-light text-sm md:text-lg mb-4">
          Chat with the &nbsp;
          <p
            className={cn(
              "text-violet-600 font-extrabold underline underline-offset-4",
              robotMono.className
            )}
          >
            OUTBREAK AI
          </p>{" "}
          &nbsp;- Experience the power of AI
        </div>
        <div className="px-4 md:px-20 lg:px-32 space-y-4">
          {tools.map((tool) => (
            <Card
              onClick={() => router.push(tool.href)}
              key={tool.href}
              className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
            >
              <div className="flex items-center gap-x-4">
                <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                  <tool.icon className={cn("w-8 h-8", tool.color)} />
                </div>
                <div className="font-semibold">{tool.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
