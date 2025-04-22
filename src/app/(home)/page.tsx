import { Gallery } from "@/components/Gallery"
import Section from "@/components/Section"
import { homeSlideImages } from "@/utils/home-slide-images"
import Collections from "./collections"
import ProductListing from "@/components/ProductListing"

// Array de imagens para o slide da HomePage
const images = homeSlideImages

const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto space-y-5">
      <div>
        <Gallery images={images} width="1440px" height="681px" radius="8px" />
      </div>
      <Section
        title="Coleções em destaque"
        link={{ text: "", href: "#" }}
        titleAlign="left"
      >
        <div>
          <Collections />
        </div>
      </Section>

      <ProductListing />
    </div>
  )
}

export default HomePage
