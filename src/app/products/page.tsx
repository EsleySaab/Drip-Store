"use client"

import Section from "@/components/Section"
import { products } from "@/utils/products"
import ProductsFilters from "./products-filters"
import ProductListing from "@/components/ProductListing"
import ProductsFiltersMobile from "./products-filters-mobile"
import { useSearchParams } from "next/navigation"
import Image from "next/image"

const Products = () => {
  const searchParams = useSearchParams()
  const filter = searchParams.get("filter") || ""

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  )

  const sectionText = () => {
    if (filteredProducts.length === 0) {
      return ""
    } else if (filteredProducts.length === 1) {
      return "1 produto encontrado."
    } else {
      return `${filteredProducts.length} produtos encontrados.`
    }
  }

  return (
    <div className="max-w-[1440px] mx-auto space-y-5 h-full">
      <div className="grid grid-cols-1 md:grid-cols-[308px_1fr] gap-8">
        <div className="hidden md:block">
          <ProductsFilters />
        </div>
        {/* MAIN */}
        <main className="mt-4">
          <div className="md:hidden flex items-center w-[350px] h-[102px] mx-auto gap-3">
            <ProductsFiltersMobile />
          </div>
          <Section title={sectionText()} mobileMarginX="mx-7">
            <div className="mt-3">
              {filteredProducts.length === 0 ? (
                <>
                  <p className="text-center text-dark-gray-2 font-bold text-2xl">
                    Desculpe, nenhum produto encontrado.
                  </p>
                  <Image
                    src="/empty-search.png"
                    width={320}
                    height={320}
                    alt="Desculpe, nenhum produto econtrado."
                    className="mx-auto mt-20"
                  />
                </>
              ) : (
                <ProductListing
                  mdCols={3}
                  mobileMarginX="mx-7"
                  products={filteredProducts}
                />
              )}
            </div>
          </Section>
        </main>
      </div>
    </div>
  )
}

export default Products
