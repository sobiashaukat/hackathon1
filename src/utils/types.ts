import { StaticImageData } from "next/image";

export type product = {
    id: string;
    name:string;
    tagline:"Dress"
    price:number;
    category:string;
    image:string | StaticImageData ;
};