import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Filters from "./components/Filters";
import PropertyList from "./components/PropertyList";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col p-5 space-y-4">
      <header className="text-sm text-gray-500">
        Home &gt; Property for Buy in Noida
      </header>
      <div className="flex">
        <Filters />
        <PropertyList />
      </div>
    </div>
  );
}
