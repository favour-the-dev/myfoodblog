import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
function Navbar() {
    return ( 
        <>
            <nav className="w-full bg-[#647403] p-3 z-50 text-[#FFFEF6]">
                <div className="max-cont flex-row-between">
                        {/* logo */}
                        <div className="">
                            <span className="text-3xl md:text-5xl font-bold tracking-tight">MY FOOD</span>
                        </div>
                        {/* desktop nav content */}
                        <div className="hidden md:flex items-center justify-between gap-5">
                            <Link href={'/'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Home</Link>
                            <Link href={'/'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Recipes</Link>
                            <Link href={'/'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Tips</Link>
                            <Link href={'/'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Contact</Link>
                            <Link href={'/'} className="text-xl font-bold hover:scale-105 duration-200 ease-in-out"><CiSearch /></Link>
                        </div>
                        {/* mobile nav */}
                        <div className="md:hidden">
                            <div className="text-3xl font-bold">
                            <IoIosMenu />
                            </div>
                        </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;