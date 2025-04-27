"use client"

import { useState } from "react"
import clsx from "clsx"

interface ProductOptionsProps {
  options: string[]
  radius?: string
  shape: "square" | "circle"
  type: "text" | "color"
}

export function ProductOptions({
  options,
  radius = "8px",
  shape,
  type,
}: ProductOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)

  const handleSelect = (option: string) => {
    setSelectedOption(option)
  }

  return (
    <div className="flex flex-wrap gap-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleSelect(option)}
          className={clsx(
            "flex items-center justify-center",
            "transition-colors",
            "cursor-pointer",
            shape === "circle"
              ? ""
              : selectedOption === option
              ? "border-2 border-primary bg-primary"
              : "border border-light-gray-2",
            selectedOption === option &&
              shape === "circle" &&
              "outline-2 outline-primary outline-offset-2",
            {
              "w-[46px] h-[46px]": shape === "square",
              "w-[31px] h-[31px] rounded-full": shape === "circle",
              "text-white": selectedOption === option && type === "text",
              "text-dark-gray-2 text-[24px]": type === "text",
            }
          )}
          style={{
            borderRadius: shape === "square" ? radius : undefined,
            backgroundColor: type === "color" ? option : undefined,
          }}
        >
          {type === "text" ? option : null}
        </button>
      ))}
    </div>
  )
}
