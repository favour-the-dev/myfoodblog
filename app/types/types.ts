import { StaticImageData } from "next/image";
import { IconType } from "react-icons/lib";
import { ReactNode } from "react";

export interface ProductCardProps{
    productImage: string | StaticImageData;
    productName: string
    productCategory: string
    minsRead: number
    userImage: string | StaticImageData
    userName: string
    createdAt: string | Date
}

export interface topicCardProps{
    Icon: IconType
    topic: string
}