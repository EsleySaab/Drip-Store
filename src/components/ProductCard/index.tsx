import { products } from "@/utils/products"
import Image from "next/image"
import Link from "next/link"

const ProductCard = () => {
  const productsList = products

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 mx-7 md:mx-0 md:w-[1440px]">
      {productsList.map((product, index) => (
        <div key={index}>
          <Link href="/">
            <Image
              src={product.image}
              alt={product.name}
              width={163}
              height={179}
              className="rounded-b-sm md:w-full hover:border-2 border-primary transition-all duration-100 mb-2"
            />
          </Link>
          <div className="flex flex-col">
            <p className="text-xs text-gray-400 font-bold md:text-sm mb-1">
              Tênis
            </p>
            <p className="text-sm font-semibold md:text-md opacity-70">
              {product.name}
            </p>
            <div className="flex gap-2">
              <p className="opacity-50 line-through">${product.price}</p>
              <p className="font-semibold">${product.priceDiscount}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductCard
