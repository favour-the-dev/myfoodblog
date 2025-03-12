"use client"
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";
import { Exo_2 } from "next/font/google";
import { CiForkAndKnife } from "react-icons/ci";
const exo_2 = Exo_2({
    weight: ["400", "700",],
    subsets: ["latin"],
})
function Navbar() {
    const [navOpen, setNavOpen] = useState<boolean>(false);
    const [navScroll, setNavScroll] = useState<boolean>(false);
    function handleNavScroll(){
        if(window.scrollY > 100){
            setNavScroll(true);
        }else{
            setNavScroll(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleNavScroll)

        return()=>{
            window.removeEventListener('scroll', handleNavScroll)
        }
    }, [])
    return ( 
        <>
            <nav className={`w-full bg-[#647403] p-3 z-50 text-[#FFFEF6] ${navScroll ? 'sticky top-0' : "relative"}`}>
                <div className="max-cont flex-row-between">
                        {/* logo */}
                        <div data-aos="zoom-in-up" data-aos-delay="100" data-aos-once="true"  className={`flex items-center ${exo_2.className}`}>
                            <CiForkAndKnife className="text-3xl"/> <span className="ext-2xl md:text-4xl font-bold tracking-tighter">
                            MY FOOD BLOG
                            </span>
                        </div>
                        {/* desktop nav content */}
                        <div data-aos="zoom-in-left" data-aos-delay="100" data-aos-once="true" className="hidden md:flex items-center justify-between gap-5">
                            <Link href={'/'} className="font-semibold hover:scale-105 duration-200 ease-in-out">Home</Link>
                            <Link href={'/articles'} className="font-semibold hover:scale-105 duration-200 ease-in-out">Articles</Link>
                            <Link href={'/categories'} className="font-semibold hover:scale-105 duration-200 ease-in-out">Categories</Link>
                            <Link href={'/login'} className="font-semibold hover:scale-105 duration-200 ease-in-out">Login</Link>
                            <Link href={'/search'} className="text-xl font-bold hover:scale-105 duration-200 ease-in-out"><CiSearch /></Link>
                        </div>
                        {/* mobile nav */}
                        <div className="md:hidden">
                            <div className="text-3xl font-bold" onClick={() => setNavOpen((prevState:boolean)=> !prevState)}>
                            {
                                navOpen ? <IoMdClose /> : <IoIosMenu />
                            }
                            </div>
                            <div className={`w-full bg-[#647403] text-[#FFFEF6] flex flex-col justify-center p-5 gap-5 absolute top-[100%] left-0 duration-300 ease-in-out ${navOpen ? 'opacity-100 h-[100dvh]' : 'opacity-0 h-0'}`}>
                                <Link href={'/'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Home</Link>
                                <Link href={'/articles'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Articles</Link>
                                <Link href={'/categories'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Categories</Link>
                                <Link href={'/login'} className="text-xl font-semibold hover:scale-105 duration-200 ease-in-out">Login</Link>
                                <Link  href={'/mobileSearch'} className="text-xl w-fit relative">
                                    <input type="text" 
                                    className="border border-[#FFFEF6] text-[#FFFEF6] rounded-3xl px-4 py-2 focus:outline-none" 
                                    placeholder="Search..." disabled/>
                                    <CiSearch className="absolute top-[30%] right-[10%]"/>
                                </Link>
                            </div>
                        </div>
                </div>
            </nav>
        </>
     );
}

export default Navbar;