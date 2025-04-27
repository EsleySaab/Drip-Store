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
  widthMobile?: string
  widthDesktop?: string
  heightMobile?: string
  heightDesktop?: string
  radius?: string
  showThumbs?: boolean
  images: { src: string }[]
}

export const Gallery = ({
  className,
  widthMobile = "100%",
  widthDesktop = "100%",
  heightMobile = "280px",
  heightDesktop = "681px",
  radius = "0px",
  showThumbs = true,
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
      className={clsx("relative", className)}
      style={{ maxWidth: widthMobile }}
    >
      {/* Slide principal */}
      <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
        {images.map((img, i) => (
          <div className="keen-slider__slide" key={i}>
            <div
              className="relative w-full"
              style={{
                height: heightMobile,
              }}
            >
              <Image
                src={img.src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-top md:object-contain rounded"
                style={{
                  borderRadius: radius,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Navegação */}
      <button
        onClick={goToPrev}
        disabled={isFirst}
        className="hidden sm:flex absolute left-1 top-75 -translate-y-1/2 z-10 disabled:opacity-40 cursor-pointer"
      >
        <Image src={ArrowLeft} alt="Anterior" />
      </button>

      <button
        onClick={goToNext}
        disabled={isLast}
        className="hidden sm:flex absolute right-1 top-75 -translate-y-1/2 z-10 disabled:opacity-40 cursor-pointer"
      >
        <Image src={ArrowRight} alt="Próxima" />
      </button>

      {/* Indicadores mobile */}
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
            <div
              key={index}
              className="md:w-[117px] md:h-[95px] w-[60px] h-[50px] shrink-0"
            >
              <Image
                src={img.src}
                alt={`Thumb ${index + 1}`}
                width={117}
                height={95}
                onClick={() => instanceRef.current?.moveToIdx(index)}
                className={clsx(
                  "object-cover cursor-pointer w-full h-full",
                  index === currentSlide
                    ? "border-2 border-primary"
                    : "border border-transparent"
                )}
                style={{
                  borderRadius: radius,
                }}
              />
            </div>
          ))}
        </div>
      )}

      <style jsx>{`
        @media (min-width: 640px) {
          div[style] {
            width: ${widthDesktop} !important;
          }

          div[style] {
            height: ${heightDesktop} !important;
          }
        }
      `}</style>
    </div>
  )
}
