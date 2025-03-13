"use client"
import Image from "next/image";
import loginbg from "../../../../assets/loginbg.jpg";
import { Exo_2 } from "next/font/google";
import { CiForkAndKnife } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import google from "../../../../assets/google.svg";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const exo_2 = Exo_2({
    weight: ["400", "700",],
    subsets: ["latin"],
})
function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const passwordRef = useRef<HTMLInputElement | null>(null);
    
    function handleShowPassword(){
        if(showPassword){
            passwordRef.current!.type = "text";
        }else {
            passwordRef.current!.type = "password";
        }
    }

    useEffect(()=>{
        handleShowPassword()
    }, [showPassword])
    return ( 
        <>
            <section className="w-full h-screen bg-[#FFFEF6] fixed top-0 bottom-0 left-0 z-[1000] flex flex-col lg:flex-row items-center justify-center lg:justify-normal overflow-hidden">
                <div className="lg:max-w-1/2 w-full p-3 min-h-full flex flex-col gap-5 justify-center">
                    {/* head */}
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5  }}
                    className={`text-[#647403] flex items-center ${exo_2.className}`}>
                        <CiForkAndKnife className="text-3xl"/> <span className="text-xl md:text-2xl font-bold tracking-tighter">
                            MY FOOD BLOG
                        </span>
                    </motion.div>
                    {/* form */}
                    <form className="max-w-[80%] md:max-w-2/3 w-full mx-auto flex flex-col gap-5">
                        <div className="mb-4">
                            <h2 className="font-bold text-3xl md:text-4xl mb-4">Log In</h2>
                            <p className="text-sm text-gray-400">Don't have an account <Link href={`/signup`} className="underline text-[#647403]">Sign Up</Link></p>
                        </div>
                        <label htmlFor="email" className="flex flex-col gap-3 text-sm text-gray-400">
                            E-mail
                            <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="example@gmail.com" 
                            className="border border-gray-400 rounded-xl px-4 text-black py-2 focus:outline-none text-base"
                            />
                        </label>
                        <label htmlFor="password" className="relative flex flex-col gap-3 text-sm text-gray-400">
                            Password
                            <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="@#*%" 
                            ref={passwordRef}
                            className="border border-gray-400 rounded-xl px-4 text-black py-2 focus:outline-none text-base"
                            />
                            <div className="absolute border-l px-1 border-l-gray-400 right-0 top-[55%] text-2xl">
                                {
                                    showPassword ? <FaEyeSlash onClick={()=> setShowPassword(false)} className="cursor-pointer"/> 
                                    : <FaEye onClick={()=> setShowPassword(true)} className="cursor-pointer"/>
                                }
                            </div>
                        </label>
                        <div className="w-full flex items-center justify-between">
                            <label htmlFor="rememberme" className="text-sm flex items-center gap-1 text-gray-400">
                                <input type="checkbox" name="rememberme" id="rememberme" />
                                <span className="">Remember me</span>
                            </label>
                            <Link href={`/forgot`} className="underline text-[#647403] text-sm">Forgot Password</Link>
                        </div>

                        <button className="bg-[#647403] text-[#FFFEF6] w-full text-center px-4 py-2 rounded-3xl">Log In</button>
                    </form>

                    <div className="flex items-center gap-3 max-w-[80%] md:max-w-2/3 w-full mx-auto text-gray-400">
                        <div className="w-full h-[1px] bg-gray-400"/>
                        <span className="text-xs font-bold">OR</span>                        
                        <div className="w-full h-[1px] bg-gray-400"/>
                    </div>

                    <div className="max-w-[80%] md:max-w-2/3 w-full mx-auto">
                        <button className="w-full border border-gray-400 rounded-3xl flex items-center px-4 py-2">
                            <Image
                            src={google}
                            alt="google_logo"
                            width={30}
                            height={30}
                            />
                            <span className="text-sm text-gray-400 max-w-2/3 w-full mx-auto text-center font-bold">Continue With Google</span>
                        </button>
                    </div>
                </div>
                <div className="relative hidden lg:block lg:max-w-1/2 lg:w-full">
                    <div className="bg-black w-full h-full absolute top-0 left-0 opacity-60"/>
                    <Image
                    src={loginbg}
                    alt=""
                    className="w-full"
                    />
                    <motion.div 
                    initial={{opacity: 0, y:100}}
                    animate={{opacity: 1, y: 0}}
                    transition={{repeat: Infinity, duration: 3, delay: 2}}
                    data-aos-delay="100" data-aos-once="true" className={`text-[#FFFEF6] absolute top-[50%] left-[35%] flex items-center ${exo_2.className}`}>
                        <CiForkAndKnife className="text-3xl"/> <span className="text-2xl md:text-4xl font-bold tracking-tighter">
                            MY FOOD BLOG
                        </span>
                    </motion.div>
                </div>
            </section>
        </>
     );
}

export default Login;