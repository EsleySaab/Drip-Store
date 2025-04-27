import { Gallery } from "@/components/Gallery"
import { productImages } from "@/utils/product-view-items"

import { ArrowRightIcon } from "lucide-react"

import ProductListing from "@/components/ProductListing"
import Section from "@/components/Section"
import Link from "next/link"
import BuyBox from "@/components/BuyBox"

const ProductView = () => {
  // Array de imagens
  const images = productImages

  return (
    <div className="max-w-[1440px] md:px-20 px-5 md:py-8">
      <div className="flex flex-col md:gap-10 md:flex-row gap-4">
        <Gallery
          images={images}
          widthDesktop="700px"
          widthMobile="100%"
          heightDesktop="571px"
          showThumbs
        />

        {/* BuyBox */}
        <BuyBox />
      </div>

      <div className="md:mt-[150px]">
        <Section mobileMarginX="mx-0"
          title="Produtos em alta"
          titleAction={
            <div>
              <Link href="/products">
                <div className="flex items-center mr-3 md:mr-0 gap-1">
                  <p className="text-primary">Ver todos</p>
                  <ArrowRightIcon className="text-primary" size={18} />
                </div>
              </Link>
            </div>
          }
        >
          <div className="mt-3">
            <ProductListing limit={4} mobileMarginX="mx-0"/>
          </div>
        </Section>
      </div>
    </div>
  )
}

export default ProductView
