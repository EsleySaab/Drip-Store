import Image from "next/image"

const Collections = () => {
  return (
    <div className="flex space-x-5">
      <Image
        alt="Destaque"
        src="/collection-1.png"
        width={405}
        height={251}
        className="rounded-md w-full"
      />
      <Image
        alt="Destaque 2"
        src="/collection-2.png"
        width={405}
        height={251}
        className="rounded-md w-full"
      />
      <Image
        alt="Destaque 3"
        src="/collection-3.png"
        width={405}
        height={251}
        className="rounded-md w-full"
      />
    </div>
  )
}

export default Collections
