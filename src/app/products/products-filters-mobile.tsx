import { Button } from "@/components/ui/button"
import OrderBy from "./order-by"
import { Filter } from "lucide-react"

const ProductsFiltersMobile = () => {
  return (
    <>
      <OrderBy />
      <Button className="bg-primary w-[60px] h-[60px] mt-4">
        <Filter className="text-white" />
      </Button>
    </>
  )
}

export default ProductsFiltersMobile
