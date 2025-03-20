import TopicCard from "./topicCard";
import categories from "@/lib/categories";
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
                            {
                                categories.map((cat)=>{
                                    return(
                                        <TopicCard
                                        key={cat?.id}
                                        Icon={cat?.icon}
                                        topic={`${cat?.category}`}
                                        animationType="fade-up"
                                        /> 
                                    )
                                })
                            }
                        </div>  
                    </div>

                    {/* in season */}
                    <div className="flex flex-col gap-8 mb-8">
                        <div className="flex items-center gap-3">
                            <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="w-full h-[1px] bg-[#647403]"/>
                            <h1 data-aos="fade-left" data-aos-anchor-placement="center-bottom" className="uppercase text-[#647403] font-[500] text-3xl lg:text-4xl">in my <span className="text-5xl lg:text-8xl">season</span></h1>
                        </div>

                        <div className="flex flex-col flex-wrap md:flex-row lg:flex-nowrap items-center justify-center gap-4">
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