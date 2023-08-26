import { products } from "@/utils/mock";
import ProductCard from "@/components/ProductCard";
import { StaticImageData } from "next/image";

const getProductsByCategory = (category: string) => {
  return products.filter((products) => products.category === category);
};

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);

  console.log("params.category", params, params.slug);

  console.log("string", result);
  return (
    <div
      className="flex flex-1 justify-evenly mt-16 py-10 mb-40 
      "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-10 mx-auto">
        {result.length > 0 ? (
          result.map((product) => (
            <div className="flex flex-col items-center" key={product.id}>
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                imge={product.image as StaticImageData}
                category={product.category}
                id={product.id}
              />
            </div>
          ))
        ) : (
          <p>No Products Found</p>
        )}
      </div>
    </div>
  );
}
