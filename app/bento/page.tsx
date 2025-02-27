"use client";
import { Globe } from "@/components/magicui/globe";
import { NumberTicker } from "@/components/magicui/number-ticker";
import BatteryLevel from "@/components/ui/battery-life";
import Profile from "@/components/ui/profile";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Ripple } from "@/components/magicui/ripple";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { RetroGrid } from "@/components/magicui/retro-grid";

export default function BentoGridDemo() {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-neutral-950">
      {/* Header Section - Reduced padding */}
      <div className="z-10 flex items-center justify-center pt-8 pb-4">
        <div className={cn( 
          "group rounded-full border border-black/5 bg-white text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-100 dark:border-white/5 dark:bg-neutral-950 dark:hover:bg-neutral-900",
        )}>
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>✨ Presenting Bento + Retro</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>

      {/* Retro Grid Section - Truly Full Width */}
      <div className="relative w-screen h-[500px] overflow-hidden -ml-[50vw] left-1/2 right-1/2">
        <span className="pointer-events-none absolute z-10 mt-12 w-full whitespace-pre-wrap bg-gradient-to-b from-[#ffd319] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-7xl font-bold leading-none tracking-tighter text-transparent">
          Retro Grid
        </span>
        <RetroGrid className="scale-125" />
      </div>

      {/* Bento Grid - Seamlessly Connected */}
      <div className="mx-auto px-4 md:px-8 grid max-w-7xl gap-4 md:grid-cols-3 md:gap-6 -mt-8">
        {/* Globe Card - Spans 2 columns */}
        <div className="relative col-span-2 flex h-[400px] items-center justify-center overflow-hidden rounded-3xl border bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:bg-neutral-950 dark:border-white/5 dark:shadow-neutral-900/30">
          <span className="pointer-events-none absolute top-8 whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Globe
          </span>
          <Globe className="absolute top-1/2 -translate-y-1/4" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>

        <div className="flex h-fit items-center justify-center rounded-3xl border bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:bg-neutral-950 dark:border-white/5 dark:shadow-neutral-900/30">
          <Profile />
        </div>

        <div className="flex h-fit items-center justify-center rounded-3xl border bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:bg-neutral-950 dark:border-white/5 dark:shadow-neutral-900/30">
          <NumberTicker
            value={100}
            className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-black dark:text-white"
          />
        </div>

        <div className="flex h-fit items-center justify-center rounded-3xl border bg-white p-4 shadow-lg transition-all hover:shadow-xl dark:bg-neutral-950 dark:border-white/5 dark:shadow-neutral-900/30">
          <BatteryLevel />
        </div>

        <div className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-3xl border bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-neutral-950 dark:border-white/5 dark:shadow-neutral-900/30">
          <p className="z-10 whitespace-pre-wrap text-center text-3xl font-medium tracking-tighter text-black dark:text-white">
            Ripple
          </p>
          <Ripple className="scale-150" />
        </div>
      </div>
    </div>
  );
}