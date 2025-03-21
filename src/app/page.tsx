import SectionHeading from "@/components/SectionHeading";
import Hero from "@/components/Hero"
import Navbar from "@/ui/Navbar"
import AboutDescription from "@/components/AboutDescription"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div
        id="hero"
        className="flex md:mt-20 pt-16 md:pt-0 h-[20rem] md:h-[40rem] justify-center md:items-center"
      >
        <Hero />
      </div>
      <div
        id="about"
        className="pb-24 md:pb-36"
      >
        <SectionHeading headT="ABOUT" headB="MYSELF" caption="Code. Build. Debug. Repeat"/>
        <AboutDescription />
      </div>
      <div
        id="skills"
      >
        <SectionHeading headT="MY" headB="EXPERTISE" caption="Tech Stack"/>
      </div>
      <div
        id="projects"
      >
        <SectionHeading headT="MY" headB="WORK" caption="Lines of Code Written"/>
      </div>
      <div
        id="contact"
      >
        <SectionHeading headT="PING" headB="ME" caption="Drop Your Thoughts"/>
      </div>
      
    </main>
  );
}