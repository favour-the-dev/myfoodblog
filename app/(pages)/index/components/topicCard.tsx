import { topicCardProps } from "@/app/types/types";
import Link from "next/link";
function TopicCard({Icon, topic}: topicCardProps) {
    return ( 
        <>
        <Link href={`/${topic}`} data-aos="fade-up" className="flex flex-col items-center gap-3 hover:scale-[1.025] duration-200 ease-linear">
            <div className="bg-[#E4D8AB] text-[#647403] w-fit p-5 rounded-xl text-6xl">
                <Icon/>
            </div>
            <span className="capitalize">{topic}</span>
        </Link>
        </>
     );
}

export default TopicCard;