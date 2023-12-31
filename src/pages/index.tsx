
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-gray-100 mx-auto">
        <div className="flex flex-col justify-between min-h-screen">
          <Navbar />
          <div className="flex justify-center items-center font-Oswald tracking-wide text-xl">
            Home Page launching soon
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
