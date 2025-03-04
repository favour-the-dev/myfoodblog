"use client"
import Link from "next/link";
import Image from "next/image";
import brownies from "../../../../assets/brownies.jpg";
function Hero() {
    return ( 
        <>
            <section className="relative bg-[#647403] text-[#FFFEF6] w-full min-h-screen flex flex-col items-center justify-center">
                <div className="max-cont flex flex-col md:flex-row items-center justify-between">
                    {/* mobile image cover */}
                    <div className="md:hidden bg-black absolute top-0 right-0 opacity-80 w-full h-full z-10"/>
                    <Image
                    src={brownies}
                    alt=""
                    className="md:hidden absolute top-0 right-0 w-full h-full opacity-20 z-20"
                    />
                    {/* text-content */}
                    <div className="relative z-30 max-w-fit md:max-w-2/3 lg:max-w-1/2  p-3 lg:p-0 flex flex-col gap-2">
                        <h1 className="font-bold text-4xl md:text-[70px]">BROWNIE MAGIC</h1>
                        <h2 className="text-2xl md:text-3xl font-bold md:leading-[45px] leading-[30px]">
                            <sub className="text-2xl md:text-4xl">5</sub> tips on how to make the best Brownies in the game.</h2>
                        <div className="w-full my-3 h-[1px] bg-[#E4D8AB]"/>
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="border border-[#E4D8AB] text-[#E4D8AB] px-4 py-1 rounded-3xl font-semibold md:text-xl  tracking-tighter">
                                    How to
                                </span>
                                <span className="border border-[#E4D8AB] text-[#E4D8AB] px-4 py-1 rounded-3xl font-semibold md:text-xl  tracking-tighter">
                                    Baking
                                </span>
                            </div>
                            <span className="text-[#E4D8AB]">
                                10 min read
                            </span>
                        </div>
                        <Link href={'/'} className="w-full text-center md:w-fit bg-[#101010] text-[#E4D8AB] font-semibold text-lg uppercase rounded-3xl px-5 py-2">
                            Read Now
                        </Link> 
                    </div>
                    {/* image content desktop */}
                        <div className="hidden lg:block rounded-2xl min-w-[700px] max-h-[500px] top-0 absolute right-[-50px]">
                            <Image
                            src={brownies}
                            alt=""
                            className="w-full h-full rounded-[35%]"
                            />
                        </div>
                </div>
            </section>
        </>
     );
}

export default Hero;