import ProductCard from "../ProductCard"
import clsx from "clsx"
import { Product } from "@/types/product"

interface ProductListingProps {
  products: Product[]
  mdCols?: number
  className?: string
  limit?: number
  mobileMarginX?: string
}

const ProductListing = ({
  products,
  mdCols = 4,
  className = "",
  limit,
  mobileMarginX,
}: ProductListingProps) => {
  const gridCols = clsx("grid grid-cols-2 gap-4", {
    "md:grid-cols-3": mdCols === 3,
    "md:grid-cols-4": mdCols === 4,
  })

  const productsList = limit ? products.slice(0, limit) : products

  return (
    <div
      className={clsx(gridCols, `md:gap-6 ${mobileMarginX} md:mx-0`, className)}
    >
      {productsList.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  )
}

export default ProductListing
