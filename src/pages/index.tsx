import Image from "next/image";
import { Inter } from "next/font/google";
import { AuroraBackgroundDemo } from '../components/AuroraBackgroundDemo';
import { AppleCardsCarouselDemo } from "@/components/AppleCardsCarouselDemo";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AuroraBackgroundDemo />
      <AppleCardsCarouselDemo />
      <GridBackgroundDemo/>
    </div>

  );
}
