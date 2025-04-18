import { Search } from "lucide-react"

const SearchInput = () => {
  return (
    <div className="hidden md:flex flex-1 items-center bg-gray-100 px-4 py-3 rounded-md">
      <input
        type="text"
        placeholder="Pesquisar produto..."
        className="bg-gray-100 w-full outline-0 text-gray-600"
      />
      <Search className="text-light-gray" />
    </div>
  )
}

export default SearchInput
