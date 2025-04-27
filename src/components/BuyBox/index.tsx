import StarRating from "./star-rating"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import { ProductOptions } from "@/components/ProductOptions"
import { optionsSize } from "@/utils/optionsSize"
import { optionsColor } from "@/utils/optionsColor"
import { Button } from "@/components/ui/button"

const BuyBox = () => {
  const colorOptions = optionsColor
  const sizeOptions = optionsSize

  return (
    <div className="flex flex-col gap-3">
      <h2 className="md:text-4xl text-xl line-clamp-2 font-bold">
        Tênis Nike Revolution 6 Next Nature Masculino
      </h2>
      <p className="text-xs text-gray-700">Casual | Nike | REF:38416711</p>
      <div className="flex gap-3 items-center">
        <StarRating totalStars={5} filledStars={4} />
        <Badge className="flex gap-1 bg-yellow-500 md:w-[60px] w-[50px] h-[23px] justify-center hover:bg-yellow-500">
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

      <div className="mb-4">
        <h3 className="text-gray-400 font-semibold">Descrição do produto</h3>
        <p className="line-clamp-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco.
        </p>
      </div>
      <div className="flex flex-col space-y-3">
        <div>
          <h3 className="text-gray-400 font-semibold mb-2">Tamanho</h3>
          <ProductOptions options={sizeOptions} shape="square" type="text" />
        </div>
        <div>
          <h3 className="text-gray-400 font-semibold mb-2">Cor</h3>
          <ProductOptions options={colorOptions} shape="circle" type="color" />
        </div>
      </div>
      <Button className="bg-yellow-500 md:w-[220px] md:h-[45px] mt-10 cursor-pointer w-full mb-5">
        <p className="text-white text-lg uppercase">Comprar</p>
      </Button>
    </div>
  )
}

export default BuyBox
