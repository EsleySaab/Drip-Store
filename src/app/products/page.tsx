import Section from "@/components/Section"
import { products } from "@/utils/products"
import ProductsFilters from "./products-filters"
import ProductListing from "@/components/ProductListing"
import ProductsFiltersMobile from "./products-filters-mobile"

const Products = () => {
  // Array de produtos
  const productsList = products

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
          <Section
            title={`Foram encontrados ${productsList.length} produtos`}
            mobileMarginX="mx-7"
          >
            <div className="mt-3">
              <ProductListing mdCols={3} mobileMarginX="mx-7" />
            </div>
          </Section>
        </main>
      </div>
    </div>
  )
}

export default Products
