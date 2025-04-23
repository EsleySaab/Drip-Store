import Link from "next/link"
import ProductCard from "../ProductCard"
import Section from "../Section"
import { ArrowRightIcon } from "lucide-react"

const ProductListing = () => {
  return (
    <Section
      title="Produtos em alta"
      titleAction={
        <div>
          <Link href="/products">
            <div className="flex items-center mr-8 md:mr-0 gap-1">
              <p className="text-primary">Ver todos</p>
              <ArrowRightIcon className="text-primary" size={18} />
            </div>
          </Link>
        </div>
      }
    >
      <ProductCard />
    </Section>
  )
}

export default ProductListing
