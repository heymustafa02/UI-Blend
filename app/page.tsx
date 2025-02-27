import Image from "next/image";
import WavyBackgroundDemo from "./color-wave/page";
import { AppleStyleDock } from "./maindock";

export default function Home() {
  return (
    <div>
      <WavyBackgroundDemo />
      <AppleStyleDock/>
    </div>
  );
}
