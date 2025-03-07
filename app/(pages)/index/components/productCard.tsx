
import products from "../../../../assets/products.jpg";
import Image from "next/image";
import user1 from '../../../../assets/users/user.jpg';
import { ProductCardProps } from "@/app/types/types";

function ProductCard({productImage, productName, productCategory, minsRead, userImage, userName, createdAt}:ProductCardProps) {
    return ( 
        <>
            <div data-aos="flip-up" data-aos-anchor-placement="center-bottom" className="bg-[#FFFEF6] shadow-box rounded-xl px-4 flex flex-col md:flex-row gap-3 h-full max-h-fit md:max-h-[200px] md:overflow-hidden cursor-pointer hover:scale-[1.025] duration-300 ease-linear">
                {/* image */}
                <div className="w-full md:max-w-1/2">
                    <Image
                    src={productImage}
                    alt=""
                    className="md:w-full h-full max-h-[100px] md:max-h-full object-cover"
                    />
                </div>
                {/*  */}
                <div className="w-full md:max-w-1/2 p-2 flex flex-col gap-5">
                    <div className="w-full flex flex-col gap-1">
                        <h2 className="text-lg capitalize font-[500]">{productName}</h2>
                        <div className="w-full flex items-center justify-between text-sm">
                            <span className="text-sm border rounded-3xl px-3 py-1">{productCategory}</span>
                            <span className=""><sub>{minsRead}</sub> min read</span>
                        </div>
                    </div>
                    <div className="h-[1px] w-full bg-black opacity-15"/>
                    <div className="w-full flex items-center gap-3">
                        <Image
                        src={userImage}
                        alt=""
                        className="max-w-[50px] h-[50px] rounded-full"
                        />
                        <div className="text-sm">
                            <h3>{userName}</h3>
                            <span>
                            {createdAt ? (typeof createdAt === "string" ? createdAt : createdAt.toLocaleDateString()) : ""}
                            </span>
                        </div>  
                    </div>
                </div>
            </div>
        </>
     );
}

export default ProductCard;