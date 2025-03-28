import Image from "next/image"


const ColoredHeading = ({ text }: { text: string }) => {
  const words = text ? text.split(' ') : [""]
  const colors = ["text-white", "text-[#7B4BD3]"]


  return (
    <h1>
      {words.map((word, index) => (
        <span
          key={index}
          className={`${colors[Math.floor(Math.random() * colors.length)]} text-2xl font-bold font-roboto`}
        >
          {word}{' '}
        </span>
      ))}
    </h1>
  )
}


export default function ProjectShowcase({
  projectTitle = "",
  overview = "",
  techStack = [],
  projectImageSrc = "",
  githubLink = "",
  liveDemoLink = "",
}: {
  projectTitle: string,
  overview: string,
  techStack: string[],
  projectImageSrc: string
  githubLink: string
  liveDemoLink: string
}) {
  return (
    <div
      className="flex flex-col md:flex-row w-full h-auto px-4 md:px-16 md:py-6 md:justify-center mb-32 md:my-6"
    >
      {/* project details */}
      <div
        className="w-full md:w-5/12 h-auto flex flex-col gap-4"
        data-aos="fade-right"
      >
        {/* project title */}
        <div
          className="max-w-72"
        >
          <ColoredHeading text={projectTitle} />
        </div>

        {/* Project content */}
        <div
          className="w-full flex flex-col gap-4"
        >
          {/* overview of the project */}
          <div
            className="flex flex-col gap-2"
          >
            <h2 className="font-semibold text-white ">Overview :</h2>
            <p
              className="text-white text-sm font-roboto pl-2"
            >
              {overview}
            </p>
          </div>

          {/* technologies used */}
          <div
            className="flex flex-col gap-2"
          >
            <h2 className="font-semibold text-white ">Tech Used :</h2>
            <ul
              className="flex flex-wrap gap-3 pl-3"
            >
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="border-2 border-white text-white inline-block px-4 py-1 rounded-md hover:bg-white hover:text-black transition-all duration-300 hover:cursor-default"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


      {/* Project image & External Links */}
      <div
        className="w-full md:w-5/12 h-auto flex flex-col items-center"
        data-aos="fade-left"
      >

        {/* Project image  */}
        <Image
          src={projectImageSrc}
          alt="Project_Image"
          width={500}
          height={500}
        />


        {/* Links to GitHub and Project Demo */}
        <div
          className="flex gap-7"
        >
          <a
            href={githubLink}
            target="_blank"
            className="flex gap-1 items-center justify-center border-2 border-white w-32 py-2 rounded-md hover:cursor-pointer"
          >
            <Image
              src="/svg/github-142-svgrepo-com.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            <p>
              GitHub
            </p>
          </a>

          <a
            href={liveDemoLink}
            target="_blank"
            className="flex gap-1 items-center justify-center border-2 border-white w-32 py-2 rounded-md hover:cursor-pointer"
          >
            <Image
              src="/svg/external-link-svgrepo-com.svg"
              alt="Live Demo"
              width={20}
              height={20}
            />
            <p>
              Demo
            </p>
          </a>

        </div>
      </div>
    </div>
  )
}
