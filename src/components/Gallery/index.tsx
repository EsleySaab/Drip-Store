"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react"
import clsx from "clsx"
import ArrowLeft from "@/assets/arrow-left.svg"
import ArrowRight from "@/assets/arrow-right.svg"
import Image from "next/image"

interface GalleryProps {
  className?: string
  width?: string
  height?: string
  radius?: string
  showThumbs?: boolean
  images: { src: string }[]
}

export const Gallery = ({
  className,
  width = "100%",
  radius = "0px",
  showThumbs = false,
  images,
}: GalleryProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: false,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const goToPrev = () => instanceRef.current?.prev()
  const goToNext = () => instanceRef.current?.next()

  const isFirst = currentSlide === 0
  const isLast = currentSlide === images.length - 1

  return (
    <div
      className={clsx("relative w-full", className)}
      style={{ maxWidth: width }}
    >
      {/* Slide principal */}
      <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
        {images.map((img, i) => (
          <div className="keen-slider__slide" key={i}>
            <div className="relative w-full h-[280px] sm:h-[681px]">
              <Image
                src={img.src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-top sm:object-cover rounded"
                style={{ borderRadius: radius }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Setas de navegação (Only Desktop) */}
      <button
        onClick={goToPrev}
        disabled={isFirst}
        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 disabled:opacity-40"
      >
        <Image src={ArrowLeft} alt="Anterior" />
      </button>

      <button
        onClick={goToNext}
        disabled={isLast}
        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 disabled:opacity-40"
      >
        <Image src={ArrowRight} alt="Próxima" />
      </button>

      {/* Indicadores de slide (Only Mobile) */}
      <div className="flex sm:hidden justify-center gap-2 mt-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={clsx(
              "w-2 h-2 rounded-full transition-colors",
              currentSlide === index ? "bg-primary" : "bg-zinc-300"
            )}
          />
        ))}
      </div>

      {showThumbs && (
        <div className="flex gap-2 sm:gap-4 mt-4 overflow-x-auto px-2 sm:px-0">
          {images.map((img, index) => (
            <Image
              width={117}
              height={95}
              key={index}
              src={img.src}
              onClick={() => instanceRef.current?.moveToIdx(index)}
              alt={`Thumb ${index + 1}`}
              className={clsx(
                "object-contain md:object-cover cursor-pointer shrink-0",
                index === currentSlide
                  ? "border-2 border-primary"
                  : "border border-transparent"
              )}
              style={{
                borderRadius: radius,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
