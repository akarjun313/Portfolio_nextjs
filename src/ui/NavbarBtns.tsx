"use client";

import { Link } from "react-scroll"
import React from 'react'

export default function NavbarBtns() {
    return (
        <div className="flex space-x-6">
            <Link to="about" smooth={true} duration={500} className="text-white cursor-pointer">
                About
            </Link>
            <Link to="skills" smooth={true} duration={500} className="text-white cursor-pointer">
                Skills
            </Link>
            <Link to="projects" smooth={true} duration={500} className="text-white cursor-pointer">
                Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className="text-white cursor-pointer">
                Contact
            </Link>
        </div>
    )
}
