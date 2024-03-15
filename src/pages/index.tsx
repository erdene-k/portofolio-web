import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  const linkStyle = "rounded-lg border-color-border px-3.5 py-2 hover:border-2";
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <div className="my-12 h-screen">
          <div className="min-h-1/2 bg-green-400"></div>
          <h1>Hi, I am Jhan Gonzales</h1>
        </div>
      </main>
    </div>
  );
}
