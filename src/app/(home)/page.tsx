import { Gallery } from "@/components/Gallery"
import Section from "@/components/Section"
import { homeSlideImages } from "@/utils/home-slide-images"
import Collections from "./collections"
import ProductListing from "@/components/ProductListing"
import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

// Array de imagens para o slide da HomePage
const images = homeSlideImages

const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto space-y-5 h-full">
      {/* Slide de imagens da Página Inicial */}
      <div>
        <Gallery images={images} width="1440px" height="681px" radius="8px" />
      </div>
      {/* Coleções em destaque */}
      <Section title="Coleções em destaque" link={{ text: "", href: "#" }}>
        <div>
          <Collections />
        </div>
      </Section>

      {/* Listagem de Produtos em Alta */}
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
        <div className="mt-3">
          <ProductListing />
        </div>
      </Section>
    </div>
  )
}

export default HomePage
