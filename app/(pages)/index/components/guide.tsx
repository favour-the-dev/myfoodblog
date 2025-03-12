
import product1 from "../../../../assets/products.jpg";
import Image from "next/image";
import user1 from "../../../../assets/users/user1.jpg";
import products from "@/lib/dummyData";
import ProductCard from "./productCard";
function Guide() {
    return ( 
        <>
        <section className="w-full bg-[#F9F7EB] p-5 md:py-10">
            <div className="max-cont flex flex-col md:flex-row items-center gap-4">
                {/* products */}
                <div data-aos="fade-right" data-aos-anchor-placement="center-bottom" className="bg-[#FFFEF6] shadow-box rounded-xl max-w-[500px] md:max-w-[50%] min-h-[400px] hover:scale-[1.025] duration-300 ease-linear">
                    <h2 className="text-[30px] font-[500] p-4">Gift guide for foodies</h2>
                    <Image
                    src={product1}
                    alt=""
                    className="opacity-90 h-[250px]"
                    />
                    <div className="flex flex-col gap-5 p-3">
                        <div className="w-full flex-row-between">
                            <span className="border px-4 py-1 rounded-3xl font-[500] tracking-tighter">
                                Products
                            </span>
                            <span className="">
                               <sub className="text-lg">5</sub> min read
                            </span>
                        </div>
                        <div className="h-[1px] w-full bg-black opacity-10"/>
                        <div className="flex items-center gap-4">
                            <Image
                            src={user1}
                            alt=""
                            className="max-w-[60px] h-[60px] rounded-full"
                            />
                            <div className="flex flex-col">
                                <h3>Peter Pan</h3>
                                <p>March 20, 2023.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/*  */}
                <div className="w-full md:max-w-[50%] flex flex-col gap-4">
                    {products.map((prod)=>{
                        return(
                            <ProductCard
                            key={prod?.id}
                            productName={prod?.productName}
                            productImage={prod?.productImage}
                            productCategory = {prod?.productCategory}
                            minsRead={prod?.minsRead}
                            userImage={prod.userImage}
                            userName={prod?.userName}
                            createdAt={prod?.createdAt}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
        
        </>
     );
}

export default Guide;