import { products } from "@/utils/products"
import ProductCard from "../ProductCard"
import clsx from "clsx"

interface ProductListingProps {
  mdCols?: number
  className?: string
  limit?: number
  mobileMarginX?: string
}

const ProductListing = ({
  mdCols = 4,
  className = "",
  limit,
  mobileMarginX,
}: ProductListingProps) => {
  const gridCols = clsx("grid grid-cols-2 gap-4", {
    "md:grid-cols-3": mdCols === 3,
    "md:grid-cols-4": mdCols === 4,
  })

  // Array de produtos
  const productsArray = products

  const productsList = limit ? productsArray.slice(0, limit) : productsArray

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
