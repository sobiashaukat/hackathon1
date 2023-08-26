import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <div className="flex container justify-between items-center py-6 px-8">
      <Link href={"/"} >
      <Image
        src={`https://ecomm-hackfest.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLOGO.491459f6.png&w=384&q=75`}
        width={150}
        height={150}
        alt="logo"
        />
        </Link>
      
      <ul className="flex gap-x-10">
        <li className="text-lg">
          <Link href={"category/female"}>Female</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/male"}>Male</Link>
        </li>
        <li className="text-lg">
          <Link href={"category/kids"}>Kids</Link>
        </li>
        <li className="text-lg">
          <Link href={"products"}>All Products</Link>
        </li>
      </ul>
      <div>
        <div className="h-10 w-10 rounded-full bg-gray-200 flex justify-center items-center ">
          <ShoppingCart className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};
export default Header;
