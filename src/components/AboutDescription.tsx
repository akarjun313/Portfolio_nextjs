import Image from "next/image";


export default function AboutDescription() {
    return (
        <div
            className="flex flex-col md:flex-row justify-between bg-[#7B4BD3] shadow-[4px_5px_10px_#e5e1db] rounded-md mx-auto w-5/6 px-11 py-10"
            data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-easing="linear"
            data-aos-anchor-placement='top-bottom'
        >
            <div
                className="flex flex-col w-full md:w-2/3"
            >
                <p
                    className="font-genos font-normal md:text-lg text-zinc-100 drop-shadow-lg"
                >
                    Hey, I’m Arjun Appukuttan, a Full Stack Developer (MERN) passionate about building scalable and efficient web applications.
                    My journey into coding started in my senior secondary days, which led me to pursue a BCA degree. During my final-year project,
                    I discovered my love for web development and later refined my skills through a MERN stack development course.
                </p>
                <p
                    className="font-genos font-normal md:text-lg text-zinc-100 drop-shadow-lg"
                >
                    I specialize in backend development, focusing on building robust APIs, database management, and optimizing server-side logic
                    using Node.js, Express.js, and MongoDB. At the same time, I have experience with React and modern frontend technologies, ensuring
                    smooth and responsive user experiences when needed.
                </p>
                <p
                    className="font-genos font-normal md:text-lg text-zinc-100 drop-shadow-lg"
                >
                    I thrive on solving complex problems, writing clean and efficient code, and continuously learning new technologies to stay ahead
                    in the ever-evolving tech landscape.
                </p>
            </div>
            <div
                className="w-40 h-40 lg:w-60 lg:h-60 rounded-full shadow-lg hidden md:flex justify-center items-center relative"
            >
                <Image
                src = "/profil_IMG.jpg"
                alt = "Profile_Image"
                fill
                className="rounded-full"
                />
            </div>
        </div>
    )
}
