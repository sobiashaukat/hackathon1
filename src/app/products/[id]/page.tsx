import Quantity from "@/components/Quantity";

import { products } from "@/utils/mock";

import { StaticImageData } from "next/image";
import Image from "next/image";

const getProductsDetail = (id: number | string) => {
  return products.filter((product) => product.id == id);
};

const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsDetail(params.id);
  console.log(result);
  return (
    <div className="flex mt-16 py-10 flex-wrap">
      {result.map((Product: any) => (
        <div key={Product.id} className="flex justify-between gap-6">
          <div>
            <Image src={Product.image} alt={Product.name} />
          </div>

          <div>
            <h1 className="text-2xl">{Product.name} </h1>
            <h2 className="text-base text-grey-400 font-semibold">{Product.tagline}</h2>

            {/* <p>Name {Product.name}</p>
            <p>Price {Product.tagline}</p> */}
            {/* <p>Category {Product.category}</p> */}
            <div>
              <h3 className="mt-6 text-xs font-semibold">SELECT SIZE</h3>
              {/* Sizes */}
              <div className="flex gap-x-3">

              {sizes.map((item) => {
                return (
                  <div className=" flex items-center justify-center w-6 h-6 mt-2 border duration-300 rounded-full hover:shadow-xl">
                    <span className="text-[10px] font-semibold text-center text-gray-600">
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
            </div>

            {/* Quantity */}
           

            <div className="flex gap-x-3 mt-6 items-center">
              <h3 className="text-[10px] font-semibold ">Quantity:</h3>
              <Quantity/>
              <div></div>
              {/* Quantity tag here */}
            </div>

            {/* <div className="w-6 h-6 border duration-300 rounded-full 
                hover:shadow-2xl flex justify-center item-center
                ">
                  <span className="text-[10px] font-semibold text-center text-gray-600
                  "> {item} </span>
  
       </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}
