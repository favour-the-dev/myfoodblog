"use client"
import Hero from "./components/Hero";
import Guide from "./components/guide";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Available from "./components/Available";
function HomePage() {
    useEffect(() => {
        AOS.init();
      }, []);
    return ( 
        <>
            <section className="">
                <Hero/>
                <Guide/>
                <Available/>
            </section>
        </>
     );
}

export default HomePage;