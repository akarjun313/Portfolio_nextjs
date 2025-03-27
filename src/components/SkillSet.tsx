import TechStack from "@/ui/TechStack"


export default function SkillSet() {
    return (
        <div className="flex flex-col gap-4">
            <ul className="flex flex-wrap justify-center gap-6 z-0">
                <li
                    data-aos="fade-in"
                >
                    <TechStack imgSrc="/svg/html-5-svgrepo-com.svg" imgAlt="HTML5 Logo" skillName="HTML" />
                </li>
                <li
                    data-aos="fade-in"
                    data-aos-delay="200"
                >
                    <TechStack imgSrc="/svg/css-3-svgrepo-com.svg" imgAlt="CSS3 Logo" skillName="CSS" />
                </li>
                <li
                    data-aos="fade-in"
                    data-aos-delay="300"
                >
                    <TechStack imgSrc="/svg/javascript-svgrepo-com.svg" imgAlt="Javascript Logo" skillName="Javascript" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="400"
                >
                    <TechStack imgSrc="/svg/nodejs-1-logo-svgrepo-com.svg" imgAlt="NodeJS Logo" skillName="NodeJS" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="500"
                >
                    <TechStack imgSrc="/svg/mongodb-svgrepo-com.svg" imgAlt="MongoDB Logo" skillName="MongoDB" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="600"
                >
                    <TechStack imgSrc="/svg/express-svgrepo-com.svg" imgAlt="ExpressJS Logo" skillName="ExpressJS" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="700"
                >
                    <TechStack imgSrc="/svg/reactjs-svgrepo-com.svg" imgAlt="ReactJS Logo" skillName="ReactJS" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="800"
                >
                    <TechStack imgSrc="/svg/tailwindcss-icon-svgrepo-com.svg" imgAlt="TailwindCSS Logo" skillName="TailwindCSS" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="900"
                >
                    <TechStack imgSrc="/svg/materialui-svgrepo-com.svg" imgAlt="MaterialUI Logo" skillName="MaterialUI" />
                </li>

            </ul>
            <ul className="flex flex-wrap justify-center gap-6 z-0">
                <li
                data-aos="fade-in"
                    data-aos-delay="1000"
                >
                    <TechStack imgSrc="/svg/typescript-official-svgrepo-com.svg" imgAlt="Typescript Logo" skillName="Typescript" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="1100"
                >
                    <TechStack imgSrc="/svg/socket-svgrepo-com.svg" imgAlt="Socket.io Logo" skillName="Socket.io" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="1200"
                >
                    <TechStack imgSrc="/svg/git-svgrepo-com.svg" imgAlt="Git Logo" skillName="Git" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="1300"
                >
                    <TechStack imgSrc="/svg/github-142-svgrepo-com.svg" imgAlt="Github Logo" skillName="Github" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="1400"
                >
                    <TechStack imgSrc="/svg/postgresql-svgrepo-com.svg" imgAlt="PostgreSQL Logo" skillName="PostgreSQL" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="1500"
                >
                    <TechStack imgSrc="/svg/nextjs-icon-svgrepo-com.svg" imgAlt="NextJS Logo" skillName="NextJS" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="1600"
                >
                    <TechStack imgSrc="/svg/vite-svgrepo-com.svg" imgAlt="Vite.js Logo" skillName="Vite.js" />
                </li>
                <li
                data-aos="fade-in"
                    data-aos-delay="1700"
                >
                    <TechStack imgSrc="/svg/vscode-svgrepo-com.svg" imgAlt="VSCode Logo" skillName="VSCode" />
                </li>
            </ul>
        </div>
    )
}
