import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { collections } from "@/utils/collections"
import Image from "next/image"
import Link from "next/link"

const Collections = () => {
  // Array de imagens das coleções em destaque
  const homeCollections = collections

  return (
    <div className="flex flex-col p-5 space-y-3 md:flex-row md:space-x-5">
      {homeCollections.map((collection, index) => (
        <div key={index} className="relative w-full">
          <Image
            alt={collection.title}
            src={collection.src}
            width={405}
            height={251}
            className="rounded-md w-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col px-4 py-3 md:px-8 md:py-5 space-y-30">
            <Badge className="bg-[#F6AA1C]  hover:bg-[#F6AA1C] w-[96] h-[32] flex items-center justify-center">
              <p>30% OFF</p>
            </Badge>
            <Link href="/products">
              <Button className="bg-white w-[153px] h-[48px] hover:bg-primary text-primary hover:text-gray-200 font-bold cursor-pointer">
                Comprar
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Collections
