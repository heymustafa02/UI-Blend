'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/robot-card"
import { SplashCursor } from "@/components/ui/splash-cursor"
import { useState } from "react";
 
export default function SplineSceneBasic() {
  const [bgColor, setBgColor] = useState("bg-black/[0.96]");
  
  const colors = [
    "bg-black/[0.96]",
    "bg-cyan-600/90",      // Vibrant aqua
    "bg-blue-500/90",      // Bright blue
    "bg-white/[0.96]",     // White
    "bg-sky-400/90",       // Light blue
    "bg-teal-500/90",      // Teal
    "bg-indigo-500/90"     // Indigo
  ];

  const handleSplineClick = () => {
    const currentIndex = colors.indexOf(bgColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setBgColor(colors[nextIndex]);
  };

  return (
    <Card className={`min-h-screen w-full ${bgColor} relative overflow-hidden transition-colors duration-700`}>
      <SplashCursor />
      
      <div className="flex min-h-screen">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-xl text-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative cursor-pointer" onClick={handleSplineClick}>
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}