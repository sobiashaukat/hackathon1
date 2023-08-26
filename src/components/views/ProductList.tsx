import React from "react";
import Image from "next/image";
import p2 from "/public/p2.webp";
import ProductCard from "../ProductCard";
import Baztaar from "/public/Baztar.png";
import Bustle from "/public/Bustle.png";
import InStyle from "/public/Instyle.png";
import Vercel from "/public/vercel.svg";
import { products } from "@/utils/mock";

const ProductList = () => {
  const productChunks = products.slice(0,3);
 
  return (
   
      <div className="flex justify-evenly mt-16 space-x-3  container">

        {
         productChunks.map((products) =>(
          <ProductCard key={products.id}
           title={products.name} 
            price={products.price}
            imge={p2}
             category={products.category}
              id={products.id}/>

         ))
        },

        {/* <ProductCard title="abc" price={100} img={p2} />
        <ProductCard title="xyz" price={200} img={p2} />
        <ProductCard title="jacket" price={1000} img={p2} /> */}
      </div>
    
  );
};
export default ProductList;
