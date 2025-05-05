"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"

interface SearchInputProps {
  isMobile?: boolean
}

const SearchInput = ({ isMobile = false }: SearchInputProps) => {
  const [input, setInput] = useState("")
  const router = useRouter()

  const handleSearch = () => {
    if (input.trim() === "") return
    router.push(`/products?filter=${encodeURIComponent(input)}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch()
  }

  return (
    <div
      className={clsx(
        "items-center bg-gray-100 px-4 py-3 rounded-md",
        isMobile ? "flex w-[300px] mx-auto md:hidden" : "hidden md:flex flex-1"
      )}
    >
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="bg-gray-100 w-full outline-0 text-gray-600"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Search
        className="text-light-gray cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  )
}

export default SearchInput
