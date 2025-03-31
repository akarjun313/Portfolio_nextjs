import Image from "next/image";


export default function FooterComponent() {
    return (
        // container 
        <div
            className="flex flex-row w-full border-2 border-slate-600"
        >

            {/* inner container 1 */}
            <div
                className="flex flex-col w-3/12 border-r-2 border-slate-600 justify-center items-center py-6"
            >
                <div>
                    <h2
                        className="font-zuume text-white font-bold text-2xl lg:text-6xl"
                    >
                        ARJUN
                    </h2>

                </div>
                <h2
                    className="font-zuume text-white font-bold text-2xl lg:text-6xl"
                >
                    APPUKUTTAN
                </h2>
            </div>

            {/* inner container 2  */}
            <div
                className="flex flex-col w-9/12"
            >
                {/* top container  */}
                <div
                    className="flex border-b-2 border-slate-600 h-1/2"
                >
                    <div
                        className="flex w-1/2 border-r-2 border-slate-600 justify-center items-center py-3"
                    >
                        <h2
                            className="font-zuume text-white font-bold text-lg lg:text-6xl "
                        >
                            THANK YOU
                        </h2>
                    </div>
                    <div
                        className="flex flex-col w-1/2 justify-center items-center"
                    >
                        <h2
                            className="font-bold text-xs"
                        >
                            akarjun313@gmail.com
                        </h2>
                        <h2 className="font-bold text-xs">
                            +91 9061774026
                        </h2>
                    </div>
                </div>

                {/* bottom container  */}
                <div
                    className="flex h-1/2"
                >
                    <div
                        className="border-r-2 border-slate-600 h-full w-1/4 hidden md:flex"
                    ></div>
                    <div className="flex border-r-2 border-slate-600 h-full w-2/4 justify-center items-center">
                        <ul className="flex gap-2 md:gap-3 p-2">
                            <li>
                                <a
                                    href="mailto:akarjun313@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src='/svg/email-9-svgrepo-com.svg'
                                        alt="Email"
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/akarjun313"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src='/svg/linkedin-rounded-border-svgrepo-com.svg'
                                        alt="Linkedin"
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/arjun.ak.9026/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src='/svg/facebook-svgrepo-com.svg'
                                        alt="Facebook"
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/mr__.parkour/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src='/svg/instagram-svgrepo-com.svg'
                                        alt="Instagram"
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/akarjun313"
                                    target="_blank"
                                >
                                    <Image
                                        src='/svg/github-142-svgrepo-com.svg'
                                        alt="Github"
                                        width={30}
                                        height={30}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex h-full w-1/4 justify-center items-center text-xs md:text-sm p-2">
                        <h2>© Copyright 2025</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
