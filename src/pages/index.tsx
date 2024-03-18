import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="my-24">
          <p className="text-center">Hi, I am Jhan Gonzales</p>
        </div>
        <div className="m-12 flex justify-center">
          <div className="rounded-lg border-2 border-color-border p-16">
            <div className="flex gap-2">
              <div className="w-1/2">
                <h2>My experience</h2>
                <p>
                  Transformed an e-commerce website with a modern redesign,
                  optimizing the shopping journey and elevating brand identity.
                  Resulted in improved user engagement, increased sales, and a
                  seamless shopping experience.
                </p>
              </div>
              <div className=" bg-green-200 w-1/2">asd</div>
            </div>
          </div>
        </div>
        <div className="work-section">
          <h2>My experience</h2>
        </div>
        <div className="work-section">
          <h2>My skillset</h2>
          <p>carousel</p>
          mobile view mb menu
        </div>
      </main>
    </div>
  );
}
