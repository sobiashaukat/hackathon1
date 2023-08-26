import React from "react";
import Image, { StaticImageData } from "next/image";
import p2 from "/public/p2.webp";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface Props {
  title: string;
  price: number;
  imge: StaticImageData | string;
  category: string;
  id: string;
}

function ProductCard(props: Props) {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="py-5">
        {/* <Image src={p2} alt="image" /> */}
        <Image src = {props.imge} alt="product" />
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-">${props.price}</p>
        <p className="font-bold text-lg">
          Category {""}
          <span className="text-base font-normal">{props.category}</span>
        </p>

        <Button>Add to cart</Button>
      </div>
    </Link>
  );
}
export default ProductCard;
