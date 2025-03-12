import { ArticleCardProps } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
function ArticleCard({articleImage, articleTopic, articleDesc}: ArticleCardProps) {
    return ( 
        <>
            <Link data-aos="fade-up" data-aos-anchor-placement="center-bottom" href={`/${articleTopic}`} className="w-full max-w-[300px] h-[250px]">
                <Image
                src={articleImage}
                alt={'article image'}
                className="h-full max-h-1/2 object-cover"
                />
                <div className="rounded-b-xl p-3 shadow-md h-full max-h-1/2">
                    <h2 className="text-xl font-bold capitalize">{articleTopic}</h2>
                    <p className="md:text-sm text-gray-400">{articleDesc}</p>
                </div>
            </Link>
        </>
     );
}

export default ArticleCard;