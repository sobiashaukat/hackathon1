import React from "react";
import Image from "next/image";
import p2 from "/public/p2.webp";
import {FC} from "react"





function ProductCard (props:{title:string,price:number})  {
    return (
        <div>
      <div>
        <Image src={p2} alt="image" />
        <h3 className="font-bold text-lg mt-3">{props.title}</h3>
        <p className="font-bold text-">${props.price}</p>
      </div>


</div>


    );
  };
  export default ProductCard;
  
