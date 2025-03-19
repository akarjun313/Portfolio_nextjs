import NavbarBtns from "./NavbarBtns";

export default function Navbar() {
    return (
        <nav className='fixed top-0 left-0 w-full bg-black shadow-lg shadow-[#7B4BD3] flex justify-between items-center px-28 py-6'>
            <div className="text-white font-bold">MyLogo</div>
            <div>
                <NavbarBtns />
            </div>
        </nav>
    )
}
