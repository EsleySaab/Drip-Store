import { Badge } from "../ui/badge"
import Image from "next/image"
import Link from "next/link"

interface Product {
  name: string
  price: number
  priceDiscount: number
  image: string
  hasDiscountBadge?: boolean
}

interface ProductCardProps {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <Link href="/product-view">
        <div className="relative">
          {product.hasDiscountBadge && (
            <Badge className="bg-[#F6AA1C] absolute top-2 left-2 hover:bg-[#F6AA1C] w-[96px] h-[32px] flex items-center justify-center">
              <p>30% OFF</p>
            </Badge>
          )}
          <Image
            src={product.image}
            alt={product.name}
            width={163}
            height={179}
            className="rounded-b-sm md:w-full hover:border-2 border-primary transition-all duration-100 mb-2"
          />
        </div>
      </Link>
      <div className="flex flex-col">
        <p className="text-xs text-light-gray font-bold md:text-sm mb-1">Tênis</p>
        <p className="text-sm font-semibold text-dark-gray-2 md:text-md opacity-70">
          {product.name}
        </p>
        <div className="flex gap-2">
          <p className="opacity-50 line-through">${product.price}</p>
          <p className="font-bold text-dark-gray">${product.priceDiscount}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
