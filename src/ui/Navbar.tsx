import NavbarBtns from "./NavbarBtns";

export default function Navbar() {
    return (
        <div>
            <nav
                className='fixed top-0 left-0 w-full bg-black shadow-lg shadow-[#7B4BD3] hidden md:flex justify-between items-center px-28 py-6 z-50'
            >
                <div className="text-white font-bold">MyLogo</div>
                <div>
                    <NavbarBtns />
                </div>
            </nav>
            <div className="flex md:hidden justify-center mt-6">
                <div className="text-white font-bold">MyLogo</div>
            </div>
        </div>
    )
}
