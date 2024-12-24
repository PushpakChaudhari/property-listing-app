import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Filters from "./components/Filters";
import PropertyList from "./components/PropertyList";
import Nav from "./components/Nav";
import Example from "./components/Filter";
import Filter from "./components/Filter";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (<>
  <Nav/>
    <div className="pt-2">
      
    
    <header className="text-sm text-gray-600 pt-0 pl-3">
        Home &gt; Property for Buy in Noida
      </header>
    
{/*   
  <Filter/> */}
  <Filters/>
     
  </div>
    </>
  );
}
