import SectionHeading from "@/components/SectionHeading"
import Hero from "@/components/Hero"
import Navbar from "@/ui/Navbar"
import AboutDescription from "@/components/AboutDescription"
import SkillSet from "@/components/SkillSet";
import ProjectShowcase from "@/components/ProjectShowcase";
import ContactMe from "@/components/ContactMe";
import FooterComponent from "@/components/FooterComponent";
import Hobbies from "@/components/Hobbies";


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
        className="pb-24 md:pb-36"
      >
        <SectionHeading headT="MY" headB="WORK" caption="Lines of Code Written" />
        <ProjectShowcase
          projectTitle="Movie Ticket Booking Application"
          overview="This Movie Ticket Booking Application is a full-stack project that enables users to browse movies, 
          select showtimes, book tickets, and leave reviews. It offers a seamless booking experience with secure authentication, 
          real-time seat selection, and online payments. The application includes an Admin Panel, where admins can manage users, 
          bookings, and add movies to the platform, and an Owner Panel, which allows theater owners to add and manage their theaters 
          and schedules."
          techStack={["ReactJS", "ExpressJS", "Typescript", "MongoDB", "Socket.io"]}
          projectImageSrc="https://res.cloudinary.com/dvzshp8jv/image/upload/v1743165443/PortfolioWebsite_projectIMG/ghx8qiwkfyyfwv9ps4iw.png"
          githubLink="https://github.com/akarjun313/MovieTicket_New_FE.git"
          liveDemoLink="https://movie-ticket-new-fe.vercel.app/"
        />


        <ProjectShowcase
          projectTitle="E-Commerce Application - Wrist Watch Selling Platform"
          overview="This E-commerce Application is a full-stack project for selling watches online. 
          It allows users to browse products, add items to their cart, make secure payments, and track their orders in real time. 
          The platform ensures a smooth shopping experience with an intuitive UI and efficient backend operations."
          techStack={["ReactJS", "ExpressJS", "MongoDB"]}
          projectImageSrc="https://res.cloudinary.com/dvzshp8jv/image/upload/v1743165443/PortfolioWebsite_projectIMG/hfidobbgkougdamgncgl.png"
          githubLink="https://github.com/akarjun313/EcommApp_FE.git"
          liveDemoLink="https://ecomm-app-fe.vercel.app/"
        />
      </section>
      <section
        id="contact"
        className="pb-24 md:pb-36"
      >
        <SectionHeading headT="PING" headB="ME" caption="Connect Me Through" />
        <ContactMe />
      </section>
      <section
        className="pb-24 md:pb-36"
      >
        <SectionHeading headT="WHEN I'M" headB="RECHARGING" caption="Life Outside Scripts" />
        <Hobbies />
      </section>
      <footer>
        <FooterComponent />
      </footer>

    </main>
  );
}