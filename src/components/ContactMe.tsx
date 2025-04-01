import Image from "next/image";


export default function ContactMe() {
    return (
        <div
            className="flex flex-row items-center w-full relative pt-16 md:pt-32"
        >
            <div
                className="h-1 md:h-2 lg:h-20 w-full flex justify-center items-center"
                data-aos="slide-right"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
            >
                <div
                className="h-1 md:h-2 w-full bg-white"
                >

                </div>
            </div>

            <a
                href="mailto:akarjun313@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-12 h-12 md:w-auto md:h-auto p-1 md:p-3 lg:p-4 rounded-md m-0 hover:cursor-pointer hover:shadow-[3px_5px_25px_0.5px_#7B4BD3] z-10 absolute left-20 md:left-60 lg:left-96"
                data-aos="flip-left"
                data-aos-delay="1200"
                data-aos-anchor-placement="top-bottom"
            >
                <Image
                    src="/svg/gmail_logo.svg"
                    alt="G-Mail Logo"
                    width={70}
                    height={70}
                />
            </a>

            <a
                href="https://www.linkedin.com/in/akarjun313"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white w-12 h-12 md:w-auto md:h-auto p-1 md:p-3 lg:p-4 rounded-md m-0 hover:cursor-pointer hover:shadow-[3px_5px_25px_0.5px_#7B4BD3] z-10 absolute right-20 md:right-60 lg:right-96"
                data-aos="flip-left"
                data-aos-delay="1800"
                data-aos-anchor-placement="top-bottom"
            >
                <Image
                    src="/svg/linkedin_logo.svg"
                    alt="Linkedin Logo"
                    width={70}
                    height={70}
                />
            </a>
        </div>
    )
}
