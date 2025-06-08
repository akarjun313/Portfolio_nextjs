import Image from "next/image";
import NavbarBtns from "./NavbarBtns";

export default function Navbar() {
    return (
        <div>
            <nav
                className='fixed top-0 left-0 w-full bg-black shadow-lg shadow-[#7B4BD3] hidden md:flex justify-between items-center px-28 py-6 z-50'
            >
                <div className="text-white font-bold">
                    <Image
                    src='/svg/my_logo.svg'
                    alt='logo'
                    width={50}
                    height={50}
                    />
                </div>
                <div
                    className="flex justify-center items-center px-0 py-0"
                >
                    <NavbarBtns />
                </div>
            </nav>

            {/* Only visible on mobile  */}
            {/* navbar for larger screens are under 'ui/NavbarBtns.tsx'  */}
            <div className="flex md:hidden justify-between mt-6 px-6">
                <div className="text-white font-bold">
                <Image
                    src='/svg/my_logo.svg'
                    alt='logo'
                    width={50}
                    height={50}
                    />
                </div>

                {/* resume button  */}
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
