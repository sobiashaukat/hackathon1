import React from "react";
import Image from "next/image";
import p2 from "/public/p2.webp";
import ProductCard from "../ProductCard";
import Baztaar from "/public/Baztar.png";
import Bustle from "/public/Bustle.png";
import InStyle from "/public/Instyle.png";
import Vercel from "/public/vercel.svg";

const ProductList = () => {
  return (
    <div>
      <div className="flex justify-evenly mt-16 space-x-3  container">
        <ProductCard title="abc" price={100} />
        <ProductCard title="xyz" price={200} />
        <ProductCard title="jacket" price={1000} />
      </div>
    </div>
  );
};
export default ProductList;
