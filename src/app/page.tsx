import Hero from "@/components/Hero"
import Navbar from "@/ui/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div
        id="hero"
        className="flex mt-20 h-[40rem] justify-center items-center"
      >
        <Hero />
      </div>
    </main>
  );
}