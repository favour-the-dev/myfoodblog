import { MdOutlineEggAlt } from "react-icons/md";
import { LuChefHat } from "react-icons/lu";
import { FaGlassMartiniAlt } from "react-icons/fa";
import { GiHamburger } from "react-icons/gi";
import { MdOutlineDinnerDining } from "react-icons/md";
import { FaWineGlassAlt } from "react-icons/fa";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import TopicCard from "./topicCard";
import { Articles } from "@/lib/dummyData";
import ArticleCard from "./articleCard";
function Available() {
    return ( 
        <>
            <section className="w-full bg-[#F9F7EB] p-5 md:py-10">
                <div className="max-cont flex flex-col gap-10">
                    {/* in my kitched */}
                    <div className="flex flex-col gap-8 mb-8">
                        <div className="flex items-center gap-3">
                            <h1 data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="uppercase text-[#647403] font-[500] text-3xl lg:text-4xl">in my <span className="text-5xl lg:text-8xl">kitchen</span></h1>
                            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="w-full h-[1px] bg-[#647403]"/>
                        </div>
                        <div className="flex items-center flex-wrap justify-center gap-8">
                            <TopicCard
                            Icon={MdOutlineEggAlt}
                            topic="breakfast"
                            />         
                            <TopicCard
                            Icon={LuChefHat}
                            topic="baking"
                            />
                            <TopicCard
                            Icon={FaGlassMartiniAlt}
                            topic="cocktails"
                            />
                            <TopicCard
                            Icon={GiHamburger}
                            topic="Dinners"
                            />
                            <TopicCard
                            Icon={MdOutlineDinnerDining}
                            topic="pasta"
                            />
                            <TopicCard
                            Icon={FaWineGlassAlt}
                            topic="wine"
                            />
                            <TopicCard
                            Icon={MdOutlineTipsAndUpdates}
                            topic="tips"
                            />
                        </div>  
                    </div>

                    {/* in season */}
                    <div className="flex flex-col gap-8 mb-8">
                        <div className="flex items-center gap-3">
                            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="w-full h-[1px] bg-[#647403]"/>
                            <h1 data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="uppercase text-[#647403] font-[500] text-3xl lg:text-4xl">in my <span className="text-5xl lg:text-8xl">season</span></h1>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            {Articles.map((article)=>{
                                return(
                                    <ArticleCard
                                    key={article?.id}
                                    articleImage={article?.articleImage}
                                    articleTopic={article?.articleTopic}
                                    articleDesc={article?.articleDesc}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}

export default Available;