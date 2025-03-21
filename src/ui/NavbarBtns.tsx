"use client";

import { Link } from "react-scroll"
import React from 'react'

export default function NavbarBtns() {
    return (
        <div className="flex space-x-6">
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
        </div>
    )
}
