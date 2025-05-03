import Section from "@/components/Section"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"
import ProductListing from "@/components/ProductListing"

const RelatedProducts = () => {
  return (
    <div className="w-[1090px] mt-10 hidden md:block">
      <Section
        title="Produtos Relacionados"
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
        <ProductListing limit={4} />
      </Section>
    </div>
  )
}

export default RelatedProducts
