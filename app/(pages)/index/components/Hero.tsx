"use client"
import Link from "next/link";
import Image from "next/image";
import brownies from "../../../../assets/cutting.jpg";;
function Hero() {
    return ( 
        <>
            <section className="relative bg-[#647403] text-[#FFFEF6] w-full min-h-[100dvh] lg:min-h-screen flex flex-col items-center justify-center">
                {/* feature article */}
                <div className="max-cont flex flex-col md:flex-row items-center justify-between">
                    {/* mobile image cover */}
                    <div className="lg:hidden bg-black absolute top-0 right-0 opacity-80 w-full h-full z-10"/>
                    <Image
                    src={brownies}
                    alt=""
                    className="lg:hidden absolute top-0 right-0 w-full h-full opacity-20 z-20"
                    />
                    {/* text-content */}
                    <div data-aos="fade-up" data-aos-once="true" className="relative z-30 max-w-fit md:max-w-2/3 lg:max-w-1/2  p-3 lg:p-0 flex flex-col gap-3">
                        <h1 className="font-bold text-4xl md:text-[70px]">BROWNIE MAGIC</h1>
                        <h2 className="text-2xl md:text-3xl font-bold md:leading-[45px] leading-[30px]">
                            <sub className="text-2xl md:text-4xl">5</sub> tips on how to make the best Brownies in the game.</h2>
                        <div className="w-full my-3 h-[1px] bg-[#E4D8AB]"/>
                        <div className="w-full flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="border border-[#E4D8AB] text-[#E4D8AB] px-4 py-1 rounded-3xl font-semibold  tracking-tighter">
                                    How to
                                </span>
                                <span className="border border-[#E4D8AB] text-[#E4D8AB] px-4 py-1 rounded-3xl font-semibold  tracking-tighter">
                                    Baking
                                </span>
                            </div>
                            <span className="text-[#E4D8AB] font-semibold">
                                10 min read
                            </span>
                        </div>
                        <Link href={'/article'} className="w-full text-center md:w-fit bg-[#101010] text-[#E4D8AB] font-semibold uppercase rounded-3xl px-5 py-2 my-5">
                            Read Now
                        </Link> 
                    </div>
                    {/* image content desktop */}
                        <div data-aos="zoom-in" data-aos-once="true" className="hidden lg:block rounded-3xl max-w-[725px] max-h-[600px] w-full h-full top-0 absolute right-[-25px]">
                            <Image
                            src={brownies}
                            alt=""
                            className="w-full h-full rounded-[42%]"
                            />
                        </div>
                </div>
            </section>
        </>
     );
}

export default Hero;