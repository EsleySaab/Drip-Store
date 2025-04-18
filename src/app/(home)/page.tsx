import { Gallery } from "@/components/Gallery"
import { homeSlideImages } from "@/utils/home-slide-images"

// Array de imagens para o slide da HomePage
const images = homeSlideImages

const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Gallery images={images} width="1440px" height="681px" radius="8px" />
    </div>
  )
}

export default HomePage
