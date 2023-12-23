import Image from "next/image";
import { Oswald } from "next/font/google";
import Link from "next/link";
import Product from "@/components/Product";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="max-w-[1600px] mx-auto">
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}
