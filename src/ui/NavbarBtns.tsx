"use client";

import { Link } from "react-scroll"

export default function NavbarBtns() {
    return (
        <div className="flex space-x-6 jusify-center items-center">
            <Link to="about" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#7B4BD3] transition-all duration-300">
                About
            </Link>
            <Link to="skills" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#7B4BD3] transition-all duration-300">
                Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#7B4BD3] transition-all duration-300">
                Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer hover:text-[#7B4BD3] transition-all duration-300">
                Contact
            </Link>
            <div
                className="pl-10 py-0"
            >
                <a
                    href="https://drive.google.com/file/d/1dSibDcI9dPI-kP_9873YADqKQhfOud6V/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-dashed border-[#7B4BD3] border-2 rounded-full px-6 py-2 text-sm font-semibold text-[#7B4BD3] hover:bg-[#7B4BD3] hover:text-white transition-all duration-300 hover:cursor-pointer"
                >
                    My Resume
                </a>
            </div>
        </div>
    )
}
