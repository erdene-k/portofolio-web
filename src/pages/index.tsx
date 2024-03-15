import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const linkStyle = "rounded-lg border-color-border px-3.5 py-2 hover:border-2";
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="my-24 h-screen">
          <div
            className="flex h-1/2"
          >
            <div className=" w-1/2 bg-green-400 "></div>
            <div className=" w-1/2 bg-red-400 "></div>
          </div>
          <p className="text-center">Hi, I am Jhan Gonzales</p>
        </div>
      </main>
    </div>
  );
}
