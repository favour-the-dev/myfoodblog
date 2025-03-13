import Link from "next/link";
import { Exo_2 } from "next/font/google";
import { CiForkAndKnife } from "react-icons/ci";
const exo_2 = Exo_2({
    weight: ["400", "700",],
    subsets: ["latin"],
})
function Footer() {
    return ( 
        <>
        <footer className="bg-[#E4D8AB] text-[#647403] w-full min-h-[30dh] p-5 overflow-hidden">
            <div className="max-cont flex flex-col">
                <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true"  className={`text-[#647403] flex items-center ${exo_2.className}`}>
                    <CiForkAndKnife className="text-3xl"/> <span className="ext-2xl md:text-4xl font-bold tracking-tighter">
                    MY FOOD BLOG
                    </span>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
                    {/* logo and links */}
                    <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="max-w-fit">
                        <div className="w-full my-2 h-[1px] bg-[#647403]"/>
                        <div className="w-full flex justify-between gap-4">
                            <div className="max-w-1/2">
                                <span className="font-semibold text-xl text-balance">Tasty destination for foodies</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link href={'/'} className="font-semibold text-xl hover:scale-105 duration-200 ease-in-out">Home</Link>
                                <Link href={'/'} className="font-semibold text-xl hover:scale-105 duration-200 ease-in-out">Recipes</Link>
                                <Link href={'/'} className="font-semibold text-xl hover:scale-105 duration-200 ease-in-out">Tips</Link>
                                <Link href={'/'} className="font-semibold text-xl hover:scale-105 duration-200 ease-in-out">Contact</Link>
                            </div>
                        </div>
                    </div>
                    {/* newletter form */}
                    <div data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="bg-[#647403] text-[#E4D8AB] rounded-3xl min-w-fit lg:min-w-1/2 p-5 flex flex-col gap-5">
                        <h2 className="font-semibold text-xl">Join our newsletter for the tastiest treats.</h2>
                        <label htmlFor="newsletter" className="w-full flex flex-col md:flex-row items-center gap-4">
                            <input 
                            type="text" 
                            placeholder="Your email address" 
                            className="w-full md:w-fit   text-xl border border-[#E4D8AB] placeholder:text-[#E4D8AB] rounded-3xl px-5 py-2 focus:outline-none"/>
                            <button className="w-full md:w-fit bg-[#101010] text-[#E4D8AB] font-semibold text-lg uppercase rounded-3xl px-3 py-2">
                                subscribe
                            </button>
                        </label>
                    </div>
                </div>
            </div>
        </footer>
        </>
     );
}

export default Footer;