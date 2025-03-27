import SectionHeading from "@/components/SectionHeading"
import Hero from "@/components/Hero"
import Navbar from "@/ui/Navbar"
import AboutDescription from "@/components/AboutDescription"
import SkillSet from "@/components/SkillSet";
import ProjectShowcase from "@/components/ProjectShowcase";


export default function Home() {
  return (
    <main>
      <Navbar />
      <section
        id="hero"
        className="flex md:mt-20 pt-16 md:pt-0 h-[20rem] md:h-[40rem] justify-center md:items-center"
      >
        <Hero />
      </section>
      <section
        id="about"
        className="pb-24 md:pb-36"
      >
        <SectionHeading headT="ABOUT" headB="MYSELF" caption="Code. Build. Debug. Repeat" />
        <AboutDescription />
      </section>
      <section
        id="skills"
        className="pb-24 md:pb-36"
      >
        <SectionHeading headT="MY" headB="EXPERTISE" caption="Tech Stack" />
        <div
          className="flex items-center justify-center"
        >
          <SkillSet />
        </div>
      </section>
      <section
        id="projects"
      >
        <SectionHeading headT="MY" headB="WORK" caption="Lines of Code Written" />
        <ProjectShowcase />
      </section>
      <section
        id="contact"
      >
        <SectionHeading headT="PING" headB="ME" caption="Connect Me Through" />
      </section>

    </main>
  );
}