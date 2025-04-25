import { Gallery } from "@/components/Gallery"
import { productImages } from "@/utils/product-view-items"
import StarRating from "./star-rating"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

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
        <div className="flex flex-col gap-3">
          <h2 className="md:text-4xl text-xl line-clamp-2 font-bold">
            Tênis Nike Revolution 6 Next Nature Masculino
          </h2>
          <p className="text-xs text-gray-700">Casual | Nike | REF:38416711</p>
          <div className="flex gap-3 items-center">
            <StarRating totalStars={5} filledStars={4} />
            <Badge className="flex gap-1 bg-yellow-500 md:w-[60px] w-[50px] h-[23px] justify-center">
              <p className="text-white">4.7</p>
              <Star width={10} className="text-white" fill="currentColor" />
            </Badge>
            <p className="md:text-sm text-xs text-gray-500">(90 avaliações)</p>
          </div>
          <div className="flex  items-center">
            <p className="mt-2 mr-1">R$</p>
            <h3 className="text-3xl font-bold">219</h3>
            <p className="mt-2 mr-3 font-bold">,00</p>
            <p className="text-sm text-gray-400 line-through mt-2">250,00</p>
          </div>

          <div>
            <h3 className="text-gray-400 font-semibold">
              Descrição do produto
            </h3>
            <p className="line-clamp-4 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView
